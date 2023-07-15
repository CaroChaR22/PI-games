const { gameByName } = require("../controllers/name.controller");

const nameGameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const byName = await allGames(name);
      res.satus(200).json(byName);
    }
  } catch (error) {
    res.status(500).json("problems");
  }
//   console.log("estamos en el name handler")
};

module.exports = { nameGameHandler };
