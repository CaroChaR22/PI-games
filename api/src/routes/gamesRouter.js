const { Router } = require("express");
//handlers
const { idGameHandler } = require("../handlers/id.handler");
const { createdGameHandler} = require("../handlers/post.games");
const { allGamesHandler  } = require("../handlers/all.handler");
// const { nameGameHandler } = require("../handlers/name.handler");



const router = Router();

// rutas de los videojuegos
// router.get("/", nameGameHandler);
router.get("/:id", idGameHandler);
router.post("/", createdGameHandler);
router.get("/", allGamesHandler);


module.exports = router;
