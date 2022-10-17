import React from 'react'
import { Box, Spacer, Flex, Text } from "@chakra-ui/react";

const Heading = () => {
  return (
    <Box bg="#ddd" pt="6" pb="2">
        <Box w="92%" m="auto" alignItems="center">
          <Flex>
            <Box>
              <Text fontSize={{ base: 'lg', sm: 'lg', md: 'xl', lg: '2xl'}}> Featured brands</Text>
            </Box>
            <Spacer />
            <Box
              w="max-content"
              bg="tomato"
              py="1"
              px="2"
              color="white"
              borderRadius="6"
              _hover={{ cursor: "pointer" }}
            >
              SEE ALL
            </Box>
          </Flex>
        </Box>
      </Box>
  )
}

export default Heading
