const crypto = require("crypto");

const cryptoHash = (...inputs) => {
  const hash = crypto.createHash("sha256");
  hash.update(inputs.join(""));
  return hash.digest("hex");
};

module.exports = cryptoHash;
