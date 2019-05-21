const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require('cors');


//Iniciando um App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true}
);

//Com Essa dependencia requireDir podemos só apontar um diretorio 
//models e ele ja pega todos os models automaticamente
requireDir("./src/models");

//Rotas
app.use("/api", require("./src/routes"));


app.listen(3001);