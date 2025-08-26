import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db';

const app = express();
dotenv.config();
connectDB();

app.get('/', (req: Request, res: Response) => {
    console.log("Server Runninng...")
    res.send({ status: true, message: "Server Working.." })
})

const PORT: number = Number(process.env.PORT)

app.listen(PORT, () => {
    console.log("Server Listing...")
})

