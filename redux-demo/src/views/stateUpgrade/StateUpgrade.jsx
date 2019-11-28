// 状态提升demo
import React, { Component } from "react";
// 1. 首先定义转换函数
const USD2RMB = amount => {
  return amount * 6.7925;
};

const RMB2USD = amount => {
  return amount * 0.1472;
};

const convert = (amount, typeFn) => {
  return typeFn(amount);
};

// 2.定义组件
class CurrencyInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onInputChange(event.target.value);
  }
  render() {
    const value = this.props.value;
    const type = this.props.type;
    return (
      <p>
        {type}: <input type="text" value={value} onChange={this.handleChange} />
      </p>
    );
  }
}

// 定义一个共同的父组件
class CurrencyConvert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "RMB",
      amount: 0
    };
    this.handleRMBChange = this.handleRMBChange.bind(this);
    this.handleUSDChange = this.handleUSDChange.bind(this);
  }
  handleRMBChange(amount) {
    this.setState({
      type: "RMB",
      amount
    });
  }
  handleUSDChange(amount) {
    this.setState({
      type: "USD",
      amount
    });
  }
  render() {
    const type = this.state.type;
    const amount = this.state.amount;
    const RMB = type === "RMB" ? amount : convert(amount, USD2RMB);
    const USD = type === "USD" ? amount : convert(amount, RMB2USD);
    return (
      <div>
        <p>Please Input:</p>
        <CurrencyInput type="RMB" value={RMB} onInputChange={this.handleRMBChange} />
        <CurrencyInput type="USD" value={USD} onInputChange={this.handleUSDChange} />
      </div>
    );
  }
}

export default CurrencyConvert;
