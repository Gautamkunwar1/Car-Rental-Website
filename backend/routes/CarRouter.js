import express from 'express';
import { addCar } from '../Controllers/AddCarController.js';
import { allCars } from '../Controllers/GetCarController.js';
const carRouter = express.Router();
carRouter.post('/addCar',addCar);
carRouter.get('/getCar',allCars);
export default carRouter;
