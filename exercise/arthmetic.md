# [算術・代入演算メニュー](https://paiza.jp/works/mondai/arithmetic_substitution_op/problem_index?language_uid=javascript) 

## [snippet](./docs/snippets.md)


## [累乗 2](https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__arithmetic_step6/edit?language_uid=javascript)

simple
```js
const fun = (...args) => {
  const [a, b, c, d] = args[0].split(' ').map(v => parseInt(v, 10))
  return ((a + b) * c) ** 2 % d
}

print(identity)(result)
```

paiza template
```js
const fun = (...args) => {
  const [a, b, c, d] = split(' ', toInt)(args[0])
  return ((a + b) * c) ** 2 % d
}

print(identity)(result)

// convertList(toInt)(split(' ')(args[0]))
// split(' ')('28 57 33 73') -> ['28', '57', '33', '73']
// convertList(toInt)(['28', '57', '33', '73']) -> [28, 57, 33, 73]
// const [a, b, c, d] = [28, 57, 33, 73]
```

## [代入演算 4](https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__substitution_step4/edit?language_uid=javascript)

simple template
```js
const fun = (...args) => {
  const [a, b] = args[0].split(' ').map(v => parseInt(v))
  const N = 10000
  return parseInt((N / a), 10) % b
}

print(identity)(result)
```

paiza template
```js
const fun = (...args) => {
  const [a, b] = split(' ', toInt)(args[0])
  const N = 10000
  return toInt(N / a) % b
}

print(identity)(result)

// let N = 10000
// N /= a
// N = toInt(N) % b
// return N

```