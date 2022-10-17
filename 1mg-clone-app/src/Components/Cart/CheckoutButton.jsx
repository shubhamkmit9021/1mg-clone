import { Box, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { lightOrange } from "../../Colors/Color";
import { emptycart } from "../../Redux/action";
import payment from "./Payment/payment";

export default function CheckoutButton() {
  let cartItems = useSelector((store) => store.cartItems);
  const discount = useSelector((store) => store.couponDiscount);
  const dispatch = useDispatch();
  let location = "Delhi";
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "10px",
        marginTop: "5px",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box>Your delivery location</Box>
        <Box>
          <Box>{location}</Box>
        </Box>
      </Box>
      <Box>
        <Button
          color="white"
          bg={lightOrange}
          width="99%"
          _hover={{ bg: "teal.600" }}
          onClick={() => {
            let cItem = cartItems.map((item, index) => {
              if (discount > 0) {
                item.price = item.price - (item.price * (discount + 10)) / 100;
              } else {
                item.price = item.price - (item.price * 10) / 100;
              }

              return item;
            });
            console.log(cItem);
            payment(cItem);
            dispatch(emptycart());
          }}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
}
