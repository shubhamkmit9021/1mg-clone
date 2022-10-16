import {
  HStack,
  Text,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

import React from "react";

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
          <MenuButton _hover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Health Resource Center </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
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
          <MenuButton _hover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Vitamins & Nutrition </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
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
          <MenuButton _hover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Diabetes </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
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
          <MenuButton _hover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Healthcare Devices </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
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
          <MenuButton _hover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Personal Care </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
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
          <MenuButton _hover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Health Conditions </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
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
          <MenuButton _hover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Ayurveda Products </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
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
          <MenuButton _hover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Homeopathy </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
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
          <MenuButton _hover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Featured </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
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
          <MenuButton _hover={{ color: "tomato", cursor: "pointer" }}>
            <Text fontSize="12px"> Covid Essentials </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
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
