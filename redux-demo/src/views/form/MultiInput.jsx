import React, { Component } from "react";

class MultiInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "男",
      attend: false,
      profile: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value // 关键代码
    });
  }
  handleSubmit(event) {
    this.setState({
      profile: `姓名：${this.state.name}, ${this.state.gender}, ${this.state.attend ? "参加" : "不参加"}活动`
    });
    event.preventDefault();
  }
  render() {
    return (
      <form>
        <p>
          姓名：
          <input name="name" value={this.state.name} onChange={this.handleChange} />
        </p>
        <p>
          性别：
          <select name="gender" value={this.state.gender} onChange={this.handleChange}>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </p>
        <p>
          是否参加：
          <input name="attend" type="checkbox" onChange={this.handleChange} checked={this.state.attend} />
        </p>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
        <p>您的报名信息：{this.state.profile}</p>
      </form>
    );
  }
}

export default MultiInput;
