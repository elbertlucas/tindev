const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

mongoose.connect('mongodb+srv://elbert:dwp@ssw0rd@cluster0-tsw0x.mongodb.net/tindev?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);

console.log('Exec..');
server.listen(3000);