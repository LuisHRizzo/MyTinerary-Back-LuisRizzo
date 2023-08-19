import { Router } from 'express';
import citiesController from '../controllers/citiesController.js';

const indexRouter= Router();
const {getAllCities} = citiesController;

indexRouter.get('/', (require, response, next)=>{
    response.send('ACA ESTA API')
})
indexRouter.get('/cities', getAllCities)


/* indexRouter.get('/', (require, response, next)=>{
    response.send('ACA ESTA API')
})
indexRouter.get('/', (require, response, next)=>{
    response.send('ACA ESTA API')
}) */


 
export default indexRouter;