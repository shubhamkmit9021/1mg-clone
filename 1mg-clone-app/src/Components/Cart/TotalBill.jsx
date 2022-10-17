import { Box } from "@chakra-ui/react";
import { greyColor } from "../../Colors/Color";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updatebill } from "../../Redux/action";
export default function TotalBill() {
  const boxStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    fontSize: "14px",
    color: greyColor,
  };

  const total = useSelector((store) => store.totalBill);
  const discount = useSelector((store) => store.couponDiscount);
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
        <Box>{total}</Box>
      </Box>
      <Box style={boxStyle}>
        <Box>Price Discount</Box>
        <Box>-₹{(total * (discount > 0 ? discount + 10 : 10)) / 100}</Box>
      </Box>
      <hr />
      <Box style={boxStyle}>
        <Box>Shipping Fee</Box>
        <Box>₹0</Box>
      </Box>
      <hr />
      <Box style={boxStyle} fontSize="14px" fontWeight="700">
        <Box>To be paid</Box>
        <Box>{total - (total * (discount > 0 ? discount + 10 : 10)) / 100}</Box>
      </Box>
      <Box style={boxStyle} bg="#e4f6e7">
        <Box>Total Savings</Box>
        <Box>₹{(total * (discount > 0 ? discount + 10 : 10)) / 100}</Box>
      </Box>
    </Box>
  );
}
