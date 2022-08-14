"use strict";
function printCoords(pt) {
}
printCoords({
    x: 19,
    y: 30
});
function printIds(id) {
}
printIds(100);
printIds('hello');
function sanitizedInput(str) {
    return str.slice(0, 2);
}
let userInput = sanitizedInput('hello');
userInput = 'new Input';
