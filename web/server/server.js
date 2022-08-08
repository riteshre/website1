const express = require('express');
const mongoose = require('mongoose');
const product = require('./models/productModel')

const app = express();


mongoose.connect("mongodb://localhost:27017/practi",
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended:false}))

app.get('/api', async(req,res)=>{
    try{
        const pro = await product.find()
        res.json(pro);

    }catch(err){
        res.send('Error'+ err)
    }

})

app.get('/api/:id', async(req,res)=>{
    try{
        const particular = await product.findById(req.params.id)
        res.json(particular)
     }catch(err){
        console.log("error"+err)
     }
})

app.listen(5000,() => {
    console.log("Backend server is running! in 5000");
  });
