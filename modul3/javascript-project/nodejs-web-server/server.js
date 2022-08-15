const http = require("http");

/**
 * 
 * @param {request} request merupakan object yang berisikan informasi terkait permintaan 
 * @param {response} response merupakan object yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    
    const { method } = request;
    
    if (method === 'GET') {
        response.end('<h1>Kamu sedang menggunakan method GET</h1>')
    }
    if (method === 'POST') {
        response.end('<h1>Kamu sedang menggunakan method POST</h1>')
    }
    if (method === 'PUT') {
        response.end('<h1>Kamu sedang menggunakan method PUT</h1>')
    }
    if (method === 'DELETE') {
        response.end('<h1>Kamu sedang menggunakan method DELETE</h1>')
    }

    response.end('<h1> Hallo HTTP Server!</h1>');
};

const server = http.createServer(requestListener);
const PORT = 5000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`Server berjalan pada http://${HOST}:${PORT}`);
})