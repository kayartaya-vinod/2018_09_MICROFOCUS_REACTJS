import { sleep } from './utils';

console.log('start of ex08.js');

setTimeout(() => { 
    console.log('Executed after a delay of 3s');
}, 3000);

setTimeout(() => { 
    console.log('Executed after a delay of 1s');
}, 1000);

sleep(10000);

console.log('end of ex08.js');