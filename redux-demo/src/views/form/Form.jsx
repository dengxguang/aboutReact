import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      selectVal: "C"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    alert(`your name is ${this.state.value}, option is ${this.state.selectVal}`);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  handleSelectChange = (event)=>{
    this.setState(
      {
        selectVal: event.target.value
      }
    )
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" vlaue={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
          <select value={this.state.selectVal} onChange={this.handleSelectChange}>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
          </select>
        </form>
        <textarea value={this.state.value} />
      </div>
    );
  }
}

export default Form;
