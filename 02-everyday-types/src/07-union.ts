function printId(id: number | string | number[]) {
    // console.log('Your ID is ' + id)
    if (typeof id === 'string') {
        console.log(id.toUpperCase)
    } else {
        console.log(id)
    }
}

printId(101)
printId('202')

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log('hello, ' + x.join(' and '))
    } else {
        console.log('Welcome, ' + x)
    }
}

welcomePeople('a')
welcomePeople(['1', 'b'])

function getFirstThree(x: number[] | string) {
    return x.slice(0, 3)
}

console.log(getFirstThree('abcdefg'))
console.log(getFirstThree([2,3,4,5,65,76]))