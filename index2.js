//constante que llama al framework
const express = require('express')
//nombre del servicio
const app = express()
//servicio web de tipo Get
app.get('/', function (req, res) {
  res.send('Hello World')
  console.log("Servicio ejecutandoce en el servidor");
})


// 2do web service get
app.get('/a',function(req,res){
    res.send('VOCAL')

})


//servicio que escuche por el puerto 3000
app.listen(3000)