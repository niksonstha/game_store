import GamesGrid from "./GamesGrid.js";
import NavigationButtons from "./NavigationButtons";

function RowGames1() {
  return (
    <>
      <GamesGrid startIndex={0} endIndex={9} />
      <NavigationButtons prevPath="/" nextPath="/rowgames2" />
    </>
  );
}

export default RowGames1;
