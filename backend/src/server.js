const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const server = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-jqf8u.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);
server.listen(3333);
