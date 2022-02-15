import * as myLib from './mylib.js';

console.log('Starting small demo library');
myLib.MyLib.start();

// This is some code which will cause an error when executed in the WebWorker. 
document.body.appendChild(document.createElement('div'));