import { NextFunction,Request,Response } from "express";


export const valid_check = (req:Request,res:Response,next:NextFunction) =>
{
    let {question,options,correct} = req.body

    if(!question || !options || !correct)
    {
        res.status(400).send("Invalid Data...")
    }
    else
    {
        next()
    }    
}    
