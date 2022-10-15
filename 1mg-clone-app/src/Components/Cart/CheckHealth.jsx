import { Box, Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import { useRef } from "react";
export default function CheckHealth() {
  const [thankYou, setThankYou] = useState(false);
  return (
    <Box
      padding="20px"
      textAlign="left"
      style={{
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      }}
    >
      <Box
        textAlign="left"
        fontSize="16px"
        display="flex"
        justifyContent="space-between"
      >
        Check the health of your vital organs
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none">
            <path fill="none" d="M0 24h24V0H0z"></path>
            <path
              d="M12 9.694c.37 0 .667.298.667.667v6.165a.667.667 0 11-1.333 0v-6.165c0-.369.298-.667.666-.667M12 6.807c.54 0 .98.434.98.968 0 .533-.44.97-.98.97a.977.977 0 01-.979-.97c0-.534.44-.968.98-.968"
              fill="#3B3B3B"
            ></path>
            <path
              d="M12 20.065c4.447 0 8.065-3.618 8.065-8.065 0-4.447-3.618-8.065-8.065-8.065-4.447 0-8.065 3.618-8.065 8.065 0 4.447 3.618 8.065 8.065 8.065m0-17.464c5.183 0 9.398 4.217 9.398 9.4 0 5.181-4.215 9.397-9.398 9.397S2.602 17.182 2.602 12c0-5.182 4.215-9.399 9.398-9.399"
              fill="#3B3B3B"
            ></path>
          </g>
        </svg>
      </Box>
      <Box style={{ display: "flex" }}>
        <Box display="flex" flexDirection="column" padding="6px">
          <Checkbox
            display="flex"
            flexDirection="space-between"
            colorScheme="orange"
            defaultChecked
            onChange={(e) => {
              setThankYou(!thankYou);
            }}
          ></Checkbox>
        </Box>
        {thankYou ? (
          <Box>
            <Box fontSize="14px">
              {" "}
              Book Good Health Silver Package for just ₹649
            </Box>
            <Box fontSize="12px">
              Get the tests done easily from your home. This package will help
              you in identifying potential disorders and deficiencies at an
              early stage.
            </Box>
            <Box color="green">Pay later on home sample collection</Box>
          </Box>
        ) : (
          <div>
            <Box fontSize="14px">Thank you for your interest</Box>
            <Box fontSize="12px">
              Our team will call you to book a slot as per your convenience.
            </Box>
            <Box color="green">Pay later on home sample collection</Box>
          </div>
        )}
      </Box>
    </Box>
  );
}
