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
        response.end('<h1>Hello!</h1>')
    }
    if (method === 'POST') {
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        })
    
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            response.end(`<h1>Hai, ${name}!</h1>`);
        })  
    }
};

const server = http.createServer(requestListener);
const PORT = 5000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`Server berjalan pada http://${HOST}:${PORT}`);
})