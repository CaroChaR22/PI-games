const { Router } = require('express');
// Importar todos los routers;
const router = Router();
// Ejemplo: const authRouter = require('./auth.js');
const gamesRouter = require('./gamesRouter');
// const generRouter = require('./generRouter');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', gamesRouter );
// router.use('/genres', generRouter);



module.exports = router;
