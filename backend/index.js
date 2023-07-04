const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain");
const PubSub = require("./publishedSubscribed");

const app = express();
const blockchain = new Blockchain();
const pubsub = new PubSub({ blockchain });

const defalut_port = 5000;
const ROOT_NODE_ADDRESS = `http://localhost:${defalut_port}`;
setTimeout(() => pubsub.broadcastChain(), 1000);

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept"
  );
  next();
});

app.get("/api/blocks", (req, res) => {
  res.json(blockchain.chain);
});

app.get("/api/block/:search", async (req, res) => {
  const search = parseInt(req.params.search);
  const searchName = req.params.search;

  const block = blockchain.chain.find(
    (p) =>
      p.blockNo === search ||
      parseInt(p.data) === search ||
      p.name === searchName
  );
  if (!block) {
    return res.status(404).json({ error: "Product not found", Success: false });
  }

  return res.json(block);
});

app.post("/api/mine", (req, res) => {
  const { data, name } = req.body;
  blockchain.addBlock({ data, name });
  pubsub.broadcastChain();
  res.json({ Success: true });
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
