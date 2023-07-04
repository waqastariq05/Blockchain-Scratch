const { finalDateTimeString } = require("./getMineDate");
const initial_diffculty = 5;
const mine_rate = 1000; // 1s == 1000ms
const BlockNo = 10100;

const genesisBlock = {
  blockNo: BlockNo,
  timestamp: Date.now(),
  prevHash: "0x000",
  hash: "00000x123",
  name: "unknown",
  mineTime: 1,
  date: finalDateTimeString,
  diffculty: initial_diffculty,
  nonce: 0,
  data: 1,
};

module.exports = { genesisBlock, mine_rate };
