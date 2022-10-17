import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Text,
  Box
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";

function DrawerFun() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
 
  // onClick={onOpen}

  return (
    <>
      <Button colorScheme="blue" onMouseEnter={onOpen}  onMouseLeave={onClose} >
        <GiHamburgerMenu />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
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
            <Box>
              {" "}
              <Text as="b" _hover={{ color: "tomato", cursor: "pointer" }}>
                {" "}
                CARE PLAN{" "}
              </Text>{" "}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerFun;
