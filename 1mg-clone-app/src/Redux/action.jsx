import { ADDCART, REMOVEITEM, UPDATEBILL, UPDATE } from "./actionType";

export const addtocart = (data) => ({
  type: ADDCART,
  payload: data,
});

export const removefromcart = (data) => ({
  type: REMOVEITEM,
  payload: data,
});

export const updatebill = () => ({
  type: UPDATEBILL,
  payload: "",
});

export const update = (data) => ({
  type: UPDATE,
  payload: data,
});
