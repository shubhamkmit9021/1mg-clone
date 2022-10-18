import {
  FormControl,
  Input,
  Stack,
  Heading,
  Text,
  Button,
  Container,
  Link,
  HStack,
  Box,
  useToast,
  VStack,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import SlidePhoto from "./sld";
import "./login.css";
import { useDispatch } from "react-redux";

import { isauth } from "../Redux/action";
const InitState = {
  email: "",
  password: "",
};

const Login = ({ onClose, SetIsLogin, SetIsUserAuthenticated }) => {
  const [values, setValues] = useState(InitState);
  const [Nav, setNav] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const dispatch = useDispatch();
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(values);
    let res3 = await fetch("https://json-server-1mg.herokuapp.com/users");
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
      onClose();
      SetIsUserAuthenticated(true);
      dispatch(isauth(true));
      toast({
        title: "Logged in  successfully.",
        description: "Keep shopping.",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      setNav(true);
    } else {
      toast({
        title: "Invalid credentials !",
        description: "Please enter correct details.",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  };

  if (Nav) {
    <Navigate to="/" />;
  }

  return (
    <Box w="max-content" margin="auto">
      <HStack spacing="">
        <Box
          w="500px"
          h="500px"
          bg="white"
          p="50px"
          pt="80px"
          borderRight="1px solid #CBD5E0"
        >
          {/* carousel box */}
          <SlidePhoto />
        </Box>

        <Box w="500px" h="500px" bg="white" p="20px">
          <VStack>
            <Box className="crossBox" w="100%">
              <Flex>
                <Box></Box>
                <Spacer />
                <Box
                  onClick={() => {
                    onClose();
                  }}
                >
                  <Image
                    src="https://www.1mg.com/images/cross_icon_18.svg"
                    alt="close icon"
                    width="20px"
                    height="20px"
                  />
                </Box>
              </Flex>
            </Box>
            <Box className="mainBox">
              <Heading mb={4} ml="0px">
                Login
              </Heading>
              <Text fontSize="10px" color="grey">
                Get access to your orders, lab tests & doctor consultations
              </Text>

              <form onSubmit={handleClick}>
                <Input
                  width="300px"
                  mt="60px"
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
                  width="300px"
                  mt="30px"
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

                <Button mt="60px" w="300px" colorScheme="red" type="submit">
                  LOGIN
                </Button>
              </form>
              <Text fontSize="14px" mt="20px" color="grey">
                New on 1mg?{" "}
                <Link
                  color="rgb(255, 111, 97)"
                  onClick={() => {
                    SetIsLogin(false);
                  }}
                >
                  Sign Up
                </Link>
              </Text>

              <Text fontSize="10px" color="grey">
                By logging in, you agree to our
              </Text>
              <Text fontSize="10px" color="grey">
                <Link href="https://www.1mg.com/tnc">Terms and Conditions</Link>{" "}
                &{" "}
                <Link href="https://www.1mg.com/privacypolicy">
                  Privacy Policy
                </Link>
              </Text>

              <Text fontSize="10px" color="rgb(255, 111, 97)">
                Need Help? Get In Touch
              </Text>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Login;
