/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  defaultNetwork: "ropsten",
  networks: {
   hardhat: { 
   },
   ropsten: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
   }
},
   solidity: {
     version: "0.7.4",
     settings: {
       optimizer: {
         enabled: true,
         runs: 1000
       }
     },
   
  }
}
