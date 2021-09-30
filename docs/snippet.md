# [VS Code Snippet](../snippet)

## [simple snippet](../snippet/simple.snippet.json)

### Install 

- Open Vscode -> File -> user settings -> user snippet -> new global snippet -> paste above link
- Create new javascript file then `simple<Tab>`

code
```js
const readLines = (file = '/dev/stdin') => 
  require('fs').readFileSync(file).toString().trim().split('\n')
const identity = value => value
const join = sep => list => list.join(sep)
const split = (sep, fun = identity) => iter => Array.from(iter.split(sep), fun)
const toInt = s => parseInt(s, 10)
const toStr = n => n.toString()
const toList = fun => iter => Array.from(iter, fun)
const print = fun => value => console.log(fun(value))

// define your function
const fun = (...args) => {
  // write code here
  return args
}

const lines =  readLines() // if you use stdin or define your array literal
print(identity)(fun(...lines))  // use join('\n') or join(' ') or identity in the first parenthesis
```

### function summary

|  function                  |  description                                  |
| -------------------------- | --------------------------------------------- |
| readLines()                | 外部入力を配列にして返す                      |
| identity(value)            | 入力値をそのまま返す                          |
| join(sep)(list)            | 配列をsepで結合する                           |
| split(sep, [fun])(iter)    | イテレータをsepで分割[fun]を適応して返す      |
| toInt(s)                   | 文字数字を整数に変換                          |
| toStr(n)                   | 数値を文字数字に変換                          |
| toList(fun)(iter)          | イテレータに関数適用し配列を返す              |
| print(fun)(value)          | valueに関数適用し表示する                     |


### example

#### 1行1列の文字列を取り出す ['abc'] -> 'abc'           

data
```js
abc
```

code
```js
const s = args[0] // or const [s] = args 
```

#### 1行1列の数字を取り出す ['1'] -> 1

data
```js
1
```

code
```js
const n = toInt(args[0])
```

#### 空白で区切られた1行複数列の文字列を取り出す ['abc def'] -> 'abc', 'def'

data
```js
abc def
```
code
```js
const [s1, s2] = split(' ')(args[0])
```
#### 空白で区切られた1行複数列の数字を取り出す ['1 2'] -> 1, 2

data
```js
1 2
```
code
```js
const [n1, n2] = split(' ', toInt)(args[0])
```
#### 空白で区切られた1行複数列の数字を先頭と残りに分けて取り出す ['1 2 3 4'] -> 1 [2, 3, 4]

data
```js
1 2 3 4
```
code
```js
const [first, ...rest] = split(' ', toInt)(args[0])
```

#### 複数行の文字列の取得 ['abc', 'def] -> 'abc', 'def'

data
```js
abc
def
```

code
```js
const [a, b] = args
```

#### 複数行の数字の取得 [123, 456] -> 123, 456

data
```js
123
456
```

code
```js
const [a, b] = toList(toInt)(args)
```

#### 複数行の複数列の文字列の取得 ['ab cd', 'ef gh'] -> [['ab', 'cd'], ['ef', 'gh]]

data
```js
ab cd
ef gh
```

code
```js
const [[ab, cd], [ef, gh]] = toList(split(' '))(args)
// or
const [ab, cd, ef, gh] = toList(split(' '))(args).flat()
```

#### 複数行の複数列の数字の取得 ['12 34', '56 78'] -> [[12, 34], [56, 78]]

data
```js
12 34 
56 78
```

code
```js
const [[ab, cd], [ef, gh]] = toList(split(' ', toInt))(args)
// or
const [ab, cd, ef, gh] = toList(split(' ', toInt))(args).flat()
```

#### 戻り値をそのまま出力

code
```js
print(identity)('abc')
```
output
```js
abc
```

#### 戻り値が複数行(配列)を改行して出力

code
```js
print(join('\n'))([1, 2, 3])
```

output
```js
1
2
3
```
#### 戻り値が複数行(配列)を改行して出力

code
```js
print(join('\n'))([1, 2, 3])
```

output
```js
1
2
3
```
#### 戻り値が複数行(配列)をスペース区切りで出力

code
```js
print(join(' '))([1, 2, 3])
```

output
```js
1 2 3
```

## [paiza snippet](../snippet/paiza.snippet.json)

### Install 

- Open Vscode -> File -> user settings -> user snippet -> new global snippet -> paste above link
- Create new javascript file then `paiza<Tab>`

