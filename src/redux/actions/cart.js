import { types } from "../types";
//action para recibir la llamada y obtener productos
export const addCart = (payload) => ({
  type: types.addCart,
  payload,
});
export const decrementCart = (payload) => ({
  type: types.decrementCart,
  payload,
});
export const removeCart = (payload) => ({
  type: types.removeCart,
  payload,
});

