import GamesGrid from "./GamesGrid.js";
import NavigationButtons from "./NavigationButtons";

function RowGames2() {
  return (
    <>
      <GamesGrid startIndex={9} endIndex={18} />
      <NavigationButtons prevPath="/" nextPath="/rowgames3" />
    </>
  );
}

export default RowGames2;
