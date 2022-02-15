import * as alphaTab from '@coderline/alphatab';
console.info('Running in Browser Thread, starting')
const wrapper = document.getElementById('alphaTab');
const api = new alphaTab.AlphaTabApi(wrapper, {
    file: 'https://www.alphatab.net/files/canon.gp',
    logLevel: 'debug',
    core: {
        fontDirectory: '/node_modules/@coderline/alphatab/dist/font/'
    }
});