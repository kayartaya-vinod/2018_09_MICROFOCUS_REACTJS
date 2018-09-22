console.log('Message from ex02.js');

import { sayHello, sayHi as greet } from './ex03';

sayHello('Vinod');
greet('Kumar');

import trainerInfo from './ex03'; // imports the default exported member

console.log('trainer', trainerInfo);
