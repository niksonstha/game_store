import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function NavigationButtons({ prevPath, nextPath }) {
  return (
    <Box textAlign="center" pt={5} pb="100px">
      <NavLink to={prevPath}>
        <Button mr={2} colorScheme="pink" width="100px" textColor="black">
          Previous
        </Button>
      </NavLink>
      <NavLink to={nextPath}>
        <Button colorScheme="pink" width="100px" textColor="black">
          Next
        </Button>
      </NavLink>
    </Box>
  );
}

export default NavigationButtons;
