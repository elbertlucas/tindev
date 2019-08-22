const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const PORT = 3333;

mongoose.connect('mongodb+srv://elbert:Elbert1680A@cluster0-tsw0x.mongodb.net/tindev?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);

console.log('Exec..' + PORT);
server.listen(PORT);