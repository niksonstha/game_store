import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GameDetail() {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    // Fetch the game details based on the game ID
    // Replace this with your actual API call or data retrieval logic
    // Example API call: fetch(`https://api.example.com/games/${gameId}`)
    // then(response => response.json())
    // then(data => setGame(data))

    // Placeholder data for demonstration
    const placeholderGame = {
      id: gameId,
      name: "Example Game",
      description: "This is an example game.",
      releaseDate: "2023-06-15",
      // Add more properties as needed
    };

    setGame(placeholderGame);
  }, [gameId]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{game.name}</h1>
      <p>{game.description}</p>
      <p>Release Date: {game.releaseDate}</p>
      {/* Add more game details as needed */}
    </div>
  );
}

export default GameDetail;
