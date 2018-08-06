const getSimpleRepos = response => {
  const repos = response.data.user.starredRepositories.edges;
  return repos.map(repo => ({
    stargazers: repo.node.stargazers.totalCount,
    starredAt: new Date(repo.starredAt).getTime(),
    name: repo.node.nameWithOwnernewRepo
  }));
};
module.exports = getSimpleRepos;
