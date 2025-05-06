import express from 'express';
import { allUsers } from '../Controllers/userController.js';

const userRouter = express.Router();
userRouter.get('/users',allUsers);

export default userRouter;