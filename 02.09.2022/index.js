// import hello, {test1 } from './test.js';
// import * as test from './test.js'
// import hello from './test.js';
// import {test1} from './test.js'
import cordsInCanvas from './test.js'

// hello();
// console.log(test);

// Test.hello();

var canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.addEventListener('click', function(e) {
    cordsInCanvas(canvas, ctx, e)  
})