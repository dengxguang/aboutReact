import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GAME_RECORD } from "./actionTypes";
export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value
});

export const addItemAction = () => ({
  type: ADD_ITEM
});

export const deleteItemAction = index => ({
  type: DELETE_ITEM,
  index
});

export const gameRecord = score => ({
  type: GAME_RECORD,
  score
});
