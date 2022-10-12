import { Box, Flex, HStack, Image, Text, Spacer } from "@chakra-ui/react";
import React from "react";
import { GrCart } from "react-icons/gr";
const UpperNav = () => {
  return (
    <HStack p={1}>
      <Flex flexWrap='wrap' w="72%"  alignItems='center'>
        <Box px={3} ><Image src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="logo" _hover={{ cursor:'pointer' }} /></Box>
        <Box px={3} > <Text color='tomato' as='b' _hover={{ cursor:'pointer' }} > MEDICINES </Text> </Box>
        <Box px={3} > <Text fontSize='16px' as='b'  _hover={{ color:'tomato', cursor:'pointer' }} > LAB TESTS </Text> </Box>
        <Box px={3} > <Text fontSize='16px' as='b'  _hover={{ color:'tomato', cursor:'pointer' }} > CONSULT DOCTORS </Text> </Box>
        <Box px={3} > <Text fontSize='16px' as='b'  _hover={{ color:'tomato', cursor:'pointer' }} > COVID-19 </Text> </Box>
        <Box px={3} > <Text fontSize='16px' as='b'  _hover={{ color:'tomato', cursor:'pointer' }} > AYURVEDA </Text> </Box>
        <Box px={3} > <Text fontSize='16px' as='b'  _hover={{ color:'tomato', cursor:'pointer' }} > CARE PLAN </Text> </Box> 
      </Flex>
      <Spacer />
      <Flex flexWrap='wrap' w="25%"  alignItems='center'>
      {/* <Spacer /> */}
        <Box> <Text fontSize='14px' _hover={{ cursor:'pointer' }}  > Login | Sign Up </Text> </Box>
        <Box px={3} ><Text fontSize='14px' _hover={{ cursor:'pointer' }}  > Offers </Text> </Box>
        <Box px={3} fontSize='24px' _hover={{ cursor:'pointer' }} ><GrCart /></Box>
        <Box px={3} ><Text fontSize='14px' _hover={{ cursor:'pointer' }} > Need Help? </Text> </Box>
      </Flex>
     
    </HStack>
  );
};

export default UpperNav;
