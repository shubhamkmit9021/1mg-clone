import { Box, Center, Text, Flex, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";

const Footer2 = () => {
  return (
    <Box borderY="1px solid #bfbfbf" mt="30px">
      <Box>
        <Center py="24px">
          <Text
            fontFamily='"Space Mono", "Clear Sans", "Helvetica Neue"'
            fontSize="24px"
            color="#1A1A1A"
          >
            <h2>INDIA’S LARGEST HEALTHCARE PLATFORM</h2>
          </Text>
        </Center>
      </Box>

      <Box mb="5">
        <Flex textAlign="center" justifyContent="space-evenly">
          <Box>
            <Text as="b" fontSize="28px">
              260m+
            </Text>
            <Text>Visitors</Text>
          </Box>
          <Box>
            <Text as="b" fontSize="28px">
              31m+
            </Text>
            <Text>Orders Delivered</Text>
          </Box>
          <Box>
            <Text as="b" fontSize="28px">
              1800m+
            </Text>
            <Text>Cities</Text>
          </Box>
        </Flex>
      </Box>

      <Box border="1px solid #bfbfbf" w="90%" m="auto"></Box>

      <Box my="5">
        {/* <Center > */}
        <Flex alignItems="center" justifyContent="center">
          <Box mr="4">
            <Text color="#212121" fontSize="22px">
              Get the link to download App
            </Text>
          </Box>
          <Box mx="2" w="25%" borderRadius="2">
            {/* <Input px='1' variant="unstyled" type="number" placeholder="Enter Phone Number" />  bg="#ddd" */}
            <InputGroup borderRadius="2">
              <InputLeftAddon children="+91" />
              <Input type="Number" variant="unstyled" px="2" bg='#ddd' placeholder="Enter Phone Number" />
            </InputGroup>
          </Box>
          <Box>
            <Box
              w='max-content'
              bg="tomato"
              py="2"
              px="4"
              color="white"
              borderRadius="6"
              _hover={{ cursor: "pointer" }}
            >
              Send Link
            </Box>
          </Box>
        </Flex>
        {/* </Center> */}
      </Box>
    </Box>
  );
};

export default Footer2;
