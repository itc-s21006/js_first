# [二重ループメニュー](https://paiza.jp/works/mondai/double_roop_problems/problem_index?language_uid=javascript)

## 二重ループ：基本編

### [指定された数字までの出力 ](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_column_new/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const seq = n => [...Array(n).keys()].map(v => v + 1)
  const N = toInt(args[0])
  return seq(N)
}

print(join(' '))(fun(...lines))
```

### [指定された数字までの出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_num_new/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const seq = n => [...Array(n).keys()].map(v => v + 1)
  const N = toInt(args[0])
  return seq(N)
}

print(join('\n'))(fun(...lines))
```

### [指定された行数の数字の出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_column/edit?language_uid=javascript)

```js
// define your function
const fun = (...args) => {
  const seq = n => [...Array(n).keys()].map(v => v + 1)
  const f = n => () => join(' ')(toList(toStr)(seq(n))) // '1 2 3 4 5 ...n'
  const N = toInt(args[0])
  return toList(f(5))(seq(N))
}
print(join('\n'))(fun(...lines))
```


### [指定された範囲・行数の数字の出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_range/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const seq = n => [...Array(n).keys()].map(v => v + 1)
  const f = n => () => join(' ')(toList(toStr)(seq(n))) // '1 2 3 4 5 ...n'
  const [N, K] = split(' ', toInt)(args[0])
  return toList(f(N))(seq(K))
}
```

### [二次元配列の出力 ](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_map/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [[N, K], ...rest]] = toList(split(' ', toInt))(args)
  return toList(join(' '))(rest)
}
```

### [二次元配列での要素の検索](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__search/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [[N, K], ...rest] = toList(split(' ', toInt))(args)
  const divmod = (a, b) => [toInt(a / b), a % b]
  const index = rest.flat().indexOf(1)
  return divmod(index, K).map(x => x + 1)
}
print(join(' '))(fun(...lines))
```

### [二次元配列の最大の要素](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__search_max/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [[N, K], ...rest] = toList(split(' ', toInt))(args)
  return Math.max(...rest.flat())
}
```

### [二次元配列の行ごとの和](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__row_sum/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const sum = list => list.reduce((a, b) => a + b, 0)
  const [[N, K], ...rest] = toList(split(' ', toInt))(args)
  return toList(sum)(rest)
}
print(join('\n'))(fun(...lines))
```

### [さまざまな長さの配列の和](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__various_row_sum/edit?language_uid=javascript)


テスト2 ゴミデータ(空白スペース)有り trim or slice が必要
```js
const fun = (...args) => {
  const sum = list => list.reduce((a, b) => a + b, 0)
  const [N, ...rest] = toList(split(' ', toInt))(args)
  return toList(sum)(toList(slice(1))(rest))
}
print(join('\n'))(fun(...lines))
```


### [階段の出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__stairs/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const seq = n => [...Array(n).keys()].map(v => v + 1)
  const N = toInt(args[0])
  return toList(join(' '))(toList(seq)(seq(N)))
}
```

## 二重ループ：基本編　積の最大

### [二重ループ：基本編　積の最大](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__multi_max/edit?language_uid=javascript)


for-of pattern
```js
const fun = (...args) => {
  const [[N, K], A, B] = toList(split(' ', toInt))(args)
  let max = Number.MIN_VALUE
  for (const a of A) {
    for (const b of B) {
      max = Math.max(max, a * b)
    }
  }
  return max
}
```
simple map pattern
```js
const fun = (...args) => {
  const f = (A, B) => A.map(a => B.map(b => [a, b])).flat()
  const [[N, K], A, B] = toList(split(' ', toInt))(args)
  return Math.max(...Array.from(f(A, B), ([a, b]) => a * b))
}
```
product pattern
```js
const fun = (...args) => {
  const product = (...iters) => iters.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())))
  const [[N, K], A, B] = toList(split(' ', toInt))(args)
  return return Math.max(...toList(([a, b]) => a * b)(product(A, B)).flat())
```

### [二重ループ：活用編 三角形の探索](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__triangle/edit?language_uid=javascript&t=4b67bee5bbc71630a462e0475d6ebbd0)

```js
const fun = (...args) => {
  const f = (a, b, c) = a ** 2 - b ** 2 - c ** 2 === 0
  const N = toInt(args[0])
  for (let a = 1; a < N - 1; a += 1) {
    for (let b = 1; a + b < N; b += 1) {
      let c = N - (a + b)
      if (f(a, b, c)) {
        return 'YES'
      }
    }
  }
  return 'NO'
}
```

爆発でtime out
```js
const fun = (...args) => {
  const product = (...iters) => iters.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())))
  const seq = (start, end) => [...Array(end - start).keys()].map(v => v + start)
  const f1 = n => ([a, b, c]) => a + b + c === n
  const f2 = ([a, b, c]) => a ** 2 - b ** 2 - c ** 2 === 0

  const N = toInt(args[0])
  const list = seq(1, N - 2)
  return product(list, list, list).filter(f1(N)).some(f2)
    ? 'YES'
    : 'NO'
}
```