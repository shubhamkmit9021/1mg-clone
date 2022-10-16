import { Box, Flex, Spacer } from "@chakra-ui/react";
import { greyColor } from "../../Colors/Color";
import { useState, useRef } from "react";
import { increment } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";

export default function CartItems(props) {
  const { dummyItems } = props;
  const { name, desc, price, discount, quantity } = dummyItems;
  const [itemCount, SetItemCount] = useState(1);
  const ref = useRef(null);
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();
  return (
    <Box
      ref={ref}
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
        <Box
          p="4"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            console.log(ref.current);
            ref.current.visiblity = "hidden";
          }}
        >
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
              onClick={() => {
                dispatch(increment(count));
              }}
            />
            <p style={{ marginTop: "4px" }}>{count}</p>
            <img
              src="https://www.1mg.com/images/plus-cart.svg"
              style={{ cursor: "pointer" }}
              onClick={() => {
                SetItemCount(itemCount + 1);
              }}
            />
          </div>
        </Box>
      </Flex>
    </Box>
  );
}
