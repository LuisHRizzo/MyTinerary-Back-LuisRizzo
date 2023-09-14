import { Router } from 'express';
import citiesRouter from './citiesRouter.js';
import itinerariesRouter from '../router/itinerariesRouter.js';
import authRouter from './authRouter.js';
import countriesRouter from './countriesRouter.js';

const indexRouter= Router();

indexRouter.get('/', (require, response, next)=>{
    response.send('ACA ESTA API')
})
indexRouter.use('/cities', citiesRouter)
indexRouter.use('/itineraries', itinerariesRouter)
indexRouter.use('/auth', authRouter)
indexRouter.use('/countries', countriesRouter);




/* indexRouter.get('/', (require, response, next)=>{
    response.send('ACA ESTA API')
})
indexRouter.get('/', (require, response, next)=>{
    response.send('ACA ESTA API')
}) */


 
export default indexRouter;