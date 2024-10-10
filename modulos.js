//importando dados de pessoas
const executePessoas = require('./pessoas');

//console.log(executePessoas.pessoas, executePessoas.idade);

//desestruturação
const {pessoas, idade} = require ('./pessoas');
console.log(pessoas, idade);

//descobrindo informações sobre o sistema operacional
const sistemaOperacional = require('os');
//console.log(sistemaOperacional);
console.log(sistemaOperacional.platform(), sistemaOperacional.homedir());