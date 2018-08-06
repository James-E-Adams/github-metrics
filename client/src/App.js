import React, { Component } from "react";
import logo from "./Octocat.jpg";
import "./App.css";
import MainstreamChart from "./components/mainstream";
import QueryOptions from "./components/queryOptions";
import starredQuery from "./queries/starredQuery";
import Footer from "./components/Footer";

// const starGazersRequest = () => {
//   var xhr = new XMLHttpRequest();
//   xhr.responseType = "json";
//   xhr.open("POST", "api");
//   return xhr;
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makeRequest(params) {
    fetch("/github", {
      method: "POST",
      body: JSON.stringify(params),
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
      .then(res => res.json())
      .then(res => console.log("this is the res: ", res));
    // request.send(JSON.stringify(starredQuery({ count, userName })));
  }
  componentDidMount() {
    this.makeRequest({ count: 10, userName: "James-E-Adams" });
  }
  render() {
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
