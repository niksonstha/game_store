import React from "react";
import Navbar from "./Navbar";
import RowGames from "./RowGames";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <Box>
      <Navbar />
      <RowGames />
    </Box>
  );
}

export default Home;
