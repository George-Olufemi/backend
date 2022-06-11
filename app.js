const express = require('express');
const app = express();
app.listen(3000);

//routing with Express
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});
app.get('/services', (req, res) => {
    res.sendFile('./views/services.html', { root: __dirname });
});
app.get('/team', (req, res) => {
    res.sendFile('./views/team.html', { root: __dirname });
});
app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname });
});