import { types } from "../../types";
import { addCart, calcTotal, decrementCart, removeCart } from "./utils";

const initialState = { total: 0, products: [] };

//REDUCER FUNCTIONS UTILS

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addCart:
      return {
        ...state,
        total: calcTotal(addCart(action.payload, state.products)),
        products: addCart(action.payload, state.products),
      };
    case types.decrementCart:
      return {
        ...state,
        total: calcTotal(decrementCart(action.payload, state.products)),
        products: decrementCart(action.payload, state.products),
      };
    case types.removeCart:
      return {
        ...state,
        total: calcTotal(removeCart(action.payload, state.products)),
        products: removeCart(action.payload, state.products),
      };
    case types.reset:
      return initialState;
    default:
      return state;
  }
};
