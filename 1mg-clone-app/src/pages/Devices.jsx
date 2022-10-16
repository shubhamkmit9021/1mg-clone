import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Checkbox,
  InputGroup,
  InputLeftElement,
  Divider,
  Input,
} from "@chakra-ui/react";
import {
  Box,
  Center,
  Select,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  VStack,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import {
  Button,
  Heading,
  Grid,
  GridItem,
  Stack,
  Skeleton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { lightOrange } from "../Colors/Color";
const Devices = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [deals, setDeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  // const changeValue = document.getElementById('filterby').value

  // const url = `http://localhost:8080/multivitamins`

  // if(changeValue=='LtH'){
  //   url+='?_sort=price&_order=asc'
  // }
  // else if(changeValue=='HtL'){
  //   url+='?_sort=price&_order=desc'
  // }
  // else if (changeValue=='Ratings'){
  //   url+='?_sort=ratings&_order=asc'
  // }
  // else{
  //   url
  // }

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/multivitamins")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/TopDealsMV`)
      .then((res) => res.json())
      .then((res) => setDeals(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/categoriesMV`)
      .then((res) => res.json())
      .then((res) => setCategories(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return (
      <Stack>
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
      </Stack>
    );
  }
  if (error) {
    return (
      <Box mt={10}>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Something Went Wrong!</AlertTitle>
          <AlertDescription>Please Refresh The Web Page.</AlertDescription>
        </Alert>
      </Box>
    );
  }
  return (
    <Box margin="auto" bg="#f6f6f6">
      <Box display="flex">
        <Box width="25%" bg="white">
          <VStack>
            <Box>
              <h3>Categories</h3>
              <Divider orientation="horizontal" color="black.400" />
              <Text ml="10%">VITAMINS & NUTRITIONS</Text>
              <Box ml="17%">
                <Link>
                  <Text color="black">Vitamins & Suppliments +</Text>
                </Link>
                <Link>
                  <Text color="black">Nutritional Drinks +</Text>
                </Link>
                <Link>
                  <Text color="black">Health Food & Drinks +</Text>
                </Link>
                <Link>
                  <Text color="black">Protine Suppliments +</Text>
                </Link>
                <Link>
                  <Text color="black">Omega & Fish Oil +</Text>
                </Link>
                <Link>
                  <Text color="black">Immunity Boosters +</Text>
                </Link>
                <Link>
                  <Text color="black">Specialty Suppliments +</Text>
                </Link>
                <Link>
                  <Text color="black">Weight Management +</Text>
                </Link>
              </Box>
              <Divider orientation="horizontal" color="black.400" />
              <h3>FILTERS</h3>
              <Divider orientation="horizontal" color="black.400" />
              <h3 ml="7%">Brands</h3>
              <Stack spacing={4} ml="17%">
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input w="150px" type="brand" placeholder="Search Brands" />
                </InputGroup>
              </Stack>
              <Box ml="17%" lineHeight={2}>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    HealthyHey
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Inlife
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    NOW Foods
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    GNC
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Dr Willmar Schwabe
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    SBL
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Bjain
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    HealthKart
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Pure Nutrition
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    MuscleBlaze
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Carbamide Forte
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    MuscleXP
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Healthaid
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Dr. Reckeweg
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    21st Century
                  </Checkbox>
                </Stack>
              </Box>
              <Divider orientation="horizontal" color="black.400" />
              <h3 ml="7%">Uses</h3>
              <Stack spacing={4} ml="17%">
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input w="150px" type="brand" placeholder="Search Brands" />
                </InputGroup>
              </Stack>
              <Box ml="17%" lineHeight={2}>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Nutritional Deficiencies
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Cardiac Care
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Mind Care
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Skin Care
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Bone, Joint & Muscle Care
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Immunity Booster
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Stomach Care
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Men Care
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Hair Care
                  </Checkbox>
                </Stack>
              </Box>
              <Divider orientation="horizontal" color="black.400" />
              <h3 ml="7%">Discount</h3>
              <Box ml="17%" lineHeight={2}>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Less than 10%
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    10% and above
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    20% and above
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    30% and above
                  </Checkbox>
                </Stack>
              </Box>
              <Divider orientation="horizontal" color="black.400" />
              <h3 ml="7%">Product Form</h3>
              <Stack spacing={4} ml="17%">
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input w="150px" type="brand" placeholder="Search Brands" />
                </InputGroup>
              </Stack>
              <Box ml="17%" lineHeight={2}>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Tablet
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Capsule
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Powder
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Syrup
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Vegicap
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Bottle
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Dilution
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Chewable Tablet
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Soft Gelatin Capsule
                  </Checkbox>
                </Stack>
              </Box>
              <Divider orientation="horizontal" color="black.400" />
              <h3 ml="7%">Product Tag</h3>
              <Stack spacing={4} ml="17%">
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input w="150px" type="brand" placeholder="Search Brands" />
                </InputGroup>
              </Stack>
              <Box ml="17%" lineHeight={2}>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Antioxidant
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Arginine
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Lactose
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Stearate
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Detoxification
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Selenium
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Neurotransmitter
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Anhydrous Lactose
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Assimilation
                  </Checkbox>
                </Stack>
              </Box>
              <Divider orientation="horizontal" color="black.400" />
              <h3 ml="7%">Age</h3>
              <Box ml="17%" lineHeight={2}>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    All
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Child
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Elderly
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Adult
                  </Checkbox>
                </Stack>
              </Box>
              <h3 ml="7%">Gender</h3>
              <Box ml="17%" lineHeight={2}>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Unisex
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Female
                  </Checkbox>
                </Stack>
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    Male
                  </Checkbox>
                </Stack>
              </Box>
            </Box>
          </VStack>
        </Box>
        <Box width="70%">
          <Box>
            <VStack width="98%" padding="10px">
              <Breadcrumb align="left" w="100%" color={lightOrange}>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    Vitamins & Nutritions
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage color="black">
                  <BreadcrumbLink href="#">Multivitamins</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Heading align="left" w="95%">
                VITAMINS & SUPPLEMENTS
              </Heading>
              <Box width="98%" padding="10px">
                <Box padding="10px">
                  <Box>
                    <h3>Shop By Categories</h3>
                  </Box>
                </Box>
                <Box>
                  <Grid
                    templateColumns="repeat(5, 1fr)"
                    gap={25}
                    p="2%"
                    bg="gray.50"
                  >
                    {categories.map((category) => (
                      <GridItem w="100%" p="2%">
                        <Box
                          border="1px solid black"
                          boxShadow="dark-lg"
                          p="6"
                          rounded="md"
                          borderRadius="2xl"
                          height="220px"
                        >
                          <Center>
                            <Image
                              src={category.url}
                              align="center"
                              height="150px"
                            />
                          </Center>
                          <Center>
                            <VStack>
                              <Text align="center" justify="inherit">
                                {category.name}
                              </Text>
                            </VStack>
                          </Center>
                        </Box>
                      </GridItem>
                    ))}
                  </Grid>
                </Box>
              </Box>
              <Box mt="20" width="98%">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  padding="10px"
                >
                  <Box>
                    <h3>Top Deals</h3>
                  </Box>
                  <Box>
                    <Button
                      bg={lightOrange}
                      _hover={{ bg: "teal" }}
                      color="white"
                    >
                      See All
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Grid
                    templateColumns="repeat(5, 1fr)"
                    gap={8}
                    p="2%"
                    bg="gray.50"
                  >
                    {deals.map((deal) => (
                      <GridItem w="100%" p="2%">
                        <Box
                          border="1px solid black"
                          boxShadow="dark-lg"
                          p="6"
                          rounded="md"
                          borderRadius="2xl"
                          height="400px"
                        >
                          <Center>
                            <Image
                              src={deal.url}
                              align="center"
                              height="150px"
                            />
                          </Center>
                          <Center>
                            <VStack>
                              <Text align="center" justify="inherit">
                                {deal.name}
                              </Text>
                              <Text align="center" justify="inherit">
                                {deal.detail}
                              </Text>
                              <Flex>
                                <Box p="4">
                                  <Text as="s" align="center" justify="inherit">
                                    MRP : ₹ {deal.price}
                                  </Text>
                                </Box>
                                <Box p="4">
                                  <Text align="center" justify="inherit">
                                    ₹ {deal.final_price}
                                  </Text>
                                </Box>
                              </Flex>
                              <Button align="center" justify="inherit">
                                Add To Cart
                              </Button>
                            </VStack>
                          </Center>
                        </Box>
                      </GridItem>
                    ))}
                  </Grid>
                </Box>
              </Box>
              <Box mt="20">
                <VStack>
                  <Box w="95%" padding="10px">
                    <Flex>
                      <Box>
                        <h3>All Products</h3>
                      </Box>
                      <Spacer />
                      <Box>
                        <Flex alignItems="center" gap="5px">
                          <Box>
                            <Text>Sort By : </Text>
                          </Box>
                          <Spacer />
                          <Box>
                            <Select placeholder="Select option" id="filterby">
                              <option value="Rating">Customer Rating</option>
                              <option value="LtH">Price : Low to High</option>
                              <option value="HtL">Price : High to Low</option>
                            </Select>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                  <Box>
                    <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                      {products.map((product) => (
                        <GridItem w="100%" p="2%" bg="white">
                          <Box
                            border="1px solid black"
                            boxShadow="dark-lg"
                            p="6"
                            rounded="md"
                            borderRadius="2xl"
                            height="400px"
                          >
                            <Box bg="green" width="50px" color="white" p="2%">
                              Sale
                            </Box>
                            <Center>
                              <Image
                                src={product.url}
                                align="center"
                                height="150px"
                              />
                            </Center>
                            <Center>
                              <VStack>
                                <Text align="center" justify="inherit">
                                  {product.name}
                                </Text>

                                <Text align="center" justify="inherit">
                                  {product.detail}
                                </Text>

                                <Flex>
                                  <Box p="4">
                                    <Text
                                      align="center"
                                      as="s"
                                      justify="inherit"
                                    >
                                      MRP : ₹ {product.price}
                                    </Text>
                                  </Box>
                                </Flex>

                                <Box
                                  width="90%"
                                  display="flex"
                                  justifyContent="space-between"
                                  alignItems="center"
                                >
                                  <Text>₹ {product.final_price}</Text>
                                  <Button
                                    bg="white"
                                    _hover={{ bg: "whilte" }}
                                    color={lightOrange}
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
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Devices;
