import express from "express";
import { deleteUser,deleteCar } from "../Controllers/AdminController.js";
const AdminRouter = express.Router();
AdminRouter.delete("/deleteUser/:id",deleteUser);
AdminRouter.delete("/deleteCar/:id",deleteCar);

export default AdminRouter;