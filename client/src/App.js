import React, { Component } from "react"
import withState from "recompose/withState"
import compose from "recompose/compose"
import withHandlers from "recompose/withHandlers"
import Loading from "react-loading"

import MainstreamChart from "./components/mainstream"
import QueryOptions from "./components/queryOptions"
import Footer from "./components/Footer"
import Header from "./components/Header"
class App extends Component {
  componentDidMount() {
    this.props.makeRequest({
      count: 100,
      userName: "James-E-Adams"
    })
  }
  render() {
    return (
      <div className="text-center text-white bg-black w-screen h-screen">
        <Header />
        <QueryOptions
          onChangeOptions={this.props.makeRequest}
          setRepos={this.props.setRepos}
        />
        <div className="flex justify-center">
          {this.props.repos ? (
            <MainstreamChart chartData={this.props.repos} />
          ) : (
            <Loading type="bubbles" color="white" />
          )}
        </div>
        <Footer />
      </div>
    )
  }
}

const makeRequest = ({ setRepos }) => params =>
  fetch("/github", {
    method: "POST",
    body: JSON.stringify(params),
    headers: { "Content-Type": "application/json; charset=utf-8" }
  })
    .then(res => res.json())
    .then(res => {
      setRepos(res.repos)
    })

export default compose(
  withState("repos", "setRepos", null),
  withHandlers({ makeRequest })
)(App)
