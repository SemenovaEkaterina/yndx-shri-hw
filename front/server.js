const express = require('express');
const os = require('os');
const path = require('path');
const config = require('./config');


const app = express();
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/templates'));
app.use('/static', express.static(__dirname + '/static'));
app.use('/scripts', express.static(__dirname + '/../../node_modules'));

const handle = (res, page) => {
    return res.render(`pages/${page}`, {});
};

app.get('/', (req, res) => {
    return handle(res, 'files');
});

app.get('/:page/', (req, res) => {
    const { page } = req.params;
    return handle(res, page);
});

app.listen(config.port);

console.log(`Server listen on localhost:${config.port}`);

