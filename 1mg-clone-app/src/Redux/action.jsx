import { ADDCART, REMOVEITEM, UPDATE, SETCART, COUPON } from "./actionType";

export const addtocart = (data) => ({
  type: ADDCART,
  payload: data,
});

export const removefromcart = (data, isRemoveButton) => ({
  type: REMOVEITEM,
  payload: data,
  isRemoveButton: isRemoveButton,
});

export const update = (data) => ({
  type: UPDATE,
  payload: data,
});

export const setcart = (data) => ({
  type: SETCART,
  payload: data,
});

export const coupon = (data) => ({
  type: COUPON,
  payload: data,
});
