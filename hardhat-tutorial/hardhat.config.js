require("@nomiclabs/hardhat-waffle")
require("dotenv").config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
const RINKEBY_URL = process.env.RINKEBY_URL

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    networks: {
        rinkeby: {
            url: RINKEBY_URL,
            accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [""],
            chainId: 4,
        },
    },
    solidity: "0.8.4",
}
