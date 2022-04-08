import { types } from "../types";

const initialState = false;

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setLoading:
      return action.payload;

    case types.reset:
      return initialState
    default:
      return state;
  }
};
