const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send({hi:'Nuevo'});
});
app.post('/hola',(req,res)=>{
    res.send(req);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);