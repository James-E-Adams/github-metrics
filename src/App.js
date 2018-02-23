import React, { Component } from "react";
import logo from "./Octocat.jpg";
import "./App.css";
import MainstreamChart from "./components/mainstream";
import QueryOptions from "./components/queryOptions";
import starredQuery from "./queries/starredQuery";
import Footer from "./components/Footer";
const starGazersRequest = () => {
  var xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("POST", "api");
  return xhr;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makeRequest({ count = 10, userName = "James-E-Adams" }) {
    // make request to backend instead.
    if (count < 0) return;
    const request = new starGazersRequest();
    request.onload = () => {
      if (!request.response || request.response.errors) return;
      const repos = request.response.data.user.starredRepositories.edges;
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
    request.send(JSON.stringify(starredQuery({ count, userName })));
  }
  componentDidMount() {
    this.makeRequest({ count: 10, userName: "James-E-Adams" });
  }
  render() {
    const chartOptions = [];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Some stats about your GitHub usage</h1>
        </header>
        <p className="App-intro">How mainstream are you?</p>
        <QueryOptions onChangeOptions={this.makeRequest.bind(this)} />
        <div style={{ display: "flex", height: "500px" }}>
          <MainstreamChart chartData={this.state.repos} />
        </div>
        <Footer />
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
