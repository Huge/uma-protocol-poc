usePlugin("@nomiclabs/buidler-truffle5");
usePlugin("solidity-coverage");

module.exports = {
  solc: {
    version: "0.6.6",
    optimizer: {
      enabled: false,
      runs: 200
    }
  },
  networks: {
    buidlerevm: {
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  },
  mocha: {
    timeout: 1800000
  }
};