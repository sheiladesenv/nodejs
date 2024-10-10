
//const server = http.createServer((req, res) =>{
//console.log("Solicitação realizada");
//});

//const server = http.createServer((req, res) =>{
   // console.log(req);
   // });
const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
//console.log(req.url, req.method);

//Testando o pacote Lodash
const numero = _.random(0,50);
console.log(numero);

//res.setHeader('Tipo-Conteudo', 'texto/html');

let caminho = './views/';

switch(req.url){
   case '/':  // a barra representa o index/home
      caminho += 'index.html'
      res.statusCode = 200;
      break;

   case '/sobre':
      caminho += 'sobre.html';
      res.statusCode = 200;
      break;

   case '/nossahistoria':
      res.statusCode = 301;
      res.setHeader('Location', '/sobre');
      break;

   default:
      caminho += '404.html';
      res.statusCode = 404;
      break;
}

fs.readFile(caminho, (err, data) =>{
   if(err){
       console.log(err);
       res.end();
   } else {
      res.end(data);
   }
});
//definindo o tipo de conteúdo do cabeçalho
//res.setHeader('Tipo-Conteudo', 'texto/simples');

//escrevendo a resposta
//res.write('<head><link rel="stylesheet" href="#"</head>');
//res.write('<p>Ola pessoal</p>');
//res.end();

});

server.listen(3000, 'localhost', () =>{
console.log("Ouvindo requisição na porta 3000");
});