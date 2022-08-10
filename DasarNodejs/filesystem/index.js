const path = require('path');
const fs = require('fs');

a
const pathNotes = path.resolve(__dirname, "notes.txt");


const data = fs.readFileSync(pathNotes, 'utf-8');
console.log(data);