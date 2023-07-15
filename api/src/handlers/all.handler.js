const { speciffic } = require("../utils");
const { Videogame } = require("../db.js");

const allGamesHandler = async (req, res) => {
  const dbInfo = await Videogame.findAll({});
  try {
    const apiInfo = await speciffic();
    const all = [...apiInfo, ...dbInfo];
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { allGamesHandler };
