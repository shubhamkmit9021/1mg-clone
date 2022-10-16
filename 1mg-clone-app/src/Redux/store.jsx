import { createStore } from "redux";
import reducre from "./reducer";
const initState = {
  count: 0,
};
export const store = createStore(reducre, initState);
