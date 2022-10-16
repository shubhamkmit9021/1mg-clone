import { FormControl, Input, Stack, Heading, Text, Button, Container, Link, HStack, Box, Checkbox, useToast, } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Navigate, NavLink } from 'react-router-dom';
import SlidePhoto from "./sld";

const InitState = {
    name: "",
    email: "",
    password: "",
};

const Signup = () => {
    const [values, setValues] = useState(InitState);
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };

    const handleclick = async (e) => {
        e.preventDefault();
        let res1 = await fetch(" http://localhost:3000/users");
        let res2 = await res1.json();
        let flag = false;
        res2.map((elem) => {
            if (elem.email === values.email) {
                flag = true;
            }
        });
        if(flag){
            // alert("User already exists !");
            toast({
                title: "User already exists !",
                description: "Try another user details.",
                status: "error",
                duration: 4000,
                isClosable: true,
                position:"top"
            });
        }else{
            fetch(" http://localhost:3000/users", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "content-type": "application/json"
          }
        });
        }
    }

    return (
        <Box border='2px solid black' borderRadius='20px' w='max-content' margin='auto' mt='100px'>

            <HStack spacing=''>
                <Box w='500px' h='500px' bg='white' p='50px' pt='80px' borderRight='1px solid #CBD5E0' borderTopLeftRadius='20px' borderBottomLeftRadius='20px'>
                    {/* carousel box */}
                    <SlidePhoto />
                </Box>

                <Box w='500px' h='500px' bg='white' p='20px' borderRadius='20px'>
                    <Heading mb={4} ml='0px' mt='10px'>Sign Up</Heading>
                    <Text fontSize='10px' color='grey'>
                        Get access to your orders, lab tests & doctor consultations
                    </Text>
                    <form onSubmit={handleclick}>
                    <Input
                        width='300px'
                        mt='30px'
                        label="Name"
                        value={values.name}
                        name="name"
                        type="text"
                        onChange={handleChange}
                        required
                        placeholder="Enter Full Name"
                    />
                    <Input
                        width='300px'
                        mt='30px'
                        label="Email"
                        value={values.email}
                        name="email"
                        type="email"
                        onChange={handleChange}
                        required
                        placeholder="Enter Email ID"
                    />
                    <Input
                        width='300px'
                        mt='30px'
                        label="Password"
                        id="typePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        maxLength="8"
                    />
                    <br />
                    {/* <Checkbox defaultChecked>Checkbox</Checkbox> */}
                    
                    <Button mt='30px' w='300px' colorScheme='orange' type="submit">LOGIN</Button>
                    
                    </form >
                    <Text fontSize='14px' mt='20px' color='grey'>
                        New on 1mg? Sign Up
                    </Text>

                    <Text fontSize='10px' color='grey'>
                        By logging in, you agree to our
                    </Text>
                    <Text fontSize='10px' color='grey'>
                        <Link href="">Terms and Conditions</Link> & <Link href="">Privacy Policy</Link>
                    </Text>

                    <Text fontSize='10px' color='crimson'>
                        Need Help? Get In Touch
                    </Text>


                </Box>

            </HStack>
        </Box>
    )
}

export default Signup;