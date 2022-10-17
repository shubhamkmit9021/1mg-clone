
import { Box, Flex, Image, Show } from "@chakra-ui/react"
import SlidingBox from "../GetData/SlidingBox"

export const UpperMiddle = () => {
    return (
        <Flex _hover={{cursor : 'pointer'}}>
            <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '65%'}} mt='-25px'>
                <SlidingBox/>
            </Box>
            <Show above='md'>
            <Box w='35%'  >
                <Image src='https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/14eaa65a-0b73-4f77-9ed4-504f910c1d49.png' w='100%' h='190px' alt='sec1_img' />
            </Box>
            </Show>
        </Flex>
    )
}

