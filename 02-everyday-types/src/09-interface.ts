interface Points {
    x: number
    y: number
}

function printCoordss(pt: Points) {

}

printCoordss({
    x: 100,
    y: 200
})

// 扩展接口
interface Animal {
    name: string
}

interface Bear extends Animal {
    food: boolean
}

const bear: Bear = {
    name: 'qy',
    food: true
}

console.log(bear.name)
console.log(bear.food)


type Animals = {
    name: string
}

type Bears = Animals & {
    food: boolean
}

const bears: Bears = {
    name: 'zxy',
    food: true
}

console.log(bears.name)
console.log(bears.food)

// 向现有的接口中添加字段
interface MyWindow {
    count: number
}

interface MyWindow {
    tittle: string
}

const myWindow: MyWindow = {
    tittle: 'hello ts',
    count: 100
}

// 类型创建后无法通过同名类型拓展
type MyWindows = {
    title: string
}
