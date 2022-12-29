/* eslint-disable no-var */
/* eslint-disable no-use-before-define */
var http = require('http');

const manager = {
    name: 'bos',
    age: 37
};

const empl1 = {
    name: 'John Popescu',
    age: 22
};

const empl2 = {
    name: 'Doe Vasile',
    age: 34
};

const textHeader = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' };
const jsonHeader = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' };

http.createServer((req, res) => {

    console.log('called page!');
    const url = req.url;
    switch (url) {
        case '/managers':
            res.writeHead(200, jsonHeader);
            res.end(JSON.stringify(manager));
            console.log(manager);
            break;
        case '/employees':
            writeHead(res);
            res.end(JSON.stringify([empl1, empl2]));
            break;
        default:
            res.writeHead(404, textHeader);
            res.end('Page not found!');
    }
    res.writeHead(200, textHeader);
}).listen(8080);


/**
 * Writes the response
 * @param {*} res
 */
function writeHead(res) {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.writeHead(200, jsonHeader);
}
