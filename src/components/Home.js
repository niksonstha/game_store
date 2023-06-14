import React from "react";
import Navbar from "./Navbar";
import RowGames from "./RowGames";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <Box height="-moz-max-content">
      <Navbar />
      <RowGames />
    </Box>
  );
}

export default Home;
