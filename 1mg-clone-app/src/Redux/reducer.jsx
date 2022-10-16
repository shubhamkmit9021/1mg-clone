import { INCREMENT } from "./actionType";

export default function reducre(store, { type, payload }) {
  switch (type) {
    case INCREMENT:
      return { count: store.count + payload };
    default:
      return store;
  }
}
