import express from "express"
import cors from "cors"
import { registerUser } from "./controllers/user.contoller.js";

const app=express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
// import routes 
import userRouter from './routes/user.route.js'




// routes decleration 
app.use("/api/v1/users", userRouter)

export {app}