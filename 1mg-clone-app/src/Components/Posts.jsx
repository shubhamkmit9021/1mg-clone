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
      <Grid bg="#f6f6f6" templateColumns="repeat(3, 1fr)" gap={5}>
        {data.map((item) => (
          <GridItem w="100%" p="2%" bg="white">
            <Box boxShadow="dark-lg" p="6" borderRadius="2xl" height="450px">
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
                    width="90%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Text>₹ {item.final_price}</Text>
                    <Button
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
