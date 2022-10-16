import { Button } from "@chakra-ui/react";
import { lightOrange } from "../../Colors/Color";

export default function EmptyCart() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        gap: "20px",
      }}
    >
      <img
        src="https://www.1mg.com/images/online_consultation/empty-cart-icon.svg"
        alt=""
      />
      <div>Oops!</div>
      <div>Looks like there is no item in your cart yet.</div>
      <a>
        <Button bg={lightOrange} textColor="white" _hover={{ bg: "teal.600" }}>
          ADD MEDICINES
        </Button>
      </a>
    </div>
  );
}
