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
//http://localhost:3000/suma4?n1=12&n2=12
app.get('/suma4',(req,res)=>{
    //me ayuda a obtener informacion no definida
    const num1 = parseInt(req.query.n1);
    const num2 = parseInt(req.query.n2);
    var sumatot = num1 + num2;
    res.send(sumatot+"");
})
// 9no web service resta sin parametros y json
app.get('/resta2',(req,res)=>{
    const num1 = parseInt(req.query.n1);
    const num2 = parseInt(req.query.n2);
    var result=0;
    if(n1>n2){
        result=num1-num2;
    }else{
        result=num2-num1;
    }
    const resultado={total:result};
    res.json(resultado);
})

//10 conejos
//http:3000/conejos?p=3&np=5&nc=3&tm=20
app.get('/conejos',(req,res)=>{
    var pobActual=0;
    var pobMuere=0;
    var pobTotal=0;
    var parejas=0;

    //periodo
    const periodo = parseInt(req.query.p)
    //numero de parejas
    const numParejas = parseInt(req.query.np)
    //numero de crias
    const numCrias = parseInt(req.query.nc)
    //tasa de mortalidad
    const tasMortal = parseInt(req.query.tm)

    for(let i=0; i< periodo; i++){
        if(i==0){
            pobActual = numParejas * 2;
            pobMuere = pobActual * tasMortal/100;
            pobTotal = pobActual - pobMuere;
        }else{
            numCrias = numParejas*numCrias
            pobActual += numCrias;
            pobMuere = pobActual * tasMortal/100;
            pobTotal = pobActual - pobMuere; 
            parejas = pobTotal/2;
        }
        const resultados={
            pobAnual:pobActual,
            pobMorir:pobMuere,
            pobRestante:pobTotal,
            NParejas:parejas,
            Ncrias:numCrias
        };
        res.json(resultados);
        
    }


})

//servicio que escuche por el puerto 3000
app.listen(3000)