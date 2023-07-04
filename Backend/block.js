const { genesisBlock, mine_rate } = require("./config");
const { finalDateTimeString } = require("./getMineDate");
const cryptoHash = require("./cryptoHash");

class Block {
  constructor({
    blockNo,
    name,
    timestamp,
    data,
    prevHash,
    hash,
    mineTime,
    date,
    nonce,
    diffculty,
  }) {
    this.blockNo = blockNo;
    this.name = name;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = hash;
    this.mineTime = mineTime;
    this.date = date;
    this.nonce = nonce;
    this.diffculty = diffculty;
  }
  static genesis() {
    return new this(genesisBlock);
  }
  static mineBlock({ prevBlock, name, data }) {
    if (name === "") {
      name = "unknown";
    }
    let hash, timestamp, mineTime;
    const prevHash = prevBlock.hash;

    let { diffculty } = prevBlock;
    let { blockNo } = prevBlock;
    let nonce = 0;
    blockNo++;
    do {
      nonce++;
      timestamp = Date.now();
      mineTime = timestamp - prevBlock.timestamp;
      diffculty = Block.adjustDiffculty({
        originalBlock: prevBlock,
        timestamp,
      });
      if (diffculty < 1) {
        diffculty = 1;
      }
      hash = cryptoHash(
        blockNo,
        name,
        timestamp,
        prevHash,
        nonce,
        diffculty,
        data
      );
    } while (hash.substring(0, diffculty) !== "0".repeat(diffculty));

    return new this({
      blockNo,
      name,
      timestamp,
      prevHash,
      data,
      mineTime,
      date: finalDateTimeString,
      nonce,
      diffculty,
      hash,
    });
  }

  static adjustDiffculty({ originalBlock, timestamp }) {
    const { diffculty } = originalBlock;
    const difference = timestamp - originalBlock.timestamp;
    if (difference > mine_rate) {
      return diffculty - 1;
    }
    return diffculty + 1;
  }
}

module.exports = Block;
