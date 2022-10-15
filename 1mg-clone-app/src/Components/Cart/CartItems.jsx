import { Box, Flex, Spacer } from "@chakra-ui/react";
import { greyColor } from "../../Colors/Color";

export default function CartItems(props) {
  const { dummyItems } = props;
  const { name, desc, price, discount, quantity } = dummyItems;
  return (
    <Box
      style={{
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      }}
      w="100%"
      p={4}
      color="black"
    >
      <Flex>
        <Box p="4" fontSize="larger">
          {name}
        </Box>
        <Spacer />
        <Box p="4">{price - (price / 100) * discount}</Box>
      </Flex>
      <Flex>
        <Box p="4" color={greyColor}>
          {desc}
        </Box>
        <Spacer />
        <Box p="4" color={greyColor}>
          MRP <span style={{ textDecoration: "line-through" }}>₹{price}</span>
        </Box>
      </Flex>
      <Flex>
        <Box p="4">
          <div style={{ display: "flex", gap: "5px" }}>
            <img
              src="https://img.1mg.com/images/delete_icon.svg"
              alt="delete icon"
            />
            <span>Remove</span>
          </div>
        </Box>
        <Spacer />
        <Box p="4">
          <div style={{ display: "flex" }}>
            <img
              src="https://www.1mg.com/images/minus-cart.svg"
              style={{ cursor: "pointer" }}
            />
            <p style={{ marginTop: "4px" }}>1</p>
            <img
              src="https://www.1mg.com/images/plus-cart.svg"
              style={{ cursor: "pointer" }}
            />
          </div>
        </Box>
      </Flex>
    </Box>
  );
}
