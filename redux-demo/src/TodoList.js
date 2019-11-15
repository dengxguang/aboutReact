import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from "./store";
import { changeInputAction, addItemAction, deleteItemAction } from "./store/actions";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.storeChange.bind(this)); //订阅Redux的状态
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input onChange={this.changeInputValue.bind(this)} value={this.state.inputValue} style={{ width: "250px", marginRight: "10px" }} placeholder="write somethings" />
          <Button type="primary" onClick={this.addItem.bind(this)}>
            添加
          </Button>
        </div>
        <List bordered dataSource={this.state.list} renderItem={(item, i) => <List.Item onClick={this.deleteItem.bind(this, i)}>{item}</List.Item>} size="small" style={{ width: "320px", marginTop: "10px" }}></List>
      </div>
    );
  }
  changeInputValue(e) {
    // console.log(e.target.value);
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  addItem() {
    if (!this.state.inputValue) return;
    const action = addItemAction();
    store.dispatch(action);
  }
  deleteItem(index) {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
}
