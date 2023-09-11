"use strict";
exports.id = 410;
exports.ids = [410];
exports.modules = {

/***/ 4410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B7": () => (/* binding */ queryClaimStatus),
/* harmony export */   "DO": () => (/* binding */ queryRaffles),
/* harmony export */   "i0": () => (/* binding */ queryRaffle),
/* harmony export */   "ib": () => (/* binding */ getNFTDisplays)
/* harmony export */ });
/* harmony import */ var _publicConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5820);
/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5023);



const MistPath = "0xMist";
const getNFTDisplays = async (account, nft)=>{
    const [imports, interfaces] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .generateImportsAndInterfaces */ .xg)(nft.collectionType.restrictions);
    let rawCode = `
  pub struct NFTDisplay {
    pub let tokenID: UInt64
    pub let name: String
    pub let description: String
    pub let thumbnail: String
    pub let extraData: {String: AnyStruct}

    init(tokenID: UInt64, name: String, description: String, thumbnail: String, extraData: {String: AnyStruct}) {
      self.tokenID = tokenID
      self.name = name
      self.description = description
      self.thumbnail = thumbnail
      self.extraData = extraData
    }
  }

  pub fun main(account: Address): {UInt64: NFTDisplay} {
      let NFTs: {UInt64: NFTDisplay} = {}
      let owner = getAuthAccount(account)
      let tempPathStr = "drizzleTempPath"
      let tempPublicPath = PublicPath(identifier: tempPathStr)!
      owner.link<&{MetadataViews.ResolverCollection}>(
              tempPublicPath,
              target: ${nft.collectionStoragePath}
      )

      if let collection = owner.getCapability<&{MetadataViews.ResolverCollection}>(tempPublicPath).borrow() {
          for tokenID in collection.getIDs() {
              let resolver = collection.borrowViewResolver(id: tokenID)
              if let display = MetadataViews.getDisplay(resolver) {
                  var name = display.name
                  if name.length == 0 {
                    name = "${nft.contractName} #".concat(tokenID.toString())
                  }
                  NFTs[tokenID] = NFTDisplay(
                    tokenID: tokenID,
                    name: name,
                    description: display.description,
                    thumbnail: display.thumbnail.uri(),
                    extraData: {}
                  )
              }
          }
      }

      return NFTs
  }
  `;
    if (nft.contractName == "FlovatarComponent" || nft.contractName == "TopShot" || nft.contractName == "Flovatar") {
        rawCode = `
    pub struct NFTDisplay {
      pub let tokenID: UInt64
      pub let name: String
      pub let description: String
      pub let thumbnail: String
      pub let extraData: {String: AnyStruct}
  
      init(tokenID: UInt64, name: String, description: String, thumbnail: String, extraData: {String: AnyStruct}) {
        self.tokenID = tokenID
        self.name = name
        self.description = description
        self.thumbnail = thumbnail
        self.extraData = extraData
      }
    }
  
    pub fun main(account: Address): {UInt64: NFTDisplay} {
        let NFTs: {UInt64: NFTDisplay} = {}
        let owner = getAuthAccount(account)
        let tempPathStr = "drizzleTempPath"
        let tempPublicPath = PublicPath(identifier: tempPathStr)!
        owner.link<&{MetadataViews.ResolverCollection}>(
                tempPublicPath,
                target: ${nft.collectionStoragePath}
        )
  
        if let collection = owner.getCapability<&{MetadataViews.ResolverCollection}>(tempPublicPath).borrow() {
            for tokenID in collection.getIDs() {
                let resolver = collection.borrowViewResolver(id: tokenID)
                let extraData: {String: AnyStruct} = {}
                if let rarity = MetadataViews.getRarity(resolver) {
                  if let description = rarity.description {
                    extraData["rarityDesc"] = rarity.description
                  }
                }

                if let display = MetadataViews.getDisplay(resolver) {
                    var name = display.name
                    if name.length == 0 {
                      name = "${nft.contractName} #".concat(tokenID.toString())
                    }
                    NFTs[tokenID] = NFTDisplay(
                      tokenID: tokenID,
                      name: name,
                      description: display.description,
                      thumbnail: display.thumbnail.uri(),
                      extraData: extraData
                    )
                }
            }
        }
  
        return NFTs
    }
    `;
    }
    if (nft.contractName == "FLOAT") {
        rawCode = `
    pub struct NFTDisplay {
      pub let tokenID: UInt64
      pub let name: String
      pub let description: String
      pub let thumbnail: String
      pub let extraData: {String: AnyStruct}
  
      init(tokenID: UInt64, name: String, description: String, thumbnail: String, extraData: {String: AnyStruct}) {
        self.tokenID = tokenID
        self.name = name
        self.description = description
        self.thumbnail = thumbnail
        self.extraData = extraData
      }
    }
  
    pub fun main(account: Address): {UInt64: NFTDisplay} {
        let NFTs: {UInt64: NFTDisplay} = {}
  
        if let collection = getAccount(account).getCapability(${nft.collectionPublicPath}).borrow<&{${interfaces}}>() {
          for tokenID in collection.getIDs() {
            if collection.borrowFLOAT(id: tokenID)!.getEventMetadata()?.transferrable == true {
                let resolver = collection.borrowViewResolver(id: tokenID)
                if let display = MetadataViews.getDisplay(resolver) {
                    NFTs[tokenID] = NFTDisplay(
                        tokenID: tokenID,
                        name: display.name,
                        description: display.description,
                        thumbnail: display.thumbnail.uri(),
                        extraData: {}
                    )
                }
            }
          }
        }
        return NFTs
    }
    `;
    }
    const code = imports.concat(rawCode);
    const event = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.query({
        cadence: code,
        args: (arg, t)=>[
                arg(account, t.Address)
            ]
    });
    return event;
};
const queryClaimStatus = async (raffleID, host, claimer)=>{
    const code = `
  import Mist from 0xMist

  pub struct ClaimStatus {
      pub let availability: Mist.Availability
      pub let eligibilityForRegistration: Mist.Eligibility
      pub let eligibilityForClaim: Mist.Eligibility
  
      init(
          availability: Mist.Availability,
          eligibilityForRegistration: Mist.Eligibility,
          eligibilityForClaim: Mist.Eligibility
      ) {
          self.availability = availability
          self.eligibilityForRegistration = eligibilityForRegistration
          self.eligibilityForClaim = eligibilityForClaim
      }
  }
  
  pub fun main(raffleID: UInt64, host: Address, claimer: Address): ClaimStatus {
      let raffleCollection =
          getAccount(host)
          .getCapability(Mist.RaffleCollectionPublicPath)
          .borrow<&Mist.RaffleCollection{Mist.IRaffleCollectionPublic}>()
          ?? panic("Could not borrow IRaffleCollectionPublic from address")
  
      let raffle = raffleCollection.borrowPublicRaffleRef(raffleID: raffleID)
          ?? panic("Could not borrow raffle")
  
      let availability = raffle.checkAvailability(params: {})
      let eligibilityR = raffle.checkRegistrationEligibility(account: claimer, params: {})
      let eligibilityC = raffle.checkClaimEligibility(account: claimer, params: {})
  
      return ClaimStatus(
          availability: availability,
          eligibilityForRegistration: eligibilityR,
          eligibilityForClaim: eligibilityC
      )
  }
  `.replace(MistPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].mistAddress */ .Z.mistAddress);
    const status = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.query({
        cadence: code,
        args: (arg, t)=>[
                arg(raffleID, t.UInt64),
                arg(host, t.Address),
                arg(claimer, t.Address), 
            ]
    });
    return status;
};
const queryRaffle = async (raffleID, host)=>{
    const code = `
  import Mist from 0xMist

  pub fun main(raffleID: UInt64, host: Address): &{Mist.IRafflePublic} {
      let raffleCollection =
          getAccount(host)
          .getCapability(Mist.RaffleCollectionPublicPath)
          .borrow<&Mist.RaffleCollection{Mist.IRaffleCollectionPublic}>()
          ?? panic("Could not borrow IRaffleCollectionPublic from address")
  
      let raffleRef = raffleCollection.borrowPublicRaffleRef(raffleID: raffleID)
          ?? panic("Could not borrow raffle")
  
      return raffleRef
  }
  `.replace(MistPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].mistAddress */ .Z.mistAddress);
    const raffle = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.query({
        cadence: code,
        args: (arg, t)=>[
                arg(raffleID, t.UInt64),
                arg(host, t.Address)
            ]
    });
    return raffle;
};
const queryRaffles = async (address)=>{
    const code = `
  import Mist from 0xMist

  pub fun main(account: Address): {UInt64: &{Mist.IRafflePublic}} {
      let raffleCollection =
          getAccount(account)
          .getCapability(Mist.RaffleCollectionPublicPath)
          .borrow<&Mist.RaffleCollection{Mist.IRaffleCollectionPublic}>()
  
      if let collection = raffleCollection {
          return collection.getAllRaffles()
      }
  
      return {}
  }
  `.replace(MistPath, _publicConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].mistAddress */ .Z.mistAddress);
    const raffles = await _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.query({
        cadence: code,
        args: (arg, t)=>[
                arg(address, t.Address)
            ]
    });
    return raffles ?? [];
};


/***/ })

};
;