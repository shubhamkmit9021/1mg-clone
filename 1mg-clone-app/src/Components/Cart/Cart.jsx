import { Box, usePinInputDescendant } from "@chakra-ui/react";
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
import { v4 as uuid } from "uuid";

export default function Cart() {
  let isCartEmpty = useSelector((store) => store.cartItems.length === 0);

  const cartItems = useSelector((store) => store.cartItems);
  const [enterCoupon, setEnterCoupon] = useState(false);

  return isCartEmpty ? (
    <EmptyCart />
  ) : (
    <Box
      style={{ display: "flex", gap: "10px", margin: "10px" }}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
    >
      <Box width="60%">
        {cartItems.map((item) => {
          return <CartItems key={uuid()} dummyItems={item} />;
        })}
      </Box>
      <Box width="38%" gap="10px" display="flex" flexDirection="column">
        <Coupon />
        <CheckHealth />
        <TotalBill />
        <CheckoutButton />
      </Box>
    </Box>
  );
}
