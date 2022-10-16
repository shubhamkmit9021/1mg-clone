import { INCREMENT } from "./actionType";

export const increment = (data) => ({
  type: INCREMENT,
  payload: data,
});
