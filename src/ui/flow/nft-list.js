const FLOAT_LOGO_URL = "/float.png";
const HEROES_LOGO_URL = "https://flowverse.myfilebase.com/ipfs/QmU7a1eLvsmLda1VPe2ioikeWmhPwk5Xm7eV2iBUuirm55";

function createNFT(name, nftType, contractName, contractAddress, collectionType, logoURL, collectionPublicPath, collectionStoragePath) {
  return {
    name,
    nftType,
    contractName,
    contractAddress,
    collectionType,
    logoURL,
    collectionPublicPath,
    collectionStoragePath
  };
}

const testnetNFTList = [
  createNFT(
    "FLOAT",
    "A.0afe396ebc8eee65.FLOAT.NFT",
    "FLOAT",
    "0x0afe396ebc8eee65",
    {
      type: "A.0afe396ebc8eee65.FLOAT.Collection",
      restrictions: [
        "A.0afe396ebc8eee65.FLOAT.CollectionPublic",
        "A.631e88ae7f1d7c20.NonFungibleToken.CollectionPublic",
        "A.631e88ae7f1d7c20.NonFungibleToken.Receiver",
        "A.631e88ae7f1d7c20.MetadataViews.ResolverCollection"
      ]
    },
    FLOAT_LOGO_URL,
    "/public/FLOATCollectionPublicPath",
    "/storage/FLOATCollectionStoragePath"
  )
];

const mainnetNFTList = [
  createNFT(
    "FLOAT",
    "A.2d4c3caffbeab845.FLOAT.NFT",
    "FLOAT",
    "0x2d4c3caffbeab845",
    {
      type: "A.2d4c3caffbeab845.FLOAT.Collection",
      restrictions: [
        "A.2d4c3caffbeab845.FLOAT.CollectionPublic",
        "A.1d7e57aa55817448.NonFungibleToken.CollectionPublic",
        "A.1d7e57aa55817448.NonFungibleToken.Receiver",
        "A.1d7e57aa55817448.MetadataViews.ResolverCollection"
      ]
    },
    FLOAT_LOGO_URL,
    "/public/FLOATCollectionPublicPath",
    "/storage/FLOATCollectionStoragePath"
  ),
  createNFT(
    "HeroesOfTheFlow",
    "A.1dc37ab51a54d83f.HeroesOfTheFlow.NFT",
    "HeroesOfTheFlow",
    "0x1dc37ab51a54d83f",
    {
      type: "A.1dc37ab51a54d83f.HeroesOfTheFlow.Collection",
      restrictions: [
        "A.1dc37ab51a54d83f.HeroesOfTheFlow.CollectionPublic",
        "A.1d7e57aa55817448.NonFungibleToken.CollectionPublic",
        "A.1d7e57aa55817448.NonFungibleToken.Receiver",
        "A.1d7e57aa55817448.MetadataViews.ResolverCollection"
      ]
    },
    HEROES_LOGO_URL,
    "/public/HeroesOfTheFlowCollection",
    "/storage/HeroesOfTheFlowCollection"
  )
];

export const NFTList = (network) => {
  const networkConfig = {
    mainnet: mainnetNFTList,
    testnet: testnetNFTList
  };

  return networkConfig[network] || [];
};
