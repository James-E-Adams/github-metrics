import React, { Component } from "react";

export default class QueryOptions extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 10 };
  }
  render() {
    return (
      <label>
        How many back?
        <input
          type="number"
          value={this.state.value}
          onChange={event => {
            this.props.onChangeNumber(event.target.value);
            this.setState({ value: event.target.value });
          }}
        />
      </label>
    );
  }
}
