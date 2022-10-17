import { createStore } from "redux";
import reducre from "./reducer";
const initState = {
  cartItems: [],
  totalBill: 0,
};
export const store = createStore(
  reducre,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
