import express from 'express';
const countriesRouter = express.Router();

import countriesControllers from '../controllers/countriesController.js';
import passport from '../middlewares/passport.js';

countriesRouter.post('/',  countriesControllers.createAllCountries);
countriesRouter.get('/', countriesControllers.getAllCountries);

export default countriesRouter;

/* passport.authenticate( 'jwt', {session:false} ), */ // esto va despues de la barra del metodo post. lo saco para poder subir countrys
