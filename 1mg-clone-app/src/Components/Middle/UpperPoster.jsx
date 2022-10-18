import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const UpperPoster = () => {
  return (
    <Box mt='-10px' bg='#ddd' >
        <Box py='8'>
            <Image  _hover={{ cursor:'pointer' }} src='https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png' w='90%' h='120px' m='auto' alt='sec2_poster' />
        </Box>
        <Box w='90%' m='auto' >
            <Text fontSize='18px' color='#212121' pb='3'>Shop by Health Concerns</Text>
        </Box>
    </Box>
  )
}

export default UpperPoster
