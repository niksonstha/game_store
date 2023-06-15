import { Box, Grid, GridItem, Image, Text, Badge } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "./Context";

function GamesGrid({ startIndex, endIndex }) {
  const { games1, searchTerm } = useContext(AppContext);

  const filteredGames = games1.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedGames = filteredGames.slice(startIndex, endIndex);

  return (
    <Box color="white" ml="auto" mr="auto" width="70%">
      {filteredGames.length === 0 && (
        <Badge
          colorScheme="red"
          my="400px"
          p="30px"
          fontSize="20px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          No items found
        </Badge>
      )}

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        mt="130px"
      >
        {displayedGames.map((game) => (
          <GridItem
            key={game.id}
            w="60%"
            h="400px"
            p="4"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            overflow="hidden"
          >
            <Box height="70%">
              <Image
                src={game.background_image}
                alt={game.name}
                height="100%"
                width="100%"
                objectFit="cover"
              />
            </Box>
            <Box height="30%" textAlign="center" mt={8}>
              <Text fontSize="xl" fontWeight="bold" mb="2">
                {game.name}
              </Text>
              <Text fontSize="sm" color="gray.500">
                Released: {game.released}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default GamesGrid;
