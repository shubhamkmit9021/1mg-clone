import { Box, Flex, HStack, Image, Text, Spacer, Show } from "@chakra-ui/react";
import React from "react";
import { GrCart } from "react-icons/gr";
import LowerNav from "./LowerNav";
import MiddleNav from "./MiddleNav";

const UpperNav = () => {
  return (
    <>
      <HStack py='1' px='1' mx='1' >
      <Flex flexWrap='wrap'  w={{ base: '45%', sm: '45%', md: '30%', lg: '70%', xl: '72%'}} mr='2'  alignItems='center' justifyContent='space-evenly'>
        <Box><Image src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="logo" _hover={{ cursor:'pointer' }} w='100px' /></Box>
        <Show above='lg'>
        <Box> <Text as='b' _hover={{ cursor:'pointer' }}  color='tomato' > MEDICINES </Text> </Box>
        <Box> <Text as='b' _hover={{ color:'tomato', cursor:'pointer' }} > LAB TESTS </Text> </Box>
        <Box> <Text as='b' _hover={{ color:'tomato', cursor:'pointer' }} > CONSULT DOCTORS </Text> </Box>
        <Box> <Text as='b' _hover={{ color:'tomato', cursor:'pointer' }} > COVID-19 </Text> </Box>
        <Box> <Text as='b' _hover={{ color:'tomato', cursor:'pointer' }} > AYURVEDA </Text> </Box>
        <Show above='xl'>
        <Box> <Text as='b' _hover={{ color:'tomato', cursor:'pointer' }} > CARE PLAN </Text> </Box> 
        </Show>
        </Show>
      </Flex>
      <Spacer />
      <Flex flexWrap='wrap'  w={{ base: '55%', sm: '50%', md: '30%', lg: '25%', xl: '26%'}} alignItems='center' justifyContent='space-evenly'>
        <Box><Text fontSize={{ base: '16px', sm: '16px', md: '18px', lg: '16px', xl: "14px" }} _hover={{ cursor:'pointer' }} > Login | Sign Up </Text> </Box>
        <Show above='lg'>
        <Box><Text _hover={{ cursor:'pointer' }} > Offers </Text> </Box>
        </Show>
        <Box fontSize={{ base: '24px', sm: '24px', md: '24px', lg: '24px', xl: "24px" }} _hover={{ cursor:'pointer' }} ><GrCart /></Box>
        <Show above='xl'>
        <Box><Text _hover={{ cursor:'pointer' }} > Need Help? </Text> </Box>
        </Show>
      </Flex>
     
    </HStack>

    <Box mt='1' mb='0.5'>
      <hr />
    </Box>

    <MiddleNav/>

    <Box mt='1' mb='0.5'>
      <hr />
    </Box>
    
    <LowerNav/>
    
    </>
  );
};

export default UpperNav;
