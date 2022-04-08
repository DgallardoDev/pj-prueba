import { types } from "../types";

const initialState = { show: false, text: "" };

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setMessage:
      return action.payload;
    default:
      return state;
  }
};
