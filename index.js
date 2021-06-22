const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./src/routes/route');

// Server
const server = require('http').createServer(app);

app.use(routes);

server.listen(5000,  () => {
    console.log('\nIniciando...\nSua porta é: 5000\nhttp://localhost:5000/\n');
});

