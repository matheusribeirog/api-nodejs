const express=require("express");
const mongoose=require("mongoose");

const routes=require("./routes");
const app=express();

mongoose.connect("URLdeconexao",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})



app.use(express.json())

app.use(routes)

app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})