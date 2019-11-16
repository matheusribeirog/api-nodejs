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

app.listen(8080,()=>{
    console.log('Servidor rodando na porta 8080')
})
