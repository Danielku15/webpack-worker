import * as myLib from './mylib.js';

// start a new worker using the worker entry point
myLib.MyLib.start(new URL('worker.js', document.location).href);