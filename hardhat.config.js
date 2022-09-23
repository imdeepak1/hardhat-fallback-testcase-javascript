require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: `hardhat`,
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/57JP4p7fKIyCYCrONB75iVoPEFNaJKLG`,
      accounts:[`39bc685120fc08726a759e38c69ed85851cd4f1697771160fc809973ed403945`],
    },
  },
};
