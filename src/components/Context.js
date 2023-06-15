import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const AppContext = React.createContext();

const APP_URL1 = `https://api.rawg.io/api/games?page_size=40&page=1&key=d38ef63fb8aa4fefbf763f2baa2b9a7f`;
const APP_URL2 = `https://api.rawg.io/api/games?page_size=40&page=2&key=d38ef63fb8aa4fefbf763f2baa2b9a7f`;

const AppProvider = ({ children }) => {
  const [games1, setGames1] = useState([]);
  const [games2, setGames2] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getGames1 = async (url) => {
    try {
      const res = await axios.get(url);
      console.log(res);

      if (res) {
        setGames1(res.data.results);
      }
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGames1(APP_URL1);
  }, []);

  const getGames2 = async (url) => {
    try {
      const res = await axios.get(url);
      console.log(res);

      if (res) {
        setGames2(res.data.results);
      }
      console.log(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGames2(APP_URL2);
  }, []);

  return (
    <AppContext.Provider value={{ games1, games2, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
