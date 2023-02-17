//MkQXQYDUdrgkBNqa

const express = require('express')
const mongoose = require('mongoose')
const router = require('./input-routes')
const cors = require('cors');
const app = express()


app.use(cors());
app.options('*', cors());

app.use(express.json())

mongoose.set('strictQuery', true);

app.use('/inputs',router)



mongoose.connect("mongodb+srv://admin:MkQXQYDUdrgkBNqa@cluster0.4xjj9qr.mongodb.net/Input?retryWrites=true&w=majority")
.then(()=>console.log("connected to DB"))
.then(()=>{
    app.listen(8000)
}).catch(err=>{
    console.log(err)
})