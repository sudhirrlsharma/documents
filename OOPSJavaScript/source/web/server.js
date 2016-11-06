'use strict'

var option = {
   port: 8080,
   host: 'localhost'
};

var http = require('http');
var Router = require('./router')

  var httpServer  = http.createServer(function(req, res){
    var headers = req.headers;
    var userAgent = headers['user-agent'];
    processRequest(req, res);
  });
  httpServer.listen(option.port, option.host, function(){
    console.log('Server is up sucessfully at'+  option.port );    
  });



  function processRequest(req, res) {
    var body=[];
    var bodyAsString='';
    req.on('data', function(chunk){
      body.push(chunk);
    });
    req.on('end', function(){
      bodyAsString = Buffer.concat(body).toString();
    });

    req.on('error', function(err){
      console.error(error.stack);
    });

    console.log('finding the router');
    var routerInstacne = new Router(req,res)
    console.log(routerInstacne.getController());
  }
