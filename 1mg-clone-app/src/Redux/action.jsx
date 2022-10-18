import {
  ADDCART,
  REMOVEITEM,
  UPDATE,
  SETCART,
  COUPON,
  EMPTYCART,
  ISAUTH,
} from "./actionType";

export const addtocart = (data) => ({
  type: ADDCART,
  payload: data,
});

export const removefromcart = (data, isRemoveButton) => ({
  type: REMOVEITEM,
  payload: data,
  isRemoveButton: isRemoveButton,
});

export const coupon = (data) => ({
  type: COUPON,
  payload: data,
});

export const emptycart = () => ({
  type: EMPTYCART,
  payload: "",
});

export const isauth = (data) => ({
  type: ISAUTH,
  payload: data,
});
