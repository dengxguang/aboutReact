import React, { Component } from 'react';

// 使用 类组件 方式实现计数器
class DemoOfClass1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  buttonFn() {
    this.setState({count: this.state.count+1})
  }
  render() {
    return (
      <div>
        <p>点击了{this.state.count}次</p>
        <button onClick={this.buttonFn.bind(this)}>add1</button>
      </div>
    );
  }
}

export default DemoOfClass1;