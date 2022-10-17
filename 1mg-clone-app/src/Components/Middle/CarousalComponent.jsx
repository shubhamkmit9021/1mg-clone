import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import TabCarousal from "./TabCarousal";
import { lightOrange } from "../../Colors/Color";
import { Link } from "react-router-dom";

export default function CarousalComponent({ data, text }) {
  return (
    <Box display="flex" flexDirection="column" marginTop="10px">
      <Box width="90%" pl="15%" margin="10px">
        {text !== "" && (
          <Flex
            pl="5%"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>{text}</Box>
            <Link to="/multivitamins">
              {" "}
              <Button
                width="100px"
                color="white"
                bg={lightOrange}
                _hover={{ bg: "teal.400" }}
              >
                SEE ALL
              </Button>
            </Link>
          </Flex>
        )}
      </Box>
      <Box
        style={{ boxShadow: "0 0 7px 0 rgb(0 0 0 / 14%)", paddingTop: "-10px" }}
      >
        <Box width="90%" pl="15%">
          <TabCarousal data={data} />
        </Box>
      </Box>
    </Box>
  );
}
