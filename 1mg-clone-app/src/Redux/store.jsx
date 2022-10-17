import { useSelector } from "react-redux";
import { createStore } from "redux";
import reducre from "./reducer";
import { loadState, saveState } from "./localStorage";
const persistedState = loadState();
export const store = createStore(
  reducre,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({
    cartItems: store.getState().cartItems,
    totalBill: store.getState().totalBill,
  });
});
