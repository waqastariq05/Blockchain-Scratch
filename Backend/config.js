const initial_diffculty = 3;
const mine_rate = 1000; // 1s == 1000ms

const genesisBlock = {
  timestamp: 1,
  prevHash: "0x000",
  hash: "0x123",
  diffculty: initial_diffculty,
  nonce: 0,
  data: [],
};

module.exports = { genesisBlock, mine_rate };
