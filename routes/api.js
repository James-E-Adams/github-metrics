const { buffer, text, json } = require("micro");
const got = require("got");
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
module.exports = async req => {
  const query = await text(req);
  const githubResponse = await got("https://api.github.com/graphql", {
    body: query,
    headers: {
      Authorization: "bearer " + GITHUB_TOKEN,
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });
  return githubResponse.body;
};
