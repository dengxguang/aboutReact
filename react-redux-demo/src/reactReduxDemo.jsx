import React, { Component } from "react";
import actions from "./store/actions.js";
import { connect } from "react-redux";

class reactReduxDemo extends Component {
  componentDidMount() {
    console.log(this.props);
    this.setState({
      count: this.props.count
    });
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={this.props.decrease}>-</button>
        <span style={{ display: "inline-block", width: "100px", textAlign: "center" }}>{this.props.count}</span>
        <button onClick={this.props.inscrease}>+</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state.count,
    a: state.a
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inscrease: () => {
      dispatch(actions.increase());
    },
    decrease() {
      dispatch(actions.decrease());
    }
  };
};

reactReduxDemo = connect(mapStateToProps, mapDispatchToProps)(reactReduxDemo);
export default reactReduxDemo;
