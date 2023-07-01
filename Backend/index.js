const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain");
const PubSub = require("./publishedSubscribed");

const app = express();
const blockchain = new Blockchain();
const pubsub = new PubSub({ blockchain });

const defalut_port = 3000;
const ROOT_NODE_ADDRESS = `http://localhost:${defalut_port}`;
setTimeout(() => pubsub.broadcastChain(), 1000);

app.use(bodyParser.json());

app.get("/api/blocks", (req, res) => {
  res.json(blockchain.chain);
});

app.post("/api/mine", (req, res) => {
  const { data } = req.body;

  blockchain.addBlock({ data });
  pubsub.broadcastChain();
  res.send("Block is added");
});

const synChain = () => {
  request(
    { url: `${ROOT_NODE_ADDRESS}/api/blocks` },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const rootChain = JSON.parse(body);
        console.log("Replace chain on sync with", rootChain);
        blockchain.replaceChain(rootChain);
      }
    }
  );
};
let peer_port;
if (process.env.GENERATE_PEER_PORT === "true") {
  peer_port = defalut_port + Math.ceil(Math.random() * 1000);
}

const port = peer_port || defalut_port;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
  synChain();
});
