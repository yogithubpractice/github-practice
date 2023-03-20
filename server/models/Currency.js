import mongoose from 'mongoose'

const CurrencySchema = new mongoose.Schema({
    curren :{type:String,required:true,unique:true},
    buy :{type:Number,required:true},
    sell :{type:Number,required:true}
})

export const CurrencyModel =mongoose.model("currency",CurrencySchema)