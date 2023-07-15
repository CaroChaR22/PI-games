require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const endpoint =  "https://api.rawg.io/api/games"

const { Videogame } = require("../db.js");

const gameById = async (id, source) => {
  const game =
    source === "api"
      ? (await axios.get(`${endpoint}/${id}?key=${API_KEY}`)).data
      : await Videogame.findByPk(id);
  return game;
};

module.exports = { gameById };
