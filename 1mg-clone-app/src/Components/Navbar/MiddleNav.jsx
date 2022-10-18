import { Box, Flex, Text, Spacer, Input, Show } from "@chakra-ui/react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";
import { useRef } from "react";

const MiddleNav = () => {
  const fetchData = (e) => {
    fetch(`https://json-server-1mg.herokuapp.com/cities`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <Flex m="1">
        <Box
          w={{ base: "90%", sm: "90%", md: "90%", lg: "70%", xl: "65%" }}
          mx={{ base: "3", sm: "4", md: "5" }}
          alignItems="center"
        >
          <Flex wrap="wrap" justifyContent="center" alignItems="center">
            <Flex
              bg="#ddd"
              w={{ base: "60%", sm: "55%", md: "25%", lg: "22%", xl: "22%" }}
              p="1"
              alignItems="center"
              m={{ base: "1", sm: "1", md: "1" }}
            >
              <Box _hover={{ cursor: "pointer" }}>
                <ImLocation />
              </Box>

              <Box>
                <Input
                  pl={2}
                  variant="unstyled"
                  width="90%"
                  placeholder="Enter Your City"
                  fontSize={{
                    base: "xs",
                    sm: "sm",
                    md: "md",
                    lg: "lg",
                    xl: "xl",
                  }}
                  onChange={(e) => {
                    console.log(e.target);
                  }}
                />
              </Box>
              <Box ml="-5%" _hover={{ cursor: "pointer" }}>
                <BiCurrentLocation />
              </Box>
            </Flex>

            <Flex
              bg="#ddd"
              w={{ base: "95%", sm: "90%", md: "50%", lg: "70%", xl: "68%" }}
              p="1"
              alignItems="center"
              m={{ base: "1", sm: "1", md: "1" }}
            >
              <Box>
                <Input
                  pl={2}
                  variant="unstyled"
                  width={{
                    base: "200%",
                    sm: "180%",
                    md: "170%",
                    lg: "180%",
                    xl: "180%",
                  }}
                  placeholder="Search for Medicines and Health Products"
                  fontSize={{
                    base: "xs",
                    sm: "sm",
                    md: "md",
                    lg: "lg",
                    xl: "xl",
                  }}
                />
              </Box>
              <Spacer />
              <Box _hover={{ cursor: "pointer" }}>
                <AiOutlineSearch />
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Spacer />

        <Box w={{ lg: "20%", xl: "33%" }} h="3rem" mx={{ lg: "2", xl: "1" }}>
          <Flex>
            <Show above="xl">
              <Flex alignItems="center">
                <Box>
                  <BsFillLightningChargeFill />
                </Box>
                <Box>
                  <Text fontSize="16px">
                    QUICK BUY! Get 25% off on medicines*
                  </Text>
                </Box>
              </Flex>
            </Show>
            <Show above="lg">
              <Flex>
                <Box m="1">
                  <Box
                    color="white"
                    bg="#FF6F61"
                    px="4"
                    py="2"
                    borderRadius="4px"
                    _hover={{ cursor: "pointer" }}
                  >
                    Quick order
                  </Box>
                </Box>
              </Flex>
            </Show>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default MiddleNav;
