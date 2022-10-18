import { Box, Flex, Image, Text, Spacer, Show } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Button,
  HStack,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";
import { GrCart } from "react-icons/gr";
import LowerNav from "./LowerNav";
import MiddleNav from "./MiddleNav";
import { Link } from "react-router-dom";
import { lightOrange } from "../../Colors/Color";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Redux/store";
import { useRef, useState } from "react";
import LoginCommon from "../Login/LoginCommon";
import { isauth } from "../../Redux/action";

const UpperNav = () => {
  const cartItems = useSelector((store) => store.cartItems);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [isLogin, SetIsLogin] = useState(false);
  const ref = useRef(null);
  let a = localStorage.getItem("isAuth");
  let name = localStorage.getItem("name");
  const reduxIsAuth = useSelector((store) => store.isAuth);
  const [isAuth, SetIsAuth] = useState(a);
  const dispatch = useDispatch();
  return (
    <>
      <HStack py="1" px="1" mx="1">
        <Flex
          flexWrap="wrap"
          w={{ base: "45%", sm: "45%", md: "30%", lg: "70%", xl: "72%" }}
          mr="2"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Box>
            <Link to="/">
              <Image
                src="https://www.1mg.com/images/tata_1mg_logo.svg"
                alt="logo"
                _hover={{ cursor: "pointer" }}
                w="100px"
              />
            </Link>
          </Box>
          <Show above="lg">
            <Box>
              {" "}
              <Text as="b" _hover={{ cursor: "pointer" }} color="tomato">
                {" "}
                MEDICINES{" "}
              </Text>{" "}
            </Box>
            <Box>
              {" "}
              <Text as="b" _hover={{ color: "tomato", cursor: "pointer" }}>
                {" "}
                LAB TESTS{" "}
              </Text>{" "}
            </Box>
            <Box>
              {" "}
              <Text as="b" _hover={{ color: "tomato", cursor: "pointer" }}>
                {" "}
                CONSULT DOCTORS{" "}
              </Text>{" "}
            </Box>
            <Box>
              {" "}
              <Text as="b" _hover={{ color: "tomato", cursor: "pointer" }}>
                {" "}
                COVID-19{" "}
              </Text>{" "}
            </Box>
            <Box>
              {" "}
              <Text as="b" _hover={{ color: "tomato", cursor: "pointer" }}>
                {" "}
                AYURVEDA{" "}
              </Text>{" "}
            </Box>
            <Show above="xl">
              <Box>
                {" "}
                <Text as="b" _hover={{ color: "tomato", cursor: "pointer" }}>
                  {" "}
                  CARE PLAN{" "}
                </Text>{" "}
              </Box>
            </Show>
          </Show>
        </Flex>
        <Spacer />
        <Flex
          flexWrap="wrap"
          w={{ base: "55%", sm: "50%", md: "30%", lg: "25%", xl: "26%" }}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Box>
            {!reduxIsAuth ? (
              <Box display="flex">
                <Text
                  onClick={onOpen}
                  fontSize={{
                    base: "16px",
                    sm: "16px",
                    md: "18px",
                    lg: "16px",
                    xl: "14px",
                  }}
                  _hover={{ cursor: "pointer" }}
                >
                  {" "}
                  Login | Sign Up{" "}
                </Text>
              </Box>
            ) : (
              <Box
                cursor="pointer"
                onClick={() => {
                  localStorage.setItem("isAuth", "false");
                  SetIsAuth(false);
                }}
                display="flex"
                gap="10px"
              >
                <Box display="flex">
                  <img
                    src="https://img.icons8.com/ios-glyphs/2x/user.png"
                    alt="logo"
                    style={{ height: "25px", width: "25px" }}
                  />
                  <Text>{name}</Text>
                </Box>
                <Box
                  color={lightOrange}
                  fontWeight="600"
                  onClick={() => {
                    dispatch(isauth(false));
                  }}
                >
                  LOGOUT
                </Box>
              </Box>
            )}

            <LoginCommon
              isOpen={isOpen}
              onClose={onClose}
              isLogin={isLogin}
              SetIsLogin={SetIsLogin}
              details={{
                Title: "Login",
                desc: "Get access to your orders, lab tests & doctor consultations",
                inputLabel: "Email",
                inputWarning: "Please enter a valid Email ID",
                buttonTitle: "LOGIN",
                one: "New on 1mg? Sign Up",
                two: `By logging in, you agree to our
                Terms and Conditions & Privacy Policy`,
                three: "Need Help? Get In Touch",
              }}
            />
          </Box>
          <Show above="lg">
            <Box>
              <Text _hover={{ cursor: "pointer" }}> Offers </Text>{" "}
            </Box>
          </Show>
          <Box
            fontSize={{
              base: "24px",
              sm: "24px",
              md: "24px",
              lg: "24px",
              xl: "24px",
            }}
            _hover={{ cursor: "pointer" }}
          >
            <Link to="/cart">
              <Flex>
                <GrCart />
                <Box
                  bg={lightOrange}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="18px"
                  width="18px"
                  fontSize="14px"
                  borderRadius="5px"
                  background="#ff6f61"
                  boxShadow="0 0 1px #333"
                  color="white"
                  marginTop="-5px"
                  marginLeft="-2px"
                >
                  {cartItems.length}
                </Box>
              </Flex>
            </Link>
          </Box>
          <Show above="xl">
            <Box>
              <Text _hover={{ cursor: "pointer" }}> Need Help? </Text>{" "}
            </Box>
          </Show>
        </Flex>
      </HStack>

      <Box mt="1" mb="0.5">
        <hr />
      </Box>

      <MiddleNav />

      <Box mt="1" mb="0.5">
        <hr />
      </Box>

      <LowerNav />
    </>
  );
};

export default UpperNav;
