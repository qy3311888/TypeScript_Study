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

