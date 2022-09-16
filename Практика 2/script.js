import * as Drag from './drag.js'

var ball = document.querySelectorAll('#ball');

for (let i of ball) {
    Drag.drag(i);
}
