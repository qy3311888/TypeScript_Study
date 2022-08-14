"use strict";
function printCoord(pt) {
    console.log('坐标x的值为:' + pt.x);
    console.log('坐标y的值为:' + pt.y);
}
printCoord({
    x: 3,
    y: 7
});
function printName(obj) {
    var _a;
    // if (obj.last !== undefined) {
    //     console.log(obj.last.toLowerCase)
    // }
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase);
}
printName({
    first: 'qy'
});
printName({
    first: 'qy',
    last: 'qiuyi'
});
