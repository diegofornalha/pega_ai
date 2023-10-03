export const NFTList = (network) => {
  if (network === "mainnet") {
    return mainnetNFTList;
  }
  return testnetNFTList;
}

export const testnetNFTList = [
  {
    name: "FLOAT",
    nftType: "A.0afe396ebc8eee65.FLOAT.NFT",
    contractName: "FLOAT",
    contractAddress: "0x0afe396ebc8eee65",
    collectionType: {
      type: "A.0afe396ebc8eee65.FLOAT.Collection",
      restrictions: [
        "A.0afe396ebc8eee65.FLOAT.CollectionPublic",
        "A.631e88ae7f1d7c20.NonFungibleToken.CollectionPublic",
        "A.631e88ae7f1d7c20.NonFungibleToken.Receiver",
        "A.631e88ae7f1d7c20.MetadataViews.ResolverCollection"
      ]
    },
    logoURL: "/float.png",
    collectionPublicPath: "/public/FLOATCollectionPublicPath",
    collectionStoragePath: "/storage/FLOATCollectionStoragePath"
  }
];

export const mainnetNFTList = [
  {
    name: "FLOAT",
    nftType: "A.2d4c3caffbeab845.FLOAT.NFT",
    contractName: "FLOAT",
    contractAddress: "0x2d4c3caffbeab845",
    collectionType: {
      type: "A.2d4c3caffbeab845.FLOAT.Collection",
      restrictions: [
        "A.2d4c3caffbeab845.FLOAT.CollectionPublic",
        "A.1d7e57aa55817448.NonFungibleToken.CollectionPublic",
        "A.1d7e57aa55817448.NonFungibleToken.Receiver",
        "A.1d7e57aa55817448.MetadataViews.ResolverCollection"
      ]
    },
    logoURL: "/float.png",
    collectionPublicPath: "/public/FLOATCollectionPublicPath",
    collectionStoragePath: "/storage/FLOATCollectionStoragePath"
  },
  {
    name: "HeroesOfTheFlow",
    nftType: "A.1dc37ab51a54d83f.HeroesOfTheFlow.NFT",
    contractName: "HeroesOfTheFlow",
    contractAddress: "0x1dc37ab51a54d83f",
    collectionType: {
      type: "A.1dc37ab51a54d83f.HeroesOfTheFlow.Collection",
      restrictions: [
        "A.1dc37ab51a54d83f.HeroesOfTheFlow.CollectionPublic",
        "A.1d7e57aa55817448.NonFungibleToken.CollectionPublic",
        "A.1d7e57aa55817448.NonFungibleToken.Receiver",
        "A.1d7e57aa55817448.MetadataViews.ResolverCollection"
      ]
    },
    logoURL: "https://flowverse.myfilebase.com/ipfs/QmU7a1eLvsmLda1VPe2ioikeWmhPwk5Xm7eV2iBUuirm55",
    collectionPublicPath: "/public/HeroesOfTheFlowCollection",
    collectionStoragePath: "/storage/HeroesOfTheFlowCollection"
  }
];
