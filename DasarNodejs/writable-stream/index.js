const fs = require('fs');
const path = require('path');

const pathOutput = path.resolve(__dirname, "output.txt");
const writableStream = fs.createWriteStream(pathOutput);

writableStream.write('Ini merupakan baris pertama!\n');
writableStream.write('Ini merupakan baris kedua!\n');
writableStream.write('Ini merupakan baris ketiga!\n');
writableStream.end();