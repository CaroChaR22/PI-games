const {gameById} = require('../controllers/id.controller');

const idGameHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "db" : "api";
  try {
    const gameId = await gameById(id, source);
    res.status(200).json(gameId);
  } catch (error) {
    res.status(401).json({error: error.message});
  }
};

module.exports = {idGameHandler}
