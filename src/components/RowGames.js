import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "./Context";

function RowGames() {
  const { games } = useContext(AppContext);
  return (
    <Box color="white" h="100vh" px="200px">
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {games.map((game) => (
          <GridItem
            key={game.id}
            w="100%"
            h="100px"
            bg="pink.500"
            textAlign="center"
          >
            {game.name}
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default RowGames;
