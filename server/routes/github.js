const express = require("express");
const router = express.Router();
const client = require("github-graphql-client");
const token = process.env.GITHUB_TOKEN;
const generateQuery = require("../helpers/generateQuery");
const getSimpleRepos = require("../helpers/getSimpleReposFromResponse");

router.post("/", (req, res, __) => {
  const { userName, count } = req.body;
  client(
    { token, ...generateQuery({ userName, count }) },
    (err, githubResponse) => {
      if (err) {
        // handle errors
        console.log("oh no!");
      } else {
        try {
          res.send(JSON.stringify({ repos: getSimpleRepos(githubResponse) }));
        } catch (e) {
          res.send({ error: "parsing error" });
        }
      }
    }
  );
});

module.exports = router;
