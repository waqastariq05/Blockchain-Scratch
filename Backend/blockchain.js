const Block = require("./block");
const cryptoHash = require("./cryptoHash");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  //   Add multiple block in blockchain
  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      prevBlock: this.chain[this.chain.length - 1],
      data,
    });
    this.chain.push(newBlock);
  }

  //   Check the incoming Blockchain is longer or not
  replaceChain(chain) {
    if (chain.length <= this.chain.length) {
      console.log("The incoming chain is not longer");
      return;
    }
    if (!Blockchain.validateChain(chain)) {
      console.log("The incoming chain is not valid");
      return;
    }
    this.chain = chain;
  }

  //   Check the Blockchain is valid or not
  static validateChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      return false;
    }
    for (let i = 1; i < chain.length; i++) {
      const { timestamp, prevHash, hash, nonce, diffculty, data } = chain[i];
      const lastDiffculty = chain[i - 1].diffculty;
      const lastHash = chain[i - 1].hash;

      if (prevHash !== lastHash) return false;

      const validateHash = cryptoHash(
        timestamp,
        prevHash,
        nonce,
        diffculty,
        data
      );
      if (hash !== validateHash) return false;

      if (Math.abs(lastDiffculty - diffculty) > 1) return false;
    }
    return true;
  }
}

const blockchain = new Blockchain();
blockchain.addBlock({ data: "Block1" });
blockchain.addBlock({ data: "Block2" });
const res = Blockchain.validateChain(blockchain.chain);
// console.log(blockchain);
// console.log(res);

module.exports = Blockchain;
