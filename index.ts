import express from "express";
import { Request,Response } from "express";
import { connect } from "./connect";
import { Quiz } from "./schema";
import { valid_check } from "./valid";

const APP = express()
APP.use(express.json())
APP.use(express.urlencoded())

APP.get("/",async (req:Request,res:Response) =>
{
    let quiz_data = await Quiz.find()
    res.send(quiz_data)
})

APP.get("/index",(req:Request,res:Response) =>
{
    res.sendFile(__dirname+"/index.html")
})


APP.post("/add",valid_check, async (req:Request,res:Response) =>
{
    let quiz_data = await Quiz.create(req.body)
    res.send(quiz_data)
})

APP.listen(6050,() =>
{
    console.log("Server Is Running On http://localhost:6050");
    connect()
})
