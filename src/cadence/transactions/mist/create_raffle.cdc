import Mist from "../contracts/Mist.cdc"
import EligibilityVerifiers from "../contracts/EligibilityVerifiers.cdc"
import ExampleNFT from "../contracts/examplenft/ExampleNFT.cdc"
import MetadataViews from "../contracts/core/MetadataViews.cdc"

transaction(
    name: String,
    description: String,
    image: String?,
    url: String?,
    startAt: UFix64?,
    endAt: UFix64?,
    registrationEndAt: UFix64,
    numberOfWinners: UInt64,
    // NFTInfo
    nftName: String,
    nftTypeIdentifier: String,
    nftContractName: String,
    nftContractAddress: Address,
    nftCollectionTypeIdentifier: String,
    nftCollectionTypeRestrictions: [String],
    nftCollectionLogoURL: String,
    nftCollectionPublicPath: String,
    nftCollectionStoragePath: String,

    rewardTokenIDs: [UInt64],
    // EligibilityVerifier
    // Only support registrationVerify now
    withWhitelist: Bool,
    whitelist: {Address: Bool},

    withFloats: Bool,
    threshold: UInt32?,
    eventIDs: [UInt64],
    eventHosts: [Address]
) {
    let raffleCollection: &Mist.RaffleCollection
    let nftCollectionRef: &ExampleNFT.Collection
    let rewardDisplays: {UInt64: Mist.NFTDisplay}

    prepare(acct: AuthAccount) {
        if acct.borrow<&Mist.RaffleCollection>(from: Mist.RaffleCollectionStoragePath) == nil {
            acct.save(<- Mist.createEmptyRaffleCollection(), to: Mist.RaffleCollectionStoragePath)
            let cap = acct.link<&Mist.RaffleCollection{Mist.IRaffleCollectionPublic}>(
                Mist.RaffleCollectionPublicPath,
                target: Mist.RaffleCollectionStoragePath
            ) ?? panic("Could not link RaffleCollection to PublicPath")
        }

        self.raffleCollection = acct.borrow<&Mist.RaffleCollection>(from: Mist.RaffleCollectionStoragePath)
            ?? panic("Could not borrow RaffleCollection from signer")

        let nftStoragePath = StoragePath(identifier: nftCollectionStoragePath)!
        self.nftCollectionRef = acct.borrow<&ExampleNFT.Collection>(from: nftStoragePath)
            ?? panic("Could not borrow collection from signer")

        self.rewardDisplays = {}
        for tokenID in rewardTokenIDs {
            let resolver = self.nftCollectionRef.borrowViewResolver(id: tokenID)
            let mDisplay = MetadataViews.getDisplay(resolver)!
            // Mist.NFTDisplay has no extraData field, we put rarity desc to description temporarily
            var desc = mDisplay.description
            if let mRarity = MetadataViews.getRarity(resolver) {
                if let rarityDesc = mRarity.description {
                    desc = rarityDesc
                }
            }
            let display = Mist.NFTDisplay(
                tokenID: tokenID,
                name: mDisplay.name,
                description: desc,
                thumbnail: mDisplay.thumbnail.uri()
            )
            self.rewardDisplays[tokenID] = display
        } 
    }

    execute {
        assert(UInt64(rewardTokenIDs.length) >= numberOfWinners, message: "reward number is not enough")

        let nftInfo = Mist.NFTInfo(
            name: nftName,
            nftType: CompositeType(nftTypeIdentifier)!,
            contractName: nftContractName,
            contractAddress: nftContractAddress,
            collectionType: RestrictedType(
                identifier: nftCollectionTypeIdentifier,
                restrictions: nftCollectionTypeRestrictions
            )!,
            collectionLogoURL: nftCollectionLogoURL,
            collectionStoragePath: StoragePath(identifier: nftCollectionStoragePath)!,
            collectionPublicPath: PublicPath(identifier: nftCollectionPublicPath)!
        )
        
        var verifier: {EligibilityVerifiers.IEligibilityVerifier}? = nil
        if withWhitelist {
            verifier = EligibilityVerifiers.Whitelist(
                whitelist: whitelist
            )
        } else if withFloats {
            assert(eventIDs.length == eventHosts.length, message: "eventIDs should have the same length with eventHosts")
            let events: [EligibilityVerifiers.FLOATEventData] = []
            var counter = 0
            while counter < eventIDs.length {
                let event = EligibilityVerifiers.FLOATEventData(host: eventHosts[counter], eventID: eventIDs[counter])
                events.append(event)
                counter = counter + 1
            }
            verifier = EligibilityVerifiers.FLOATsV2(
                events: events,
                mintedBefore: getCurrentBlock().timestamp,
                threshold: threshold!
            )
        } else {
            panic("invalid verifier")
        }

        let collection <- ExampleNFT.createEmptyCollection()
        let raffleID = self.raffleCollection.createRaffle(
            name: name, 
            description: description, 
            host: self.nftCollectionRef.owner!.address, 
            image: image,
            url: url,
            startAt: startAt,
            endAt: endAt,
            registrationEndAt: registrationEndAt,
            numberOfWinners: numberOfWinners,
            nftInfo: nftInfo,
            collection: <- collection,
            registrationVerifyMode: EligibilityVerifiers.VerifyMode.all,
            claimVerifyMode: EligibilityVerifiers.VerifyMode.all,
            registrationVerifiers: [verifier!],
            claimVerifiers: [],
            extraData: {}
        )

        let raffle = self.raffleCollection.borrowRaffleRef(raffleID: raffleID)!
        for tokenID in rewardTokenIDs {
            let token <- self.nftCollectionRef.withdraw(withdrawID: tokenID)
            let display = self.rewardDisplays[tokenID]!
            raffle.deposit(token: <- token, display: display)
        }
    }
}