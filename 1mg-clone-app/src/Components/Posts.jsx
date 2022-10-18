import React from "react";
import {
  Box,
  Center,
  Image,
  VStack,
  Text,
  Flex,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { lightOrange } from "../Colors/Color";
import { useDispatch } from "react-redux";
import { addtocart } from "../Redux/action";

const Posts = ({ data, loading }) => {
  const dispatch = useDispatch();
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Box>
      <Grid
        bg="#f6f6f6"
        fontSize={["10px", "10px", "14px"]}
        templateColumns={["repeat(1,1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={[2, 3, 4]}
      >
        {data.map((item) => (
          <GridItem w="100%" p="2%" bg="#f6f6f6">
            <Box
              boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
              p="6"
              borderRadius="2xl"
              height="450px"
            >
              <Box
                width="90%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                margin="auto"
                pb="15px"
              >
                <Box
                  bg="green"
                  width="auto"
                  color="white"
                  padding="2%"
                  borderRadius="10px"
                >
                  Sale
                </Box>
                <Box
                  bg="green"
                  width="auto"
                  color="white"
                  padding="2%"
                  borderRadius="10px"
                >
                  {item.ratings} ★
                </Box>
              </Box>
              <Center>
                <Image src={item.url} align="center" height="150px" />
              </Center>
              <Center>
                <VStack>
                  <Text align="center" justify="inherit">
                    {item.name}
                  </Text>

                  <Text align="center" justify="inherit">
                    {item.detail}
                  </Text>

                  <Flex>
                    <Box p="4">
                      <Text align="center" as="s" justify="inherit">
                        MRP : ₹ {item.price}
                      </Text>
                    </Box>
                  </Flex>

                  <Box
                    pb="10px"
                    mb="10px"
                    width="90%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box display="flex">
                      <Text>₹</Text> <Text>{item.final_price}</Text>
                    </Box>
                    <Button
                      mb="10px"
                      bg="white"
                      _hover={{ bg: "whilte" }}
                      color={lightOrange}
                      onClick={() => {
                        dispatch(addtocart(item));
                      }}
                    >
                      Add
                    </Button>
                  </Box>
                </VStack>
              </Center>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Posts;
