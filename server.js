const express = require("express");
const path = require('path');
const server = express();
server.use(express.static(path.join(__dirname, '../Maze')));
server.listen(8001);