import { ADDCART, REMOVEITEM, COUPON, UPDATE, SETCART } from "./actionType";

const calcTotal = (store) => {
  let sum = 0;
  sum = 0;
  store.cartItems.forEach((item) => {
    sum += item.price * item.quantity;
  });
  return sum;
};

export default function reducre(store, { type, payload, isRemoveButton }) {
  switch (type) {
    case ADDCART:
      let itemExist = false;
      if (payload.quantity === undefined) payload.quantity = 1;
      store.cartItems.forEach((item, index) => {
        if (payload.id === item.id) {
          itemExist = true;
          store.cartItems[index].quantity += 1;
        }
      });
      let temp = [];
      if (itemExist) temp = [...store.cartItems];
      else temp = [...store.cartItems, payload];
      return {
        cartItems: [...temp],
        totalBill: calcTotal(store),
      };
    case REMOVEITEM:
      if (isRemoveButton) {
        let arr = [];
        store.cartItems.forEach((item) => {
          if (item.id !== payload.id) arr.push(item);
        });
        return { cartItems: [...arr], totalBill: calcTotal(store) };
      } else {
        if (payload.quantity > 1) {
          let q = payload.quantity - 1;
          store.cartItems.forEach((item, index) => {
            if (item.id === payload.id) {
              store.cartItems[index].quantity -= 1;
            }
          });
          return {
            cartItems: [...store.cartItems],
            totalBill: calcTotal(store),
          };
        } else {
          let arr = [];
          store.cartItems.forEach((item) => {
            if (item.id !== payload.id) arr.push(item);
          });
          return { cartItems: [...arr], totalBill: calcTotal(store) };
        }
      }

    case UPDATE:
      store.cartItems.forEach((item) => {
        if (item.deal.id === payload.id) item.deal.quantity = payload.quantity;
      });
      return { cartItems: [...store.cartItems], totalBill: calcTotal(store) };
    case COUPON:
      let sum = 0;
      store.cartItems.forEach((item) => {
        sum += (item.price - (item.price * payload) / 100) * item.quantity;
      });
      return { ...store, totalBill: sum };

    default:
      return store;
  }
}
