import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { defaultShadow } from "../../Shadow/Shadow";
import CartItems from "./CartItems";
import CheckHealth from "./CheckHealth";
import CheckoutButton from "./CheckoutButton";
import Coupon from "./Coupon";
import EmptyCart from "./EmptyCart";
import TotalBill from "./TotalBill";
import Slick from "./Slick";
import { useSelector } from "react-redux";

export default function Cart() {
  let isCartEmpty = false;

  const cartItems = useSelector((store) => store.cartItems);
  const [enterCoupon, setEnterCoupon] = useState(false);

  return isCartEmpty ? (
    <EmptyCart />
  ) : (
    <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
      <Box width="60%">
        {cartItems.map((item) => {
          if (item.deal !== undefined) {
            return <CartItems dummyItems={item.deal} />;
          }
        })}
      </Box>
      <Box width="38%" gap="10px" display="flex" flexDirection="column">
        <Coupon />
        <CheckHealth />
        <TotalBill />
        <CheckoutButton />
      </Box>
    </div>
  );
}
