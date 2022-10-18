import React from "react";
import { MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function DropDown({ first, second, third, fourth, fifth }) {
  return (
    <MenuList zIndex="1000">
      <Link to={"/" + first}>
        <MenuItem>{first}</MenuItem>
      </Link>
      <Link to={"/" + second}>
        <MenuItem>{second}</MenuItem>
      </Link>
      <Link to={"/" + first}>
        <MenuItem>{third}</MenuItem>
      </Link>
      <Link to={"/" + second}>
        <MenuItem>{fourth}</MenuItem>
      </Link>
      <Link to={"/" + first}>
        <MenuItem>{fifth}</MenuItem>
      </Link>
    </MenuList>
  );
}
