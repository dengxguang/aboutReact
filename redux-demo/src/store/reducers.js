import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GAME_RECORD } from "./actionTypes";
const defaultState = {
  inputValue: "write something",
  list: ["苹果", "香蕉", "橘子"],
  record: 2
}; // 默认数据
export default (state = defaultState, action) => {
  // 就是一个方法函数
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }

  if (action.type === GAME_RECORD) {
    let newState = JSON.parse(JSON.stringify(state));
    if (newState.record < action.score) {
      newState.record = action.score;
    }
    return newState;
  }
  return state;
};
