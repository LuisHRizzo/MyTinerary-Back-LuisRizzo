import { Router } from 'express';
import citiesRouter from './citiesRouter.js';
import itinerariesRouter from '../router/itinerariesRouter.js';
const indexRouter= Router();

indexRouter.get('/', (require, response, next)=>{
    response.send('ACA ESTA API')
})
indexRouter.use('/cities', citiesRouter)
indexRouter.use('/itineraries', itinerariesRouter)


/* indexRouter.get('/', (require, response, next)=>{
    response.send('ACA ESTA API')
})
indexRouter.get('/', (require, response, next)=>{
    response.send('ACA ESTA API')
}) */


 
export default indexRouter;