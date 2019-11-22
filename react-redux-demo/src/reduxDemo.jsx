import React, { Component } from "react";
import store from "./store/redux.js";
import actions from "./store/actions.js";

export default class reduxDemo extends Component {
  constructor(props) {
    super(props);
    this.inscrease = this.inscrease.bind(this);
    this.descrease = this.descrease.bind(this);
    store.subscribe(this.storeChange.bind(this));
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    let curCount = store.getState();
    this.setState({
      count: curCount.count
    });
  }
  inscrease() {
    store.dispatch(actions.increase());
  }
  descrease() {
    store.dispatch(actions.decrease());
  }
  storeChange() {
    this.setState({
      count: store.getState().count
    });
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={this.descrease}>-</button>
        <span style={{ display: "inline-block", width: "100px", textAlign: "center" }}>{this.state.count}</span>
        <button onClick={this.inscrease}>+</button>
      </div>
    );
  }
}
