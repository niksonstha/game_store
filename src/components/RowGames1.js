import { Box, Grid, GridItem, Image, Text, Badge } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "./Context";

function RowGames1() {
  const { games1, searchTerm } = useContext(AppContext);

  const filteredGames1 = games1
    .slice(0, 9)
    .filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <Box color="white" px="200px">
      {filteredGames1.length === 0 && (
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
        {filteredGames1.map((game) => (
          <GridItem
            key={game.id}
            w="100%"
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
            <Box height="30%" textAlign="center">
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

export default RowGames1;
