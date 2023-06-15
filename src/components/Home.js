import React from "react";
import Navbar from "./Navbar";
import RowGames1 from "./RowGames1";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import RowGames2 from "./RowGames2";
import RowGames3 from "./RowGames3";
import RowGames4 from "./RowGames4";

function Home() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<RowGames1 />}></Route>
        <Route path="/rowgames2" element={<RowGames2 />}></Route>
        <Route path="/rowgames3" element={<RowGames3 />}></Route>
        <Route path="/rowgames4" element={<RowGames4 />}></Route>
      </Routes>
    </Box>
  );
}

export default Home;
