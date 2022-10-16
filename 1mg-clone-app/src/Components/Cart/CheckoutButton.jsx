import { Box, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lightOrange } from "../../Colors/Color";
import payment from "./Payment/payment";
export default function CheckoutButton() {
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
          <FontAwesomeIcon icon="fa-solid fa-location-dot" />
          <Box>{location}</Box>
        </Box>
      </Box>
      <Box>
        <Button
          color="white"
          bg={lightOrange}
          width="99%"
          _hover={{ bg: "teal.600" }}
          onClick={payment}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
}
