import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import {CurrencyModel} from './models/Currency.js'

const app=express()

app.use(express.json())
app.use(cors())



mongoose.connect("mongodb+srv://yonas:yonas2015@displaycurrency.yqvb4gb.mongodb.net/displaycurrency?retryWrites=true&w=majority")
app.listen(3000,()=> console.log("Server Started"))


app.post("/currency", async(req,res)=>{
    const { curren, buy,sell } = req.body
    const curr= await CurrencyModel.findOne({ curren })
    
    if(curr){
        return res.json({message:"The Currency already exists!"})
    }

    const newCurrency = new CurrencyModel({currency,buy,sell})
    await newCurrency.save()
    
    res.json({message:"New currency added successfully!"})
})
