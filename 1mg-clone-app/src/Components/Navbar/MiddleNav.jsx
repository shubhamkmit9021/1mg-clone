import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  Spacer,
  Button,
  Input,
  Heading,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";

const MiddleNav = () => {
  return (
    <HStack p={1}>
      <Flex w="60%" alignItems="center" >
        <Flex
          bg="#ddd"
          w="40%"
          p="1"
          ml="60px"
          alignItems="center"
        >
          <Box _hover={{ cursor:'pointer' }}>
            <ImLocation />
          </Box>
          <Box>
            <Input
              pl={2}
              variant="unstyled"
              width="80%"
              placeholder="Enter Your City"
            />
          </Box>
          <Box ml="-20%" _hover={{ cursor:'pointer' }}>
            <BiCurrentLocation />
          </Box>
        </Flex>

        <Flex
          bg="#ddd"
          w="100%"
          p="1"
          ml="1"
          alignItems="center"
        >
          <Box>
            <Input
              pl={2}
              variant="unstyled"
              width="180%"
              placeholder="Search for Medicines and Health Products"
            />
          </Box>
          <Spacer />
          <Box _hover={{ cursor:'pointer' }}>
            <AiOutlineSearch />
          </Box>
        </Flex>

      </Flex>

      <Flex w="40%" alignItems="center">
        <Spacer />
        <Box>
          <BsFillLightningChargeFill />
        </Box>
        <Box pr={4}>
          {" "}
          <Text fontSize="14px">
            {" "}
            QUICK BUY! Get 25% off on medicines*{" "}
          </Text>{" "}
        </Box>

        <Box pr={5}>
          <Box color="white" bg="#FF6F61" px={6} py={1} borderRadius="4px" _hover={{ cursor:'pointer' }}>
            Quick order
          </Box>{" "}
        </Box>
      </Flex>
    </HStack>
  );
};

export default MiddleNav;
