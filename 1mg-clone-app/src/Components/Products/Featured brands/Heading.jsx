import React from "react";
import { Box, Spacer, Flex, Text } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";

const Heading = () => {
  return (
    <Box bg="#ddd" pt="6" pb="2">
      <Box w="92%" m="auto" alignItems="center">
        <Flex>
          <Box>
            <Text fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "2xl" }}>
              {" "}
              Featured brands
            </Text>
          </Box>
          <Spacer />
          <Link to="/Multivitamins">
            <Box
              w="max-content"
              bg="tomato"
              py="1"
              px="2"
              color="white"
              borderRadius="6"
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                <Navigate to="/Multivitamins" />;
              }}
            >
              SEE ALL
            </Box>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Heading;
