import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  usePinInputDescendant,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { greyColor } from "../../Colors/Color";
import { Link } from "react-router-dom";

function TabCarousal({ data }) {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scroll, setScroll] = useState(0);
  const ref = useRef(null);

  function onScrollY() {
    ref.current.scrollLeft += 400;
    setScroll((prev) => prev + 400);
  }
  function onScrollX() {
    ref.current.scrollLeft -= 400;
    setScroll((prev) => prev - 400);
  }

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);
  return (
    <Box
      paddingLeft={{ base: "10px", sm: "20px", lg: "50px", xl: "50px" }}
      paddingRight={{ base: "10px", sm: "20px", lg: "50px", xl: "50px" }}
      height="100%"
      className="okgoogle"
    >
      <Box width="100%" position="relative" height="100%" className="okgoogle">
        {windowWidth > 1024 && scroll > 0 && (
          <IconButton
            onClick={onScrollX}
            bg="white"
            color="orange"
            position="absolute"
            top="50"
            left="-5"
            borderRadius="50%"
            icon={<AiOutlineLeft color="white" />}
          >
            L
          </IconButton>
        )}

        <Flex
          width="100%"
          overflowX="scroll"
          overflowY="hidden"
          className="hideScroll"
          id="scrollBar"
          ref={ref}
          scrollBehavior="smooth"
          textAlign={"center"}
          height="100%"
          alignContent="center"
        >
          {data.map((tab) => {
            let textSide = "center";
            if (tab.isProduct) textSide = "left";
            return (
              <Box
                maxWidth="141px"
                minW={{ base: "85px", sm: "110px", lg: "130px" }}
                key={tab.title}
                _hover={{
                  lg: {
                    boxShadow: "0 0 7px 0 rgb(0 0 0 / 14%)",
                    borderRadius: "10px",
                  },
                }}
                ml="10px"
                cursor="pointer"
                textAlign={textSide}
              >
                <Link to="/multivitamins">
                  <Image
                    p="20px 20px 0px 20px"
                    src={tab.img}
                    bg={{
                      base: "#BFEDDD",
                      sm: "#BFEDDD",
                      lg: "transparent",
                    }}
                    borderRadius={{
                      base: "10px",
                      sm: "10px",
                      lg: "5px 5px 0 0",
                      xl: "5px 5px 0 0",
                    }}
                  ></Image>
                </Link>

                {tab.isProduct ? (
                  <Text
                    fontSize={{ base: "10px", sm: "13px", lg: "14px" }}
                    fontWeight="400"
                    pl="10px"
                  >
                    {tab.title}
                  </Text>
                ) : (
                  <Text
                    fontSize={{ base: "12px", sm: "15px", lg: "16px" }}
                    fontWeight="400"
                  >
                    {tab.title}
                  </Text>
                )}

                {tab.isProduct && (
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap="3px"
                    ml="10px"
                    height="40%"
                  >
                    <Box fontSize="12px" color={greyColor}>
                      {tab.desc}
                    </Box>
                    <Flex gap="2px" alignContent="center">
                      <Box
                        fontSize="11px"
                        textAlign="center"
                        bg="#1aab2a"
                        width="30px"
                        color="white"
                        fontWeight="400"
                      >
                        <Flex>
                          <Box>4.4</Box>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="15"
                            viewBox="0 0 51 48"
                          >
                            <path
                              fill="#ffffff"
                              stroke="none"
                              d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            ></path>
                          </svg>
                        </Flex>
                      </Box>
                      <Box fontSize="11px" color={greyColor}>
                        19 rating
                      </Box>
                    </Flex>
                    <Flex gap="2px" alignContent="center">
                      <Box fontSize="11px" color={greyColor}>
                        MRP{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          ₹{tab.price}
                        </span>
                      </Box>
                      <Box fontSize="12px" color="green">
                        {tab.discount}% Off
                      </Box>
                    </Flex>

                    <Box>₹{tab.price - (tab.price / 100) * tab.discount}</Box>
                  </Box>
                )}
              </Box>
            );
          })}
        </Flex>
        {windowWidth > 1024 && scroll < 450 && (
          <IconButton
            onClick={onScrollY}
            bg={"rgba(0,0,0,0.4)"}
            position="absolute"
            top="50"
            right="-15"
            borderRadius="50%"
            icon={<AiOutlineRight color="white" />}
          ></IconButton>
        )}
      </Box>
    </Box>
  );
}

export default TabCarousal;
