require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const endpoint = "https://api.rawg.io/api/games?key=";

const { Videogame } = require("../db.js");
const { speciffic } = require("../utils");

const allGames = async (name) => {
  const allGames = Videogame.findAll({});
  const apiGames = (await axios.get(`${endpoint}${API_KEY}&search=${name}`))
    .data;
  const apiMap = speciffic(apiGames);
  return [...allGames, ...apiMap];
};

module.exports = { allGames };

// const gameByName = async(name) =>{
//     const apiGames = (await axios.get(`${endpoint}${API_KEY}&search=${name}`)).data
//     const detailsInfo = speciffic(apiGames);
//     const allApiInfo = detailsInfo.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()));
//     const dbGames = await Videogame.findAll({ where: { name: name } });
//     console.log(name)
//     return [...allApiInfo, ...dbGames];

// };
