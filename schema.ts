import mongoose from 'mongoose';

let data = new mongoose.Schema(
    {
        question:String,
        options:Array,
        correct:String
    }
)
 
export const Quiz= mongoose.model("Quiz Data",data)