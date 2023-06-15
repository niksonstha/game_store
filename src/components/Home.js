import React from "react";
import Navbar from "./Navbar";
import RowGames1 from "./RowGames1";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import RowGames2 from "./RowGames2";
import Pagination from "./Pagination";

function Home() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/rowgames1" element={<RowGames1 />}></Route>
        <Route path="/rowgames2" element={<RowGames2 />}></Route>
      </Routes>
      <Pagination />
    </Box>
  );
}

export default Home;
