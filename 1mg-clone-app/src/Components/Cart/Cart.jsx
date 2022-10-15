import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { defaultShadow } from "../../Shadow/Shadow";
import CartItems from "./CartItems";
import CheckHealth from "./CheckHealth";
import CheckoutButton from "./CheckoutButton";
import Coupon from "./Coupon";
import EmptyCart from "./EmptyCart";
import TotalBill from "./TotalBill";

export default function Cart() {
  let dummyItems = {
    name: "Sri Sri Tattva Karela Jamun Juicei",
    desc: "bottle of 1000 ml Juice",
    price: 262,
    discount: 10,
    quantity: 2,
  };
  let isCartEmpty = false;

  const [enterCoupon, setEnterCoupon] = useState(false);
  return isCartEmpty ? (
    <EmptyCart />
  ) : (
    <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
      <Box width="60%">
        <CartItems dummyItems={dummyItems} />
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
