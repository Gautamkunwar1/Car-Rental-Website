import dotenv from 'dotenv';
import express from 'express';
import connectDb from './db.js';
import userRouter from '../routes/AuthRouter.js';
import allUserRouter from "../routes/UserRoutes.js"
import cors from 'cors'
import carRouter from '../routes/CarRouter.js';
import msgRouter from '../routes/MsgRouter.js';
import carRouter from '../routes/CarRouter.js';
import AdminRouter from '../routes/AdminRouter.js';

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
const port = process.env.PORT || 5001;

app.use("/api/auth", userRouter)
app.use("/api/allusers",allUserRouter);
app.use("/api/car",carRouter)
app.use("/api/car",carRouter);
app.use("/api/msg",msgRouter);
app.use("/api/admin",AdminRouter);

app.listen(port, async () => {
    try {
        console.log(`Server started at ${port}`)
        await connectDb();
    } catch (error) {
        console.error(`Error :${error.message}`)
    }
})
