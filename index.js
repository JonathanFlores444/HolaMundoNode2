//Uso del Protocolo HTTP
var protocol = require('http');
//Creacion del servidor con protocolo http
var server = protocol.createServer();
function mensaje(petic,resp){
    //Edita la cabecera del mensaje, cuando el mensaje se satisfactorio
    //envia una respuesta en archivo plano
    resp.writeHead(200,{'content-type':'text/plane'});
    //Escribe el mensaje
    resp.write("Hola mundo :D");
    //Finaliza el mensaje
    resp.end
}
// cuando tenga un request por parte de un cliente
// envia a presentar la funcion mensaje
server.on('request',mensaje);
//Cada vez que se escuche una peticion por úrto 300 
//y muestra un mensaje en consola
server.listen(3000, function(){
    console.log("Se esta ejecutando en el servidor")
});