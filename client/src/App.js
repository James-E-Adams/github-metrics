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
      <div className="text-center text-white bg-black w-screen h-screen flex flex-col justify-between">
        <Header />
        <QueryOptions
          onChangeOptions={this.props.makeRequest}
          setRepos={this.props.setRepos}
        />
        {this.props.repos && this.props.repos.length ? (
          <MainstreamChart chartData={this.props.repos} />
        ) : this.props.repos && this.props.repos.length === 0 ? (
          <div className="px-6">
            {" "}
            Woops! Did you forget to star anything? How else will all these
            smarty pants developers compare their collections of imaginary
            internet points! Go star something!{" "}
          </div>
        ) : (
          <React.Fragment>
            <div className="flex justify-center">
              <Loading type="bubbles" color="white" className="block" />
            </div>
            <div className="mt-6">
              Loading for a long time? Double check the username or try with
              less repos!
            </div>
          </React.Fragment>
        )}
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
