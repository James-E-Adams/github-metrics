const query = ({ userName, count }) => {
  return {
    query: `query($userName: String!, $count:Int!) {   
    user(login: $userName) {
      starredRepositories(last: $count) {
        edges {
          starredAt
          node {
            nameWithOwner
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
  `,
    variables: {
      count,
      userName
    }
  };
};

export default query;
