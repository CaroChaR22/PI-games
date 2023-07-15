const { getGamesURLs, gameData } = require("../controllers/all.controller");

const speciffic = async () => {
  const gameURLs = getGamesURLs(6);
  const apiPromiseUrl = await Promise.all(gameURLs.map(gameData));
  const apiGamesUrl = apiPromiseUrl.flat();

  const apiGamesInfo = apiGamesUrl.map((game) => ({
    id: game.id,
    name: game.name,
    released: game.released,
    rating: game.rating,
    genres: game.genres.map((item) => item.name),
    platforms: game.platforms.map((item) => item.platform.name),
    background_image: game.background_image
  }));

  return apiGamesInfo;
};

module.exports = { speciffic };
