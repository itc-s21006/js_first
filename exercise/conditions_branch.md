# [条件分岐メニュー](https://paiza.jp/works/mondai/conditions_branch/problem_index?language_uid=javascript)

## [0 が含まれていないか判定 final](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__simple_boss/edit?language_uid=javascript)

### for と if を使うやり方

```js
const fun = (...args) {
  const [N, ...rest] = toList(toInt)(args)
  for (let i = 0; i < N; i += 1) {
    if (rest[i] === 0) {
      return 'NO'
    }
  }
  return 'YES'
}
```

### for-of と if を使うやり方

```js
const fun = (...args) {
  const [N, ...rest] = toList(toInt)(args)
  for (const r of rest) {
    if (r === 0) {
      return 'NO'
    }
  }
  return 'YES'
}
```

### Array.includes を使うやり方
```js
const fun = (...args) {
  const [N, ...rest] = toList(toInt)(args)
  return rest.includes(0)
    ? 'NO'
    : 'YES'
}
```

## [AND+OR final](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__bool_boss/edit?language_uid=javascript)

### and/or オペレータを使う方法
```js
const fun = (...args) => {
  const [X, Y, Z] = split(' ', toInt)(args[0])
  if ((Z >= 10) || (X >= 10 && Y >= 10)) { 
    return 'YES'
  }
  return 'NO'
}
```

### Array.everyを使う方法

```js
const fun = (...args) => {
  const over10 = n => n >= 10
  const [X, Y, Z] = split(' ', toInt)(args[0])

  return over10(Z) || [X, Y].every(over10))
    ? 'YES'
    : 'NO'
}
```

## [FizzBuzz](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__mod_boss/edit?language_uid=javascript&t=082b6f654111a6f8cab278b2fb9fd459)

一般的解法
```js
const fun = (...args) => {
  const N = toInt(args[0])
  if (N % 15 === 0) return 'FizzBuzz'
  if (N % 3 === 0) return 'Fizz'
  if (N % 5 === 0) return 'Buzz'
  return 15
}

```

関数的解法
```js
const fun = (...args) => {
  const f = n => ([key, value]) => n % key === 0 ? value : null
  const table = new Map([[3, 'Fizz'], [5, 'Buzz']])
  const N = toInt(args[0])
  return join(' ')(toList(f(N))(table)) || N
}
```

## 積の最小化

### [けた数の測定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step1/edit?language_uid=javascript)

数値として判定
```js
const fun = (...args) => {
  const N = toInt(args[0])
  let count = 0
  while (N > 0) {
    N /= 10
    count += 1
  }
  return count
}
```
文字として判定

```js
const fun = (...args) => {
  const N = toInt(args[0])
  return toStr(N).length
}
```

### [足したり引いたり](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step2/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = (a, b) => [a + b, -a + b, a - b, -a - b]
  const [N, A, B] = split(' ', toInt)(args[0])
  return toList(v === N)(f(A, B)).some(identity)
    ? 'YES'
    : 'NO'
}
```

### [同値判定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step3?language_uid=javascript)
 
zip関数を使用
```js
const fun = (...args) => {
  const zip = (...arrays) => {
    const len = Math.min(...(Array.from(arrays, v => v.length)))
    return Array.from(Array(len), (_, i) => arrays.map(arr => arr[i]))
  }
  const [N, A, B] = toList(split(' '))(args)
  return zip(A, B).filter(([a, b]) => a === b).length
}
```
### [終了判定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step4?language_uid=javascript)

```js
const fun = (...args) {
  const isOdd = n => n % 2 === 1
  const sum = (...args) => args.reduce((a, b) => a + b)
  const [N, A] = toList(split(' ', toInt))(args)
  return toList(sum, A.slice(0, A.findIndex(isOdd)))

}
```

### [終了判定 2](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step5?language_uid=javascript)

Generatorを使用した例
```js
const fun = (...args) => {
  const gen = function* (n, k) {
    while (n < K)  yield n *= 2 
  }
  const [N, K] = split(args[0], toInt)
  const g = gen(N, K)
  return [...g].length
}
```

### [池の周回](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step6?language_uid=javascript)

```js
const fun = (...args) => {
  const [N, K, T] = split(' ', toInt)(args)
  return K * T % N === 0
    ? 'YES'
    : 'NO'
}
```

### [崖に落ちるか判定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step7/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [N, K, T] = split(' ', toInt)(args)
  return (K * N >= T)
    ? 'YES'
    : 'NO'
}
```

### [タイルの敷き詰め](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step8?language_uid=javascript)

```js
const fun = (...args) => {
  const f = v => v % 2 === 0 && v !== 0
  const [H, W] = split(' ', toInt)(args)
  return [H, W].every(f)
    ? 'YES'
    : 'NO'
}
```

### [積の最小化 ](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_boss/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = (a, b) => [a * b, a ** 2, b ** 2]
  const [A, B] = split(' ', toInt)(args[0])
  return toInt(Math.min(...f(A, B)))
}
```