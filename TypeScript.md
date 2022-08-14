# TypeScript

## 第一章

### 优化编译

1. 解决TS和JS冲突

   `tsc --init # 生成配置文件`

2. 自动编译

   `tsc --watch`

3. 发生错误

   `tsc -noEmitOnError xx.ts`

### 降级编译

`tsconfig.json`

```typescript
/* Language and Environment */
"target": "es5",
```

### 严格模式

`tsconfig.json`

```typescript
/* Type Checking */
"strict": true,
"noImplicitAny": true,
"strictNullChecks": true,
```



## 第二章

### 常用类型

#### 基本类型

`string, number, boolean`

#### 数组

```typescript
type[]

Array<type> # 泛型写法
```

#### any

不希望某个特定值导致类型检查错误

#### 变量上的类型注释

```typescript
let myName: string = 'qy'
```

#### 函数

```typescript
function greet(name: string): void {
    console.log('hello,' + name)
}
```

#### 对象类型

```typescript
function printCoord(pt: {x: number, y: number}) {
    console.log('坐标x的值为：' + pt.x)
    console.log('坐标y的值为：' + pt.y)
}
printCoord({x: 3, y: 7})
```

联合类型

```typescript
let id: number | string
```

#### 类型别名

```typescript
type Point = {
    x: number
    y: number
}

type ID = number | string

type UserInputSanitizedString = string
```

#### 接口

```typescript
interface Point {
    x: number
    y: number
}

function printCoord(pt: Point) {
    console.log("x =" + pt.x);
    console.log("y =" + pt.y);
}

printCoord({x: 100, y: 100})
```

#### 类型断言

```typescript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement

const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas")
```

#### 文字类型

