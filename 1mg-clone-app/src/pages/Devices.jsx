
import React,{ useEffect} from "react";
import {useState} from "react";
import {Box,Center,Select,Breadcrumb,BreadcrumbItem,BreadcrumbLink ,Image,VStack,Text,Flex,Spacer} from"@chakra-ui/react";
import {Button,Container,Heading,Grid,GridItem,Stack,Skeleton,Alert,AlertIcon,AlertTitle,AlertDescription} from"@chakra-ui/react";
const Multivitamins = () => {
  const [loading, setLoading] = useState(false);
  const [products,setProducts] = useState([])
  const [deals,setDeals] = useState([])
  const [categories,setCategories] = useState([])
  const [error,setError] = useState(false)
  useEffect(()=>{
    setLoading(true)
    fetch(`http://localhost:8080/devices`)
    .then((res) => res.json())
    .then((res) => setProducts(res))
    .catch(()=> setError(true))
    .finally(()=>setLoading(false))
  },[])
  useEffect(()=>{
    setLoading(true)
    fetch(`http://localhost:8080/TopDealsDV`)
    .then((res) => res.json())
    .then((res) => setDeals(res))
    .catch(()=> setError(true))
    .finally(()=>setLoading(false))
  },[])
  useEffect(()=>{
    setLoading(true)
    fetch(`http://localhost:8080/categoriesDV`)
    .then((res) => res.json())
    .then((res) => setCategories(res))
    .catch(()=> setError(true))
    .finally(()=>setLoading(false))
  },[])
  if(loading){
    return(
      <Stack>
        <Skeleton height='40px' />
        <Skeleton height='40px' />
        <Skeleton height='40px' />
        <Skeleton height='40px' />
        <Skeleton height='40px' />
        <Skeleton height='40px' />
        <Skeleton height='40px' />
        <Skeleton height='40px' />
        <Skeleton height='40px' />
      </Stack>
    )
  }
  if(error){
    return(
      <Container mt={10}>
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Something Went Wrong!</AlertTitle>
          <AlertDescription>Please Refresh The Web Page.</AlertDescription>
        </Alert>
      </Container>
    )
  }
  return (
    <Container border='1px solid black' bgColor='gray.300' p='2%'>
      <Flex>
        <Box p='4' bg='red.400' maxW='30%'>
          <VStack>
            <Container w='250px'border='1px solid black' p='2%'>
              <h3>Categories</h3>
                <Text>Vitamins & Nutritions</Text>
                <Text>Vitamins & Suppliments +</Text>
                <Text>Nutritional Drinks +</Text>
                <Text>Health Food & Drinks +</Text>
                <Text>Protine Suppliments +</Text>
                <Text>Omega & Fish Oil +</Text>
                <Text>Immunity Boosters +</Text>
                <Text>Specialty Suppliments +</Text>
                <Text>Weight Management +</Text>
            </Container>
            <Container w='250px'border='1px solid black' p='2%'>
              <h3>Categories</h3>
                <Text>Vitamins & Nutritions</Text>
                <Text>Vitamins & Suppliments +</Text>
                <Text>Nutritional Drinks +</Text>
                <Text>Health Food & Drinks +</Text>
                <Text>Protine Suppliments +</Text>
                <Text>Omega & Fish Oil +</Text>
                <Text>Immunity Boosters +</Text>
                <Text>Specialty Suppliments +</Text>
                <Text>Weight Management +</Text>
            </Container>
            <Container w='250px'border='1px solid black' p='2%'>
              <h3>Categories</h3>
                <Text>Vitamins & Nutritions</Text>
                <Text>Vitamins & Suppliments +</Text>
                <Text>Nutritional Drinks +</Text>
                <Text>Health Food & Drinks +</Text>
                <Text>Protine Suppliments +</Text>
                <Text>Omega & Fish Oil +</Text>
                <Text>Immunity Boosters +</Text>
                <Text>Specialty Suppliments +</Text>
                <Text>Weight Management +</Text>
            </Container>
            <Container w='250px'border='1px solid black' p='2%'>
              <h3>Categories</h3>
                <Text>Vitamins & Nutritions</Text>
                <Text>Vitamins & Suppliments +</Text>
                <Text>Nutritional Drinks +</Text>
                <Text>Health Food & Drinks +</Text>
                <Text>Protine Suppliments +</Text>
                <Text>Omega & Fish Oil +</Text>
                <Text>Immunity Boosters +</Text>
                <Text>Specialty Suppliments +</Text>
                <Text>Weight Management +</Text>
            </Container>
            <Container w='250px'border='1px solid black' p='2%'>
              <h3>Categories</h3>
                <Text>Vitamins & Nutritions </Text>
                <Text>Vitamins & Suppliments +</Text>
                <Text>Nutritional Drinks +</Text>
                <Text>Health Food & Drinks +</Text>
                <Text>Protine Suppliments +</Text>
                <Text>Omega & Fish Oil +</Text>
                <Text>Immunity Boosters +</Text>
                <Text>Specialty Suppliments +</Text>
                <Text>Weight Management +</Text>
            </Container>
          </VStack>
        </Box>
      <Spacer />
        <Box p='4' bg='green.400' maxW='80%'>
          <Container>
            <VStack>
              <Breadcrumb align='left' w='100%'>
                <BreadcrumbItem>
                  <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href='#'>Diabetes</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href='#'>Devices</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Heading align='left' w='95%'>DIABETES MONITORING</Heading>
              <Container>
                <VStack>
                  <Container w='95%'>
                    <Flex >
                      <Box>
                        <h3>Top Deals</h3>
                      </Box>
                      <Spacer />
                      <Box>
                        <Button>See All</Button>
                      </Box>
                    </Flex>
                  </Container>
                  <Container >
                    <Grid templateColumns='repeat(5, 1fr)' gap={8} p='2%' bg='gray.50'>
                      {deals.map((deal)=>(<GridItem w='100%' p='2%' >
                          <Box border='1px solid black' boxShadow='dark-lg' p='6' rounded='md' borderRadius='2xl' height="400px">
                            <Center><Image src={deal.url} align="center" height="150px"/></Center>
                            <Center>
                            <VStack>
                              <Text align='center' justify='inherit'>{deal.name}</Text>
                              <Text align='center' justify='inherit'>{deal.detail}</Text>
                              <Flex>
                                <Box p='4' >
                                <Text align='center' justify='inherit'>MRP : ₹ {deal.price}</Text>
                                </Box>
                                <Box p='4' >
                                <Text align='center' justify='inherit'>₹ {deal.final_price}</Text>
                                </Box>
                                </Flex>
                              <Button align='center' justify='inherit'>Add To Cart</Button>
                            </VStack>
                            </Center>
                          </Box>
                      </GridItem>))}
                    </Grid>
                  </Container>
                </VStack>
              </Container>
              <Container mt="20">
                <VStack>
                  <Container w='970px'>
                    <Flex >
                      <Box>
                        <h3>Top Brands</h3>
                      </Box>
                      <Spacer />
                      <Box>
                        <Button>See All</Button>
                      </Box>
                    </Flex>
                  </Container>
                  <Container w='1020px'>
                    <Grid templateColumns='repeat(5, 1fr)' gap={25} p='2%' bg='gray.50'>
                      {categories.map((category)=>(<GridItem w='100%' p='2%' >
                          <Box border='1px solid black' boxShadow='dark-lg' p='6' rounded='md' borderRadius='2xl' height="220px">
                            <Center><Image src={category.url} align="center" height="150px"/></Center>
                            <Center>
                            <VStack>
                              <Text align='center' justify='inherit'>{category.name}</Text>
                            </VStack>
                            </Center>
                          </Box>
                      </GridItem>))}
                    </Grid>
                  </Container>
                </VStack>
              </Container>
              <Container  mt="20">
                <VStack>
                  <Container w='95%'>
                    <Flex>
                      <Box>
                        <h3>All Products</h3>
                      </Box>
                      <Spacer />
                      <Box>
                        <Flex>
                          <Box><Text>Sort By : </Text></Box>
                          <Spacer />
                          <Box>
                            <Select placeholder='Select option'>
                              <option value='option1'>Relevance</option>
                              <option value='option2'>Discount</option>
                              <option value='option3'>Customer Rating</option>
                              <option value='option3'>Price : Low to High</option>
                              <option value='option3'>Price : High to Low</option>
                            </Select>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                  </Container>
                  <Container >
                    <Grid templateColumns='repeat(5, 1fr)' gap={10} p='2%'>
                      {products.map((product)=>(<GridItem w='100%' p='2%'  >
                          <Box  border='1px solid black' boxShadow='dark-lg' p='6' rounded='md' borderRadius='2xl' height="400px" >
                            <Center><Image src={product.url} align="center" height="150px"/></Center>
                            <Center>
                            <VStack>
                              <Text align='center' justify='inherit'>{product.name}</Text>
                              
                              <Text align='center' justify='inherit'>{product.detail}</Text>

                              <Flex>
                                <Box p='4' >
                                <Text align='center' justify='inherit'>MRP : ₹ {product.price}</Text>
                                </Box>
                                <Box p='4' >
                                <Text align='center' justify='inherit'>₹ {product.final_price}</Text>
                                </Box>
                                </Flex>

                              <Button align='center' justify='inherit' >Add To Cart</Button>
                            </VStack>
                            </Center>
                          </Box>
                      </GridItem>))}
                    </Grid>
                  </Container>
                </VStack>
              </Container>
            </VStack>
          </Container>
        </Box>
    </Flex>
    </Container>
  )
};

export default Multivitamins;




