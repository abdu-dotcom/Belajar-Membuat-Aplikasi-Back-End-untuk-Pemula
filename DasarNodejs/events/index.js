// TODO 1
const { EventEmitter } = require('events');

const birthdayEventListener = ({ name }) => {
    console.log(`Happy birtday ${name}`);
}


// TODO 2
const myEmitter = new EventEmitter();

// TODO 3
myEmitter.on('birthdaty', birthdayEventListener);

// TODO 4
myEmitter.emit('birthdaty', { name: 'abduh' });