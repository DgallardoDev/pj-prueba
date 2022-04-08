import { types } from "../types";

const initialState = [];

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setCatalog:
      return action.payload;
    default:
      return state;
  }
};
