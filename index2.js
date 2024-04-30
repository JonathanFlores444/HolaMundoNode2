//constante que llama al framework
const express = require('express')
//nombre del servicio
const app = express()
//servicio web de tipo Get
//http://localhost:3000/
app.get('/', function (req, res) {
  res.send('Hello World')
  console.log("Servicio ejecutandoce en el servidor");
})


// 2do web service get
//http://localhost:3000/a
app.get('/a',function(req,res){
    res.send('VOCAL')

})
//3er web service get
//http://localhost:3000/suma/5
app.get('/suma/:n1',(req,res)=>{
    const num1 = parseInt(req.params.n1)
    var tot = 11 + num1
    const json={
        resultado:tot
    };
    res.send(json);
})

//4to web service get
//http://localhost:3000/suma2/3
app.get('/suma2/:n1',(req,res)=>{
    const num1 = parseInt(req.params.n1)
    var tot = 11 + num1
    res.send(tot+"")
})

//5to web service
//http://localhost:3000/suma3/2/2
app.get('/suma3/:n1/:n2',(req,res)=>{
    const num1 = parseInt(req.params.n1);
    const num2 = parseInt(req.params.n2);
    var suma = num1 + num2;
    res.send(suma+"");
})

//6to web service json
//http://localhost:3000/12/12
app.get('/resta/:n1/:n2',(req,res)=>{
    const num1 = parseInt(req.params.n1);
    const num2 = parseInt(req.params.n2);
    var resta = num1 - num2;
    const texto={resultado:resta};
    res.jsonp(texto);
})
//7mo web service (se captura de la url pero el parametro no esta definido >:O)
//http://localhost:3000/nombre?hola
app.get('/nombre',(req,res)=>{
    //me ayuda a obtener informacion no definida
    const datoObtener = req.query.name;
    res.send('ALOHA!!!!'+" "+datoObtener);
})
//8vo web service (se captura de la url pero el parametro no esta definido (suma))
//http://localhost:3000/suma4?n1=12?n2=12
app.get('/suma4',(req,res)=>{
    //me ayuda a obtener informacion no definida
    const num1 = parseInt(req.query.n1);
    const num2 = parseInt(req.query.n2);
    var sumatot = num1 + num2;
    res.send(sumatot+"");
})
//servicio que escuche por el puerto 3000
app.listen(3000)