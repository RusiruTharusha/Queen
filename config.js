const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "3J9xTCQR#7tNDjcLEVERub0V0PBeOV1SiIeGhxcRQ4Rej4gNMY88",
  MONGODB: process.env.MONGODB || "mongodb://mongo:iSHJUNaEpUUqSRnBDypCALxpajdIcyBm@gondola.proxy.rlwy.net:43532",
  OWNER_NUM: process.env.OWNER_NUM || "94714774537",
};
