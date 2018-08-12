import React, { Component } from "react"
import { debounce } from "lodash"
export default class QueryOptions extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 10, userName: "James-E-Adams" }
    this.requestTimeOut = null
  }
  componentDidMount() {
    this.onChangeOptionsDebounced = debounce(() => {
      this.props.setRepos(null)
      this.props.onChangeOptions(this.state)
    }, 500)
  }
  render() {
    return (
      <div>
        <div>
          What's your username?
          <input
            className="m-6 border-2"
            type="string"
            value={this.state.userName}
            onChange={event => {
              this.setState({ userName: event.target.value })
              this.onChangeOptionsDebounced()
            }}
          />
        </div>
        <div>
          How many back?
          <input
            className="m-6 border-2"
            type="number"
            value={this.state.count}
            onChange={event => {
              this.setState({ count: parseInt(event.target.value, 10) })
              this.onChangeOptionsDebounced()
            }}
          />
        </div>
      </div>
    )
  }
}
