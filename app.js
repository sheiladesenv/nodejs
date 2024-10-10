const express = require('express');

//express aplicativo - configurando as funções
const app = express();
app.set('view engine', 'ejs');


//acessando a rota
app.get('/', (requ, res) =>{
//res.send('<p> Página Inicial <p>');

//passagem de parâmetro para o body
const blogs = [
{titulo: 'Charmander', conteudo: 'A ponta do seu rabo está constantemente em chamas e se for apagada pode resultar em sua morte '},
{titulo: 'Squirtle', conteudo: 'Seu casco reduz a resistência contra a água, fazendo com que ele nade mais rápido.'},
{titulo: 'Bulbasaur', conteudo:'Ao evoluir o bulbo começa a desabrochar até se tornar uma grande flor na evolução final.'},
];

//passando parâmetro head. também exportando tudo que tem no "blogs"
res.render('index', { titulo: 'Home', blogs});
//res.sendFile('./views/index.html', {root: __dirname});
});

//nova rota
app.get('/sobre', (requ, res) =>{
    //res.send('<p> Sobre a empresa <p>');
    //res.sendFile('./views/sobre.html', {root: __dirname});
   //res.render('index');
   res.render('sobre', {titulo: 'Sobre'});
    });

//redirecionamento de página
app.get('/sobrenos', (requ, res) =>{
    res.redirect('sobre');
});

app.get('/blog/criar', (req, res) => {
res.render('criar', {titulo: 'Criar Novo Blog'});
});

app.use((req, res) =>{
    //res.status(400).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404');
});

app.listen(3001);