function greet(name: string) {
    console.log('hello,' + name.toUpperCase + '!')
}

greet('qy')

// 返回类型
function getNumber(): number {
    return 26
}

// 匿名函数
const names = ['qy', 'zxy']
names.forEach(function(s) {
    console.log(s.toUpperCase)
})

names.forEach((s) => {
    console.log(s.toUpperCase)
})