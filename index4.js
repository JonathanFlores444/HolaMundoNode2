const express = require('express');
const https = require('https');
const app = express();
const listaNombres = [];
var id = 1;

app.post('/hola',(req,res)=>{
    const id = req.query.id;
    const nombre = req.query.name;
    const edad = req.query.age;
    console.log(nombre);
    listaNombres.push({
        id:id,
        name:nombre,
        age:edad});
    res.send({
        message:'se almaceno un nombre',
    });
});

app.get('/hola',(req,res)=>{
    res.json(listaNombres);
});

app.put('/hola',(req,res)=>{
    const {idOb} = parseInt(req.query.id);
    const n = req.query;
    const p = listaNombres.find(f=>f.id===idOb);
    if(p){
        p.nombre=n.name;
        p.edad=n.age;
        res.json({message: 'Datos:', p});
    }
});

app.delete('/hola',(req,res)=>{
    const id=req.query;
    const p = listaNombres.find(l=>l.id===id);
    if(p){
        listaNombres.splice(p,1);
    }
    res.json({message: "datos eliminados"});
})

app.listen(3000, function(){
    console.log("se esta ejecutando el servidor");
});