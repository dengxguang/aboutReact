import React, { Component } from "react";
import { Button, Modal } from "antd";
import "./game.scss";
import store from "../store";
import { gameRecord } from "../store/actions";

class Game extends Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.info = this.info.bind(this);
    this.initDate = this.initDate.bind(this);
    store.subscribe(this.storeChange.bind(this));
    this.state = {
      record: 0,
      score: 0,
      showTimer: "00:00:30",
      items: [{ val: "red", text: "红" }, { val: "yellow", text: "黄" }, { val: "blue", text: "蓝" }, { val: "green", text: "绿" }, { val: "black", text: "黑" }],
      colors: ["black", "green", "yellow", "red", "blue"],
      text: ["红", "黄", "蓝", "绿", "黑"],
      isStart: false,
      random: 0
    };
  }
  componentDidMount() {
    let record = store.getState();
    this.setState({
      record: record.record
    });
  }
  getRandom(min = 0, max = 5) {
    return parseInt(Math.random() * (max - min) + min);
  }
  initDate() {
    const that = this;
    let i = that.getRandom();
    this.setState({
      random: i
    });
  }
  btnClick(str) {
    if (!this.state.isStart) return;
    this.initDate();
    if (str === this.state.colors[this.state.random]) {
      let score = this.state.score;
      this.setState({
        score: score + 1
      });
    }
  }
  start() {
    this.setState({
      isStart: true,
      score: 0
    });
    const that = this;
    that.initDate();
    let times = 30;
    let timer = setInterval(() => {
      times -= 1;
      if (times <= 0) {
        clearInterval(timer);
        that.setState({
          isStart: false
        });
        that.info(that.state.score);
        that.setState({
          showTimer: "00:00:30"
        });
        let action = gameRecord(that.state.score);
        store.dispatch(action);
      } else {
        that.setState({
          showTimer: `00:00:${times < 10 ? "0" + times : times}`
        });
      }
    }, 1000);
  }
  info(score) {
    Modal.info({
      title: "游戏结束！！！",
      content: (
        <div>
          <p>你的得分是：{score}</p>
        </div>
      ),
      onOk() {}
    });
  }
  storeChange() {
    this.setState({
      record: store.getState().record
    });
  }
  render() {
    let { record, showTimer, isStart, colors, random, text, score } = this.state;
    return (
      <div className="game">
        <p className="game-title">
          最高分：{record > score ? record : score}，得分：{score}
        </p>
        <div className="game-header">
          <div className="time">
            剩余时间: <span>{showTimer}</span>
          </div>
          <div>
            {!isStart ? (
              <Button type="primary" onClick={this.start}>
                开 始
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="game-show" style={{ color: colors[random] }}>
          {text[random]}
        </div>
        <div className="game-btns">
          <Button onClick={this.btnClick.bind(this, "red")}>红</Button>
          <Button onClick={this.btnClick.bind(this, "yellow")}>黄</Button>
          <Button onClick={this.btnClick.bind(this, "blue")}>蓝</Button>
          <Button onClick={this.btnClick.bind(this, "green")}>绿</Button>
          <Button onClick={this.btnClick.bind(this, "black")}>黑</Button>
        </div>
      </div>
    );
  }
}

export default Game;
