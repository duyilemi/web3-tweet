require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    // hardhat: {
    //   chainId: 1337,
    // },
    rinkeby: {
      url: process.env.NEXT_RINKEBY_RPC_URL,
      accounts: [process.env.NEXT_PRIVATE_KEY],
    },
  },
};
