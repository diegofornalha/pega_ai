const NONFUNGIBLETOKEN_BASE = "A.1d7e57aa55817448.NonFungibleToken";
const METADATAVIEWS_BASE = "A.1d7e57aa55817448.MetadataViews";

const createNFTItem = (name, nftType, contractName, contractAddress, logoURL, collectionPublicPath, collectionStoragePath) => ({
  name,
  nftType,
  contractName,
  contractAddress,
  collectionType: {
    type: `${contractAddress}.${contractName}.Collection`,
    restrictions: [
      `${contractAddress}.${contractName}.CollectionPublic`,
      `${NONFUNGIBLETOKEN_BASE}.CollectionPublic`,
      `${NONFUNGIBLETOKEN_BASE}.Receiver`,
      `${METADATAVIEWS_BASE}.ResolverCollection`
    ]
  },
  logoURL,
  collectionPublicPath,
  collectionStoragePath
});

export const NFTList = (network) => {
  const networkConfig = {
    mainnet: mainnetNFTList,
    testnet: testnetNFTList
  };
  return networkConfig[network] || [];
}

export const testnetNFTList = [
  createNFTItem("FLOAT", "A.0afe396ebc8eee65.FLOAT.NFT", "FLOAT", "0x0afe396ebc8eee65", "/float.png", "/public/FLOATCollectionPublicPath", "/storage/FLOATCollectionStoragePath")
];

export const mainnetNFTList = [
  createNFTItem("FLOAT", "A.2d4c3caffbeab845.FLOAT.NFT", "FLOAT", "0x2d4c3caffbeab845", "/float.png", "/public/FLOATCollectionPublicPath", "/storage/FLOATCollectionStoragePath"),
  createNFTItem("HeroesOfTheFlow", "A.1dc37ab51a54d83f.HeroesOfTheFlow.NFT", "HeroesOfTheFlow", "0x1dc37ab51a54d83f", "https://www.flowview.app/_next/image?url=https%3A%2F%2Fflowverse.myfilebase.com%2Fipfs%2FQmU7a1eLvsmLda1VPe2ioikeWmhPwk5Xm7eV2iBUuirm55&w=128&q=75", "/public/HeroesOfTheFlowCollection", "/storage/HeroesOfTheFlowCollection")
];
