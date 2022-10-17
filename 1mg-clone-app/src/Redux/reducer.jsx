import { ADDCART, REMOVEITEM, UPDATEBILL, UPDATE } from "./actionType";

export default function reducre(store, { type, payload }) {
  let sum = 0;
  switch (type) {
    case ADDCART:
      console.log(store.cartItems);
      store.cartItems.forEach((item) => {
        let q = item.deal.quantity || 1;
        sum += item.deal.price * q;
      });
      return { cartItems: [...store.cartItems, payload], totalBill: sum };
    case REMOVEITEM:
      sum = 0;
      store.cartItems.forEach((item) => {
        let q = item.deal.quantity || 1;
        sum += item.deal.price * q;
      });
      let arr = [];
      store.cartItems.forEach((item) => {
        if (item.deal.id !== payload.id) arr.push(item);
      });
      return { cartItems: [...arr], totalBill: sum };
    case UPDATEBILL:
      sum = 0;
      console.log(store.cartItems);
      store.cartItems.forEach((item) => {
        let q = item.deal.quantity || 1;
        sum += item.deal.price * q;
      });
      return { cartItems: [...store.cartItems], totalBill: sum };
    case UPDATE:
      let cItem = store.cartItems;
      store.cartItems.forEach((item) => {
        if (item.deal.id === payload.id) item.deal.quantity = payload.quantity;
      });
      console.log(store);
      return { cartItems: [...store.cartItems], totalBill: store.totalBill };
    default:
      return store;
  }
}
