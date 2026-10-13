require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/alch_6drn7ZzEevFQ5pdKZq-ne",
      chainId: 11155111,
      accounts: ["a9eaf055d681f934299b867441101fc3411efc37a0e7b3c656549a76fa433120"]
    }
  }
};