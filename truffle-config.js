module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      disableConfirmationListener: true, // generates thousands of eth_getBlockByNumber calls
      timeoutBlocks: 3,
      deploymentPollingInterval: 5000,
      /* type: 'quorum' // Use this property for Quorum environments */
    },
  },
  mocha: {
    enableTimeouts: false,
    before_timeout: 600000
  },
  compilers: {
    solc: {
      version: "0.8.2",
      settings: {
        evmVersion: "constantinople",
        optimizer: {
          runs: 200, // may size/cost increase due to 200 
          enabled: true
        }
      }
    },
  }
};
