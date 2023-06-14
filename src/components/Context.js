import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const AppContext = React.createContext();

const APP_URL = `https://api.rawg.io/api/games?page_size=50&page=1&key=d38ef63fb8aa4fefbf763f2baa2b9a7f`;

const AppProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const getGames = async (url) => {
    try {
      const res = await axios.get(url);
      console.log(res);

      if (res) {
        setGames(res.data.results);
      }
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGames(APP_URL);
  }, []);

  return (
    <AppContext.Provider value={{ games }}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
