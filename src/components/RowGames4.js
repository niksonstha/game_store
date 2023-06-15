import React from "react";
import GamesGrid from "./GamesGrid.js";
import NavigationButtons from "./NavigationButtons.js";

function RowGames4() {
  return (
    <>
      <GamesGrid startIndex={27} endIndex={40} />
      <NavigationButtons prevPath="/rowgames3" nextPath="/" />
    </>
  );
}

export default RowGames4;
