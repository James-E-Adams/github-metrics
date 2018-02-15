import React, { Component } from "react";

export default class QueryOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10, userName: "James-E-Adams" };
    this.requestTimeOut = null;
  }

  componentDidUpdate() {
    if (this.requestTimeOut) {
      clearTimeout(this.requestTimeOut);
    }
    this.requestTimeOut = setTimeout(() => {
      this.props.onChangeOptions(this.state);
    }, 500);
  }
  render() {
    return (
      <div>
        <label>
          What's your username?
          <input
            className="query-input"
            type="string"
            value={this.state.userName}
            onChange={event => {
              this.setState({ userName: event.target.value });
            }}
          />
        </label>
        <label>
          How many back?
          <input
            className="query-input"
            type="number"
            value={this.state.count}
            onChange={event => {
              this.setState({ count: parseInt(event.target.value) });
            }}
          />
        </label>
      </div>
    );
  }
}
