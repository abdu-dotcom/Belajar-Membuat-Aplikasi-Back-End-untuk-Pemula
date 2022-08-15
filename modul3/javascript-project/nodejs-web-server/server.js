const http = require("http");

/**
 * 
 * @param {request} request merupakan object yang berisikan informasi terkait permintaan 
 * @param {response} response merupakan object yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    
    // mendapatkan request method
    const { method } = request;
    // mendapatkan request URL
    const { url } = request;

    if (url === '/') {
        if (method === 'GET') {
            response.end("Ini adalah homepage");
        } else {
            response.end(`Halaman tidak dapat diakses dengan ${method} request`)
        }
    } else if (url === '/about') { 
        
        if (method === "GET") {
            response.end("Halo! ini adalah halaman about")
        } else if (method === 'POST') {
            let body = [];

            // mendapatkan request body
            request.on('data', (chunk) => {
                body.push(chunk);
            })
        
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.end(`<h1>Hai, ${name}! ini adalah halaman about</h1>`);
            })  
        } else {
            response.end(`Halaman tidak dapat diakses dengan ${method} request`)
        }
    } else {
        response.end('Halaman tidak ditemukan!')
    }
};

const server = http.createServer(requestListener);
const PORT = 5000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`Server berjalan pada http://${HOST}:${PORT}`);
})