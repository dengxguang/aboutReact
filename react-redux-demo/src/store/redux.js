import { createStore } from "redux";

let defaultState = { count: 0, a: 123 };
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
