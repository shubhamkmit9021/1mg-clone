import { Box, Flex, Image } from "@chakra-ui/react"

export const Sec1ImgList = ({ img, alt, id }) => {
  return (
    <Flex>
      <Box w="65%">
        <Image
          src={img}
          w="100%"
          h="200px"
          alt={alt}
        />
      </Box>
      {/* <Box w="35%">
        <Image
          src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/14eaa65a-0b73-4f77-9ed4-504f910c1d49.png"
          w="100%"
          h="200px"
          alt="sec1_img"
        />
      </Box> */}
    </Flex>
  );
};

{
  /* <div>
<img src={img} alt={alt} />
</div> */
}
