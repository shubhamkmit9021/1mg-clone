import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Posts from "../Components/Posts";
import Pagination from "../Components/Pagination";
import {
  Checkbox,
  InputGroup,
  InputLeftElement,
  Divider,
  Input,
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
// import {
//   MDBPagination,
//   MDBPaginationItem,
//   MDBPaginationLink
// } from "mdb-react-ui-kit";
import { lightOrange } from "../Colors/Color";

function Multivitamins() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [deals, setDeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [sortValue, setSortValue] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(20);

  useEffect(() => {
    loadProducts();
  }, []);

  const sortOptions = ["Ratings", "Price : Low To High", "Price : High To Low"];

  const loadProducts = async () => {
    return await axios
      .get(`https://json-server-1mg.herokuapp.com/devices`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    if (value == "Ratings") {
      return await axios
        .get(
          `https://json-server-1mg.herokuapp.com/devices?_sort=ratings&_order=desc`
        )
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
    } else if (value == "Price : Low To High") {
      return await axios
        .get(
          `https://json-server-1mg.herokuapp.com/devices?_sort=final_price&_order=asc`
        )
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
    } else if (value == "Price : High To Low") {
      return await axios
        .get(
          `https://json-server-1mg.herokuapp.com/devices?_sort=final_price&_order=desc`
        )
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
    } else {
      return await axios
        .get(`https://json-server-1mg.herokuapp.com/devices`)
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
    }
  };

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
    fetch(`https://json-server-1mg.herokuapp.com/TopDealsDV`)
      .then((res) => res.json())
      .then((res) => setDeals(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    setLoading(true);
    fetch(`https://json-server-1mg.herokuapp.com/categoriesDV`)
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
      <Box display="flex" margin="auto" justifyContent="space-between">
        <Box width="23%" bg="#f6f6f6" padding="3%">
          <VStack>
            <Box>
              <Heading fontSize="25px" pb="10px">
                Categories
              </Heading>
              <Divider orientation="horizontal" color="black.400" />
              <Text pt="10px" width="100%">
                VITAMINS & NUTRITIONS
              </Text>
              <Box ml="10px" fontSize="15px" lineHeight="30px" width="100%">
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
                  <Text color="black" pb="10px">
                    Weight Management +
                  </Text>
                </Link>
              </Box>
              <Divider orientation="horizontal" color="black.400" />
              <Heading fontSize="20px" pt="10px" pb="10px">
                FILTERS
              </Heading>
              <Divider orientation="horizontal" color="black.400" />
              <Heading fontSize="25px" pb="10px" pt="10px">
                Brands
              </Heading>
              <Stack ml="10px" spacing={4} width="100%" pt="10px" pb="10px">
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input w="150px" type="brand" placeholder="Search Brands" />
                </InputGroup>
              </Stack>
              <Box ml="10px" lineHeight={2} pb="10px">
                <Stack spacing={5} direction="row">
                  <Checkbox size="md" colorScheme="green">
                    HealthVit
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
                    HealthVit
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
              <Heading fontSize="25px" pb="10px" pt="10px">
                Uses
              </Heading>
              <Stack ml="10px" spacing={4} width="100%" pt="10px" pb="10px">
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input w="150px" type="brand" placeholder="Search Uses" />
                </InputGroup>
              </Stack>
              <Box ml="10px" lineHeight={2} fontSize="15px" pb="10px">
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
                    Joint & Muscle Care
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
              <Heading fontSize="25px" pb="10px" pt="10px">
                Discount
              </Heading>
              <Box ml="10px" lineHeight={2} pb="10px">
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
              <Heading fontSize="25px" pb="10px" pt="10px">
                Product Form
              </Heading>
              <Stack ml="10px" spacing={4} width="100%" pt="10px" pb="10px">
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input w="150px" type="brand" placeholder="Search Brands" />
                </InputGroup>
              </Stack>
              <Box ml="10px" lineHeight={2} pb="10px">
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
              <Heading fontSize="25px" pb="10px" pt="10px">
                Product Tag
              </Heading>
              <Stack ml="10px" spacing={4} width="100%" pt="10px" pb="10px">
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input w="150px" type="brand" placeholder="Search Brands" />
                </InputGroup>
              </Stack>
              <Box pb="10px" ml="10px" lineHeight={2}>
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
              <Heading fontSize="25px" pb="10px" pt="10px">
                Age
              </Heading>
              <Box pb="10px" ml="10px" lineHeight={2}>
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
              <Divider orientation="horizontal" color="black.400" />
              <Heading pb="10px" pt="10px" fontSize="25px">
                Gender
              </Heading>
              <Box ml="10px" lineHeight={2}>
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
        <Box width="73%" bg="#f6f6f6" padding="3%">
          <Box>
            <VStack padding="10px">
              <Breadcrumb align="left" w="100%" color={lightOrange}>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Diabetese</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage color="black">
                  <BreadcrumbLink href="#">Devices</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Heading align="left" w="95%">
                DIABETES MONITORING
              </Heading>
              <Box padding="10px">
                <Box padding="10px">
                  <Box>
                    <Heading>Shop By Categories</Heading>
                  </Box>
                </Box>
                <Box>
                  <Grid
                    templateColumns="repeat(5, 1fr)"
                    gap={25}
                    p="2%"
                    bg="#f6f6f6"
                  >
                    {categories.map((category) => (
                      <GridItem w="100%" p="2%">
                        <Box
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
              <Box padding="10px">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  padding="10px"
                >
                  <Box>
                    <Heading>Top Deals</Heading>
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
                  <Grid templateColumns="repeat(3, 1fr)" gap={4} bg="#f6f6f6">
                    {deals.map((deal) => (
                      <GridItem>
                        <Box
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
              <Box padding="10px">
                <Box padding="10px" alignItems="center">
                  <Flex>
                    <Box>
                      <Heading>All Products</Heading>
                    </Box>
                    <Spacer />
                    <Box alignItems="center">
                      <Flex alignItems="center" gap="5px">
                        <Box>
                          <Text>Sort By : </Text>
                        </Box>
                        <Spacer />
                        <Box>
                          <Select
                            placeholder="Select option"
                            id="filterby"
                            onChange={handleSort}
                            value={sortValue}
                          >
                            {sortOptions.map((item, index) => (
                              <option value={item} key={index}>
                                {item}
                              </option>
                            ))}
                          </Select>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Posts data={currentData} loading={loading} />
              </Box>
              <Pagination
                dataPerPage={dataPerPage}
                totalData={data.length}
                paginate={paginate}
              />
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Multivitamins;
