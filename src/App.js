import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainstreamChart from "./components/mainstream";
import QueryOptions from "./components/queryOptions";
import { GITHUB_TOKEN } from "./config";
const query = numberOfRepos => `query {   
  viewer {
    starredRepositories(last: ${numberOfRepos}) {
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
`;

const gitHubRequest = () => {
  var xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("POST", "https://api.github.com/graphql");
  xhr.setRequestHeader("Authorization", "bearer " + GITHUB_TOKEN);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Accept", "application/json");
  return xhr;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makeRequest(numberOfRepos = 10) {
    if (numberOfRepos < 0) return;
    const request = new gitHubRequest();
    request.onload = () => {
      if (request.response.errors) return;
      const repos = request.response.data.viewer.starredRepositories.edges;
      const simpleRepos = repos.map(repo => {
        const newRepo = {
          stargazers: repo.node.stargazers.totalCount,
          starredAt: new Date(repo.starredAt).getTime(),
          name: repo.node.nameWithOwner
        };
        return newRepo;
      });
      this.setState({
        repos: simpleRepos
      });
    };
    request.send(
      JSON.stringify({
        query: query(numberOfRepos)
      })
    );
  }
  componentDidMount() {
    this.makeRequest(10);
  }
  render() {
    const chartOptions = [];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Some stats about my GitHub usage</h1>
        </header>
        <p className="App-intro">First up - How mainstream am I?</p>
        <div style={{ display: "flex", height: "500px" }}>
          <MainstreamChart chartData={this.state.repos} />
        </div>
        <QueryOptions onChangeNumber={this.makeRequest.bind(this)} />
      </div>
    );
  }
}

/**
 * Cliffhanger:
 * get github token
 * make graphql query
 * get data
 * put into chart
 */

export default App;
