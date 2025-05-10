import express from "express";
import { deleteUser,deleteCar } from "../Controllers/AdminController.js";
const AdminRouter = express.Router();
AdminRouter.delete("/deleteUser",deleteUser);
AdminRouter.delete("/deleteCar",deleteCar);

export default AdminRouter;