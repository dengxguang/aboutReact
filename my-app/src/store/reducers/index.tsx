import { modifyAction } from "../actions";
import { DECREMENT, INCREMENT } from "../const";

// 处理然后返回state
export default (state = 0, actions: modifyAction): number => {
  switch (actions.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT: 
      return state -1;
    default: 
      return state
  }
}