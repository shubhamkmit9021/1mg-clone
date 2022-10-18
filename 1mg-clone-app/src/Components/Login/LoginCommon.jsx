import React from "react";
import { useState } from "react";
import { greyColor, lightOrange } from "../../Colors/Color";
import { Navigate } from "react-router-dom";
import Login from "../../Components Abhishek/login";
import Signup from "../../Components Abhishek/signup";
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
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
const InitState = {
  email: "",
  password: "",
  username: "",
};
export default function LoginCommon({
  isOpen,
  onClose,
  details,
  isLogin,
  SetIsLogin,
}) {
  const [input, setInput] = useState("");
  const [values, setValues] = useState(InitState);
  const [isUserAuthenticated, SetIsUserAuthenticated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  async function handleClick(e) {
    console.log(values);
    let res3 = await fetch("https://json-server-1mg.herokuapp.com/users");
    let res4 = await res3.json();
    console.log(res4, "res4");
    res4.map((elem) => {
      console.log(elem);
      if (elem.email === values.email && elem.password === values.password) {
        localStorage.setItem("isAuth", true);
        return true;
      }
    });
    return false;
  }
  const {
    Title,
    desc,
    inputLabel,
    inputWarning,
    buttonTitle,
    one,
    two,
    three,
  } = details;

  const isError = input === "";
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent ml="-30%">
        {!isUserAuthenticated && (
          <Box>
            {!isLogin ? (
              <Box>
                <Signup onClose={onClose} SetIsLogin={SetIsLogin} />
              </Box>
            ) : (
              <Box>
                <Login
                  onClose={onClose}
                  SetIsLogin={SetIsLogin}
                  SetIsUserAuthenticated={SetIsUserAuthenticated}
                />
              </Box>
            )}
          </Box>
        )}

        {/* <ModalHeader>{isLogin ? "Login" : "Sign Up"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" gap="10px">
        </ModalBody> */}
      </ModalContent>
    </Modal>
  );
}
