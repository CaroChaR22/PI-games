require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");

const endpoint = "https://api.rawg.io/api/games?key=";

const getGamesURLs = (pages) => {
  const arrayPages = [];
  let actualPage = 1;
  
  while (actualPage <= pages) {
    let gamesURL = `${endpoint}${API_KEY}&page=${actualPage}`;
    arrayPages.push(gamesURL);
    actualPage++;
  }
  
  return arrayPages;
};

const gameData = async (url) => {
  const response = await axios(url);
  return response.data.results;
};

module.exports = {getGamesURLs, gameData};



