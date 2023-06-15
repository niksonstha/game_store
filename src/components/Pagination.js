import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function Pagination() {
  return (
    <Box textAlign="center" pt={3}>
      <NavLink to="/rowgames1">
        <Button mr={2}>Previous</Button>
      </NavLink>
      <NavLink to="/rowgames2">
        <Button>Next</Button>
      </NavLink>
    </Box>
  );
}

export default Pagination;
