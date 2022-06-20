const { ethers } = require("hardhat")
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require("../constants")

async function main() {
    const cryptoDevTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS
    /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so exchangeContract here is a factory for instances of our Exchange contract.
  */
    const exchangeContract = await ethers.getContractFactory("Exchange")

    //deploy the contract
    const deployedExchangeContract = await exchangeContract.deploy(
        cryptoDevTokenAddress
    )
    await deployedExchangeContract.deployed()

    console.log(
        "Exchange Contract deployed to:",
        deployedExchangeContract.address
    )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
