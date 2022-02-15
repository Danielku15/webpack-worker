import * as alphaTab from '../node_modules/@coderline/alphatab/dist/alphaTab.mjs';

const wrapper = document.getElementById('alphaTab');
const api = new alphaTab.AlphaTabApi(wrapper, {
    file: 'https://www.alphatab.net/files/canon.gp',
    logLevel: 'debug'
});