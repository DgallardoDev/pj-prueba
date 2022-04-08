import { types } from "../types";

export const showMiniCart = (payload) => ({//payload : true or false
  type: types.showMiniCart,
  payload,
});
