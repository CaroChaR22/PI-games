const { createdGameController} = require('../controllers/post.controller');


// POST | /videogames
const createdGameHandler = async (req, res) => {
    const { name, description, platforms, background_image, released, rating } = req.body;
    try {
        const newGames = await createdGameController(name, description, platforms, background_image, released, rating);
        res.status(200).json(newGames)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = { createdGameHandler };