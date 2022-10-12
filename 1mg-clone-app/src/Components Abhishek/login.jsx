import { FormControl, Input, Stack, Heading, Text, Button, Container, Link, HStack, Box, } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";



const Login = () => {
    return (
        <Box border='2px solid black' borderRadius='20px' w='max-content' margin='auto' mt='100px'>
            
            <HStack spacing=''>
                <Box w='500px' h='500px' bg='white' borderRadius='20px'>
                    {/* carousel box */}

                </Box>
                
                <Box w='500px' h='500px' bg='white' border='1px solid pink' borderRadius='20px'>
                    <Heading mb={4}>Login</Heading>
                    <Text fontSize='10px' color='grey'>
                        Get access to your orders, lab tests & doctor consultations
                    </Text>
                    <FormControl >
                        <Input width='300px' mt='60px' name="email" type="email" placeholder="Enter Email ID or Mobile Number" />
                    </FormControl>
                    <FormControl>
                        <Button mt='90px' w='320px' colorScheme='blue' >LOGIN</Button>
                    </FormControl>
                    <Text fontSize='10px' color='grey'>
                        New on 1mg? Sign Up
                    </Text>

                    <Text fontSize='10px' color='grey'>
                        By logging in, you agree to our
                    </Text>
                    <Text fontSize='10px' color='grey'>
                        <Link>Terms and Conditions</Link> & <Link>Privacy Policy</Link>
                    </Text>

                    <Text fontSize='10px' color='crimson'>
                        Need Help? Get In Touch
                    </Text>

                </Box>

            </HStack>
        </Box>
    )
}

export default Login;