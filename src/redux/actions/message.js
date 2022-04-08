import { types } from "../types";

export const setMessage = (payload) => ({
  type: types.setMessage,
  payload,
});
