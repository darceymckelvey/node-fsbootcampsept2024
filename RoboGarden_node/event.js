const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.addListener('cricket', () => {
    console.log('Cricket match is happening please. Join here.');
});

myEmitter.on('cricket', () => {
    console.log('Cricket match is happening. Please register your team.');
});

myEmitter.emit('cricket');





myEmitter.on('error', (args) => {
    console.log(args.message);
})



myEmitter.emit('error', {message: 'your code is wrong', line: '20'});