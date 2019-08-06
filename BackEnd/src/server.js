const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://cezar:123@ominestack-5bfkx.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333, () => console.log('Servidor rodando na porta 3333'));
