const { genesisBlock, mine_rate } = require("./config");
const cryptoHash = require("./cryptoHash");
const hexToBinary = require("hex-to-binary");

class Block {
  constructor({ timestamp, data, prevHash, hash, nonce, diffculty }) {
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = hash;
    this.nonce = nonce;
    this.diffculty = diffculty;
  }
  static genesis() {
    return new this(genesisBlock);
  }
  static mineBlock({ prevBlock, data }) {
    let hash, timestamp;
    const prevHash = prevBlock.hash;

    let { diffculty } = prevBlock;
    let nonce = 0;
    do {
      nonce++;
      timestamp = Date.now();
      diffculty = this.adjustDiffculty({ originalBlock: prevBlock, timestamp });
      hash = cryptoHash(timestamp, prevHash, nonce, diffculty, data);
    } while (
      hexToBinary(hash).substring(0, diffculty) !== "0".repeat(diffculty)
    );

    return new this({
      timestamp,
      prevHash,
      data,
      nonce,
      diffculty,
      hash,
    });
  }

  static adjustDiffculty({ originalBlock, timestamp }) {
    const { diffculty } = originalBlock;
    if (diffculty < 1) return 1;

    const difference = timestamp - originalBlock.timestamp;
    if (difference > mine_rate) return diffculty - 1;

    return diffculty + 1;
  }
}

// const block1 = new Block({
//   timestamp: "1",
//   data: "hello",
//   prevHash: "123",
//   hash: "456",
// });

// const Genesis_Block = Block.genesis();
// console.log(Genesis_Block);

// const res = Block.mineBlock({ prevBlock: block1, data: "block2" });
// console.log(res);

module.exports = Block;
