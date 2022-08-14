function printCoord(pt: {x: number, y: number}) {
    console.log('坐标x的值为:' + pt.x);
    console.log('坐标y的值为:' + pt.y);
}

printCoord({
    x: 3,
    y: 7
})

function printName(obj: {first: string, last?: string}) {
    // if (obj.last !== undefined) {
    //     console.log(obj.last.toLowerCase)
    // }
    console.log(obj.last?.toUpperCase)
}

printName({
    first: 'qy'
})

printName({
    first: 'qy',
    last: 'qiuyi'
})