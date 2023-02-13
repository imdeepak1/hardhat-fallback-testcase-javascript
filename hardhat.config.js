require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: `hardhat`,
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/{YOUR-API-KEY}`,
      accounts:[`{ACCOUNT-PRIVATE-KEY}`],
    },
  },
};
