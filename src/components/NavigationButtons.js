import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function NavigationButtons({ prevPath, nextPath }) {
  return (
    <Box textAlign="center" pt={3}>
      <NavLink to={prevPath}>
        <Button mr={2}>Previous</Button>
      </NavLink>
      <NavLink to={nextPath}>
        <Button>Next</Button>
      </NavLink>
    </Box>
  );
}

export default NavigationButtons;