const express = require('express');
const cors = require('cors')

const app = express();

const userRouter = require('@routers/routerUser');

// Configurando o JSON para as respostas
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurando o CORS
app.use(cors());


// Rotas
app.use('/', userRouter);

module.exports = app;
