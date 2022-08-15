const http = require("http");

/**
 * 
 * @param {request} request merupakan object yang berisikan informasi terkait permintaan 
 * @param {response} response merupakan object yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    response.statusCode = 200;
    
    // mendapatkan request method
    const { method } = request;
    // mendapatkan request URL
    const { url } = request;

    if (url === '/') {
        if (method === 'GET') {

            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {

            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }))
        }
    } else if (url === '/about') { 
        
        if (method === "GET") {

            response.statusCode = 200;
            response.end(JSON.stringify({
                message: `Halo! ini adalah halaman about`,
            }))
        } else if (method === 'POST') {
            let body = [];

            // mendapatkan request body
            request.on('data', (chunk) => {
                body.push(chunk);
            })
        
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);

                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Hai, ${name}! ini adalah halaman about`
                }));
            })  
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }))
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }))
    }
};

const server = http.createServer(requestListener);
const PORT = 5000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`Server berjalan pada http://${HOST}:${PORT}`);
})