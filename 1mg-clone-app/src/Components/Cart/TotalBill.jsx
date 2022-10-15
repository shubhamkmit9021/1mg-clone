import { Box } from "@chakra-ui/react";
import { greyColor } from "../../Colors/Color";
export default function TotalBill() {
  const boxStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    fontSize: "14px",
    color: greyColor,
  };
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "8px",
        gap: "10px",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      }}
    >
      <Box style={boxStyle}>
        <Box>Item Total(MRP)</Box>
        <Box>₹620</Box>
      </Box>
      <Box style={boxStyle}>
        <Box>Price Discount</Box>
        <Box>₹620</Box>
      </Box>
      <hr />
      <Box style={boxStyle}>
        <Box>Shipping Fee</Box>
        <Box>₹620</Box>
      </Box>
      <hr />
      <Box style={boxStyle} fontSize="14px" fontWeight="700">
        <Box>To be paid</Box>
        <Box>₹620</Box>
      </Box>
      <Box style={boxStyle} bg="#e4f6e7">
        <Box>Total Savings</Box>
        <Box>₹620</Box>
      </Box>
    </Box>
  );
}
