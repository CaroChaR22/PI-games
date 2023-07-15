const {Videogame} = require('../db')

// POST | /videogames
const createdGameController = async (
    name,
    description,
    platforms,
    background_image,
    released,
    rating
  ) => {
    return (newGame = await Videogame.create({
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
    }));
  };
  // -  Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).


  module.exports = {createdGameController};