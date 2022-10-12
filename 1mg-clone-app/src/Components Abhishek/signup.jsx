import { FormControl, Input, Stack, Heading, Text, Button, Container, Link, } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Signup = () => {

    const {userDetails, setUserDetails} = useState({email:"",password:""})

    const handleChange= (e) => {
        const {name, value}=e.target ;
        setUserDetails({...userDetails, [name]: value})
    }

    const handleClick = () => {
        //fetch(``)
        //fetching of the user details to be done here
    }

    const { email, password} = userDetails;
    return (
        
        <Container>
            <Stack maxW={600} p={2}>
                <Heading mb={4}>Login</Heading>
                <Text fontSize='20px' color='grey'>
                    Get access to your orders, lab tests & doctor consultations
                </Text>
                <FormControl>

                    <Input name="email" type="email" placeholder="Enter Email ID or Mobile Number" value={email} onChange={handleChange} />
                </FormControl>
                <FormControl>

                    <Input name="password" type="text" placeholder="Enter your password" value={password} onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <Button colorScheme='blue' onClick={handleClick}>LOGIN</Button>
                </FormControl>

                <Text fontSize='20px' color='grey'>
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

            </Stack>
        </Container>

    )
}

export default Signup;


