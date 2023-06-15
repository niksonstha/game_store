import React from "react";
import Navbar from "./Navbar";
import RowGames from "./RowGames";
import { Box } from "@chakra-ui/react";
import Pagination from "./Pagination";

function Home() {
  return (
    <Box>
      <Navbar />
      <RowGames />
      <Pagination />
    </Box>
  );
}

export default Home;
