require("@nomiclabs/hardhat-waffle");
require("dotenv").config()


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      // This value will be replaced on runtime
      url: process.env.URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    // mainnet: {
    //   chainId: 1,
    //   url: "process.env.PROD_ALCHEMY_KEY",
    //   accounts: ["process.env.PRIVATE_KEY"],
    // },
  },
};