const serveStatic = require("./serve")(__dirname + "/build");
const match = require("fs-router")(__dirname + "/routes");

module.exports = async function(req, res) {
  let matched = match(req);
  if (matched) return await matched(req, res);
  return await serveStatic(req, res);
};
