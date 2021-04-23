const { ethers } = require("hardhat");

async function main() {
    // a ContractFactory in ethers.js is an abstraction used to deploy new smart contracts
    // HelloWorld is a factory of instances of our hello world contract
    // the hardhat-ethers plugin and ContractFactory and Contract instances are 
    // connected to the first signer by default

    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    
    //Start deployment, returning a promise resolving to a contract object
    // calling the deploy method on ContractFactory, stored in const HelloWorld
    // will start deployment and returns a promise that resolves to a Contract
    // "This is the object that has a method for each of our smart contract functions."(Where is the Contract Object?)

    const hello_world = await HelloWorld.deploy("Hello World!");
    console.log("Contract deployed to address:", hello_world.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});