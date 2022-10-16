import { Box, Flex, Image } from "@chakra-ui/react";

export const Sec1ImgList = ({ img, alt, id }) => {
  return (
    <Flex>
      <Box w="65%">
        <Image src={img} w="100%" h="200px" alt={alt} />
      </Box>
    </Flex>
  );
};
