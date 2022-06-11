const http = require('http');

//lodash
const _ = require('lodash');

const server = http.createServer((req, res) => {
    //lodash
    const num = _.random(0, 20);
    console.log(num);

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    //backend routing
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/team':
            path += 'team.html';
            break;
        case '/services':
            path += 'services.html';
            break;
        default:
            path += '404.html';
            break;
    }

    //fs
    const fs = require('fs');
    //send html file via fs

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    });
});

//port lisening
server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
});