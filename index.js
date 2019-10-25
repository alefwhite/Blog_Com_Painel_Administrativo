const express = require('express');
const app = express();
const port = 3333;
const bodyParser = require('body-parser');
const connection = require('./database/database');

// view engie
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados feita com sucesso..");
    })
    .catch((error) => {
        console.error(error);
    });

// Routes
app.get("/", (req, res) => {
    //res.send("Bem vindo ao blog");
    res.render('index');
});  

// Porta 
app.listen(port, function(){
    console.log(`Servidor rodando na porta: ${port}.`);
});