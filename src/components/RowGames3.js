import GamesGrid from "./GamesGrid.js";
import NavigationButtons from "./NavigationButtons";

function RowGames3() {
  return (
    <>
      <GamesGrid startIndex={18} endIndex={27} />
      <NavigationButtons prevPath="/rowgames2" nextPath="/rowgames4" />
    </>
  );
}

export default RowGames3;
