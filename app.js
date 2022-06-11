const express = require('express');
const app = express();
//ejs
app.set('view engine', 'ejs');
app.listen(3000);

//routing with Express
app.get('/', (req, res) => {
    //res.sendFile('./views/index.ejs', { root: __dirname });
    //ejs rendering
    const blogs = [
        {title: 'Front End Web Development RoadMap', snippet: 'Detailed RoadMap for Front End Web Development'},
        {title: 'HTML - Introduction', snippet: 'HTML is the most basic building block of the web.'},
        {title: 'CSS - Introduction', snippet: 'CSS is a language used to style HTML.'},
    ];
    res.render('index', { title: 'Home', blogs: blogs });
});
app.get('/about', (req, res) => {
    //res.sendFile('./views/about.html', { root: __dirname });
    //ejs rendering
    res.render('about', { title: 'About'});
});
app.get('/blogs/create', (req, res) => {
    //res.sendFile('./views/services.html', { root: __dirname });
    //ejs rendering
    res.render('create', { title: 'Create'});
});
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});