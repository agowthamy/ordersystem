const http = require('http');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const port =  8080;
// const server = http.createServer(app);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors);

var insert = require('./api/saveOrderDetails');
app.use('/insert', insert)

app.listen(port);
console.log("server listen");


