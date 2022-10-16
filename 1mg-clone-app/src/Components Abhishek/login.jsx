import { FormControl, Input, Stack, Heading, Text, Button, Container, Link, HStack, Box, useToast, } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Navigate, NavLink } from 'react-router-dom';
import SlidePhoto from "./sld";

const InitState = {
    email: "",
    password: ""
  };

const Login = () => {
    const [values, setValues] = useState(InitState);
    const [Nav, setNav]= useState(false);
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(values);
        let res3 = await fetch(" http://localhost:3000/users");
        let res4 = await res3.json();
        let flag = false;
        res4.map((elem) => {
            if (elem.email === values.email && elem.password == values.password) {
                flag = true;
                localStorage.setItem("name", elem.name);
            }
        });
        if (flag) {
            localStorage.setItem("isAuth", true);
            toast({
                title: "Logged in  success.",
                description: "Keep sailing ",
                status: "success",
                duration: 4000,
                isClosable: true,
                position:"top"
            });
            setNav(true);
        } else {
            toast({
                title: "Invalid credential ",
                description: "Have entered wrong crendentials",
                status: "error",
                duration: 4000,
                isClosable: true,
                position:"top"
            });
        }

    };

    if(Nav){
        <Navigate to="/" />
    }

    return (
        <Box border='2px solid black' borderRadius='20px' w='max-content' margin='auto' mt='100px'>

            <HStack spacing=''>
                <Box w='500px' h='500px' bg='white' p='50px' pt='80px' borderRight='1px solid #CBD5E0' borderTopLeftRadius='20px' borderBottomLeftRadius='20px'>
                    {/* carousel box */}
                    <SlidePhoto />
                </Box>

                <Box w='500px' h='500px' bg='white' p='20px' borderRadius='20px'>
                    <Heading mb={4} ml='0px' mt='10px'>Login</Heading>
                    <Text fontSize='10px' color='grey'>
                        Get access to your orders, lab tests & doctor consultations
                    </Text>

                    <form onSubmit={handleClick}>
                    <Input
                        width='300px'
                        mt='60px'
                        label="Email"
                        value={values.email}
                        name="email"
                        // size="lg"
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
                        // size="lg"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        maxLength="8"
                    />
                    
                        <Button mt='60px' w='300px' colorScheme='orange' type="submit" >LOGIN</Button>
                    
                    </form>
                    <Text fontSize='14px' mt='20px' color='grey'>
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