import { types } from "../types";

const initialState = false;

export const showMiniCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.showMiniCart:
      return action.payload;

    case types.addCart:
      return true;
      case types.decrementCart:
      return true;
    case types.reset:
      return initialState;
    default:
      return state;
  }
};
