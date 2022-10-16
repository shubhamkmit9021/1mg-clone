import React from "react";
import { MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export default function DropDown({ first, second, third, fourth, fifth }) {
  return (
    <MenuList>
      <Link to={"/" + first}>
        <MenuItem>{first}</MenuItem>
      </Link>
      <Link to={"/" + second}>
        <MenuItem>{second}</MenuItem>
      </Link>
      <MenuItem>{third}</MenuItem>
      <MenuItem>{fourth}</MenuItem>
      <MenuItem>{fifth}</MenuItem>
    </MenuList>
  );
}
