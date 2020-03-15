const fetch = require("node-fetch");

exports.handler = async function getRepos() {
  const repos = await fetch(
    `https://api.github.com/users/Riley-Brown/repos?per_page=4&sort=created:asc&client_id=5339e254177ffa590980&client_secret=${process.env.GITHUB_SECRET}`
  );

  const reposJson = await repos.json();

  return {
    statusCode: 201,
    headers: {
      "Cache-Control": "max-age=3600",
      "Access-Control-Allow-Origin": "https://riley.gg",
      Vary: "Origin"
    },
    body: JSON.stringify({
      reposJson
    })
  };
};
