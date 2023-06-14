import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "./Context";

function RowGames() {
  const { games } = useContext(AppContext);

  return (
    <Box color="white" px="200px">
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="130px">
        {games.slice(0, 18).map((game) => (
          <GridItem
            key={game.id}
            w="100%"
            h="400px"
            border="2px solid red"
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            {game.name}
            <Image
              src={game.background_image}
              height="300px"
              width="400px"
              p={5}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default RowGames;
