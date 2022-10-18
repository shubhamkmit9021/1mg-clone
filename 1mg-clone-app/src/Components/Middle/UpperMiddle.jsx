import { Box, Flex, Image, Show } from "@chakra-ui/react";
import SlidingBoxCopy from "../GetData/SlidingBoxCopy";

export const UpperMiddle = () => {
  return (
    <Flex _hover={{ cursor: "pointer" }}>
      <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "65%" }} mt="-25px">
        <SlidingBoxCopy />
      </Box>
      <Show above="md">
        <Box w="35%">
          <Image
            src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/14eaa65a-0b73-4f77-9ed4-504f910c1d49.png"
            w="100%"
            h="190px"
            alt="sec1_img"
          />
        </Box>
      </Show>
    </Flex>
  );
};

// import { Box, Flex, Image } from "@chakra-ui/react";

// export const UpperMiddle = () => {
//   return (
//     <Flex>
//       <Box w="65%">
//         <Image
//           src="https://onemg.gumlet.io/de43ae64-d8d7-485b-ab91-0af519ed941d_1663831589.png?w=899&h=200&format=auto"
//           w="100%"
//           h="200px"
//           alt="sec1_img1"
//         />
//         {/* <Carousel/> */}
//       </Box>
//       <Box w="35%">
//         <Image
//           src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/14eaa65a-0b73-4f77-9ed4-504f910c1d49.png"
//           w="100%"
//           h="200px"
//           alt="sec1_img"
//         />
//       </Box>
//     </Flex>
//   );
// };
