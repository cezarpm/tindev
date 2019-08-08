require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const routes = require('./routes');

const server = express();

mongoose.connect(process.env.CONNSTRING, {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333, () => console.log('Servidor rodando na porta 3333'));
