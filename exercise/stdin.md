# 標準入力 演習

## [snippets](../docs/snippets.md) 

- [simple template](../snippet/simple.snippet.json)
- [paiza template](../snippet/paiza.snippet.json)

## [標準入力メニュー](https://paiza.jp/works/mondai/stdin_primer/problem_index?language_uid=javascript)

### [行入力 1,000 行の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__read_line_boss/edit?language_uid=javascript)

```js
const fun = (...args) => {
  return args
}

print(join('\n'))(result)

```

### [半角スペース区切りでの文字列の分割 5 つの文字列の半角スペース区切りでの分割](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__split_string_boss/edit?language_uid=javascript)

simple template
```js
const fun = (...args) => {
  return args[0].split(' ', 5)
}

const lines = ['one two three four five']
// const lines = readLines()

print(join('\n'))(result)
```

paiza template
```js
const fun = (...args) => {
  return slice(5)(split(' ')(args[0]))
}

const lines = ['one two three four five']
// const lines = readLines()

print(join('\n'))(result)
```

### [半角スペース区切りの入力 半角スペース区切りの 1,000 個の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__split_input_boss/edit?language_uid=javascript)

simple template
```js
const fun = (...args) => {
  return args[0].split(' ', 1000)
}

print(join('\n'))(result)

```

paiza template
```js
const fun = (...args) => {
  return slice(1000)(split(' ')(args[0]))
}

print(join('\n'))(result)

```

### [整数の行入力 1,000行の整数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_row_boss/edit?language_uid=javascript)

simple template
```js
const fun = (...args) => {
  return args.map(v => parseInt(v, 10))
}

print(join('\n'))(result)
```


paiza template
```js
const fun = (...args) => {
  return toList(toInt)(args)
}

print(join('\n'))(result)
```

### [整数の半角スペース区切りの入力 1,000個の整数の半角スペース区切りの入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_space_boss/edit?language_uid=javascript)

```js
const fun = (...args) => {
  return args[0].split(' ').map(v => parseInt(v, 10))
}

print(join('\n'))(result)
```

paiza template
```js
const fun = (...args) => {
  return split(' ', toInt)(args[0])
}

print(join('\n'))(result)
```

### [N 個の整数の入力 1 行目で与えられる N 個の整数の入力 (large)](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_number_boss/edit?language_uid=javascript)

simple template
```js
const fun = (...args) => {
  const [N, ...data] = args[0].split(' ').map(v => parseInt(v))
  return data.slice(0, N)
}

print(join('\n'))(result)

// return data でも可
```

paiza template
```js
const fun = (...args) => {
  const [N, ...data] = split(' ', toInt)(args[0])
  return slice(0, N)(data)
}

print(join('\n'))(result)
```

### [1 行目で与えられる N 個の実数の入力 (large)](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__real_number_boss/edit?language_uid=javascript)

simple template
```js
const fun = (...args) => {
  const [N, ...data] = args[0].split(' ').map(Number)
  return data.slice(0, N)
}

print(join('\n'))(result)
```


paiza template
```js
const fun = (...args) => {
  const [N, ...data] = split(' ', Number)(args[0])
  return slice(0, N)(data)
}

print(join('\n'))(result)

// return slice(0, N)(data) でも可
```

### [組になったデータの入力 文字列と整数の組からの選択](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__pair_data_boss/edit?language_uid=javascript)

simple template
```js
const fun = (...args) => {
  const [N, ...data] = args
  const [s, a] = data.slice(0, parseInt(N, 10))[7].split(' ')
  return [s, parseInt(a, 10)]
}

print(join(' '))(result)
```


paiza template
```js
const fun = (...args) => {
  const [N, ...data] = args
  const [s, a] = split(' ')(slice(data)(0, toInt(N))[7])
  return [s, toInt(a)]
}

print(join(' '))(result)

// const [s, a] = split(' ')(data[7]) でも可

```

### [N 行 M 列のデータの入力 行ごとに要素数の異なる整数列の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__matrix_data_boss/edit?language_uid=javascript)

simple template
```js
const fun = (...args) => {
  const [N, ...data] = args
  return data.slice(0, parseInt(n)).map(v => v.split(' ').slice(1))
}

print(join('\n'))(result)
```

paiza template
```js
const fun = (...args) => {
  const [N, ...data] = args
  return toList(slice(1))(toList(split(' '))(data))
}

print(join('\n'))(result)
```

--------------------------------------------------------------------------------

## [標準入力サンプル問題セット](https://paiza.jp/works/mondai/stdin/problem_index?language_uid=javascript)

### [1つのデータの入力 ](https://paiza.jp/works/mondai/stdin/stdin_1)

```js
const fun = (...args) => {
  return args[0]
}

print(identity)(result)
```

### [1行のデータの入力](https://paiza.jp/works/mondai/stdin/stdin_1_line/edit?language_uid=javascript)

```js
const fun = (...args) => {
  return args[0]
}

print(identity)(result)
```
### [3行のデータの入力](https://paiza.jp/works/mondai/stdin/stdin_3_line/edit?language_uid=javascript)

```js
const fun = (...args) => {
  return args
}

print(join('\n'))(result)
```

### [N行のデータの入力](https://paiza.jp/works/mondai/stdin/stdin_n_line/edit?language_uid=javascript)

simple template
```js
const fun = (...args) => {
  const [N, ...data] = args
  return data.slice(0, parseInt(N, 10))
}
```

paiza template
```js
const fun = (...args) => {
  const [N, ...data] = args
  return slice(0, toInt(N))(data)
}

print(join('\n'))(result)
```

### [3つのデータの入力](https://paiza.jp/works/mondai/stdin/stdin_3/edit?language_uid=javascript)

simple template
```js
const fun = (...args) => {
  return args[0].split(' ', 3)
}

print(join('\n'))(result)
```


paiza template
```js
const fun = (...args) => {
  return slice(3)(split(' ')(args[0]))
}

print(join('\n'))(result)
```

### [N個のデータの入力](https://paiza.jp/works/mondai/stdin/stdin_n/edit?language_uid=javascript)

simple template
```js
const fun = (...args) => {
  const [N, data] = args
  return data.split(' ', parseInt(N, 10))
}

print(join('\n'))(result)

// return data でも可
```

paiza template
```js
const fun = (...args) => {
  const [N, data] = args
  return slice(0, toInt(N))(split(' ')(data))
}

print(join('\n'))(result)

// return data でも可
```

### [カンマ区切りの3つのデータの入力](https://paiza.jp/works/mondai/stdin/stdin_comma_3/edit?language_uid=javascript)

simple template
```js
const fun = (...args) => {
  return args[0].split(',', 3)
}

print(join('\n'))(result)
```


paiza template
```js
const fun = (...args) => {
  return slice(0, 3)(split(',')(args[0]))
}

print(join('\n'))(result)
```

### [カンマ区切りのN個のデータの入力](https://paiza.jp/works/mondai/stdin/stdin_comma_n/edit?language_uid=javascript)

paiza template
```js
const fun = (...args) => {
  const [N, data] = args
  return slice(0, toInt(N))(split(',')(data))
}

print(join('\n'))(result)

// return split(',')(data) でも可
```