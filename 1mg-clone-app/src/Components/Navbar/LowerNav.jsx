import {
  HStack,
  Text,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

import React from "react";
import DropDown from "../DropDown";

const LowerNav = () => {
  return (
    <HStack
      p={1}
      w="95%"
      m="auto"
      justifyContent="center"
      display="flex"
      flexWrap="wrap"
    >
      <Flex alignItems="center" py="1" px="2">
        <Menu alignItems="center">
          <MenuButton onHover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Health Resource Center </Text>
          </MenuButton>
          <DropDown
            first="Multivitamins"
            second="Devices"
            third="Vitamins A-Z"
            fourth="Mineral Supplements"
            fifth="Adult Daily Nutrition"
          />
          <Box
            _hover={{ color: "tomato", cursor: "pointer" }}
            pl={1}
            fontSize="18px"
          >
            <BiChevronDown />
          </Box>
        </Menu>
      </Flex>

      <Flex flexWrap="wrap" alignItems="center" py="1" px="2">
        <Menu alignItems="center">
          <MenuButton onHover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Vitamins & Nutrition </Text>
          </MenuButton>
          <DropDown
            onEnter={{ color: "tomato", cursor: "pointer" }}
            first="Multivitamins"
            second="Devices"
            third="Vitamins A-Z"
            fourth="Mineral Supplements"
            fifth="Adult Daily Nutrition"
          />
          <Box
            _hover={{ color: "tomato", cursor: "pointer" }}
            pl={1}
            fontSize="18px"
          >
            <BiChevronDown />
          </Box>
        </Menu>
      </Flex>

      <Flex flexWrap="wrap" alignItems="center" py="1" px="2">
        <Menu alignItems="center">
          <MenuButton onHover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Diabetes </Text>
          </MenuButton>
          <DropDown
            first="Multivitamins"
            second="Devices"
            third="Vitamins A-Z"
            fourth="Mineral Supplements"
            fifth="Adult Daily Nutrition"
          />
          <Box
            _hover={{ color: "tomato", cursor: "pointer" }}
            pl={1}
            fontSize="18px"
          >
            <BiChevronDown />
          </Box>
        </Menu>
      </Flex>

      <Flex flexWrap="wrap" alignItems="center" py="1" px="2">
        <Menu alignItems="center">
          <MenuButton onHover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Healthcare Devices </Text>
          </MenuButton>
          <DropDown
            first="Multivitamins"
            second="Devices"
            third="Vitamins A-Z"
            fourth="Mineral Supplements"
            fifth="Adult Daily Nutrition"
          />
          <Box
            _hover={{ color: "tomato", cursor: "pointer" }}
            pl={1}
            fontSize="18px"
          >
            <BiChevronDown />
          </Box>
        </Menu>
      </Flex>

      <Flex flexWrap="wrap" alignItems="center" py="1" px="2">
        <Menu alignItems="center">
          <MenuButton onHover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Personal Care </Text>
          </MenuButton>

          <DropDown
            first="Multivitamins"
            second="Devices"
            third="Vitamins A-Z"
            fourth="Mineral Supplements"
            fifth="Adult Daily Nutrition"
          />
          <Box
            _hover={{ color: "tomato", cursor: "pointer" }}
            pl={1}
            fontSize="18px"
          >
            <BiChevronDown />
          </Box>
        </Menu>
      </Flex>

      <Flex flexWrap="wrap" alignItems="center" py="1" px="2">
        <Menu alignItems="center">
          <MenuButton onHover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Health Conditions </Text>
          </MenuButton>
          <DropDown
            first="Multivitamins"
            second="Devices"
            third="Vitamins A-Z"
            fourth="Mineral Supplements"
            fifth="Adult Daily Nutrition"
          />
          <Box
            _hover={{ color: "tomato", cursor: "pointer" }}
            pl={1}
            fontSize="18px"
          >
            <BiChevronDown />
          </Box>
        </Menu>
      </Flex>

      <Flex flexWrap="wrap" alignItems="center" py="1" px="2">
        <Menu alignItems="center">
          <MenuButton onHover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Ayurveda Products </Text>
          </MenuButton>
          <DropDown
            first="Multivitamins"
            second="Devices"
            third="Vitamins A-Z"
            fourth="Mineral Supplements"
            fifth="Adult Daily Nutrition"
          />
          <Box
            _hover={{ color: "tomato", cursor: "pointer" }}
            pl={1}
            fontSize="18px"
          >
            <BiChevronDown />
          </Box>
        </Menu>
      </Flex>

      <Flex flexWrap="wrap" alignItems="center" py="1" px="2">
        <Menu alignItems="center">
          <MenuButton onHover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Homeopathy </Text>
          </MenuButton>
          <DropDown
            first="Multivitamins"
            second="Devices"
            third="Vitamins A-Z"
            fourth="Mineral Supplements"
            fifth="Adult Daily Nutrition"
          />
          <Box
            _hover={{ color: "tomato", cursor: "pointer" }}
            pl={1}
            fontSize="18px"
          >
            <BiChevronDown />
          </Box>
        </Menu>
      </Flex>

      <Flex flexWrap="wrap" alignItems="center" py="1" px="2">
        <Menu alignItems="center">
          <MenuButton onHover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Featured </Text>
          </MenuButton>
          <DropDown
            first="Multivitamins"
            second="Devices"
            third="Vitamins A-Z"
            fourth="Mineral Supplements"
            fifth="Adult Daily Nutrition"
          />
          <Box
            _hover={{ color: "tomato", cursor: "pointer" }}
            pl={1}
            fontSize="18px"
          >
            <BiChevronDown />
          </Box>
        </Menu>
      </Flex>

      <Flex flexWrap="wrap" alignItems="center" py="1" px="2">
        <Menu alignItems="center">
          <MenuButton onHover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Covid Essentials </Text>
          </MenuButton>
          <DropDown
            first="Multivitamins"
            second="Devices"
            third="Vitamins A-Z"
            fourth="Mineral Supplements"
            fifth="Adult Daily Nutrition"
          />
          <Box
            _hover={{ color: "tomato", cursor: "pointer" }}
            pl={1}
            fontSize="18px"
          >
            <BiChevronDown />
          </Box>
        </Menu>
      </Flex>
    </HStack>
  );
};

export default LowerNav;
