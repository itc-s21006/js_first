# Dランク早解きセット

## [snippet](../docs/snippet.md)

## [Problem](https://paiza.jp/works/mondai/drankfast/problem_index?language_uid=javascript)

### [1日1万歩](https://paiza.jp/works/mondai/drankfast/d1_step_distance/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [d, s] = split(' ', toInt)(args[0])
  // write code here

  return [d, s]
}

print(identity)(result)
```

### [正n角形の内角](https://paiza.jp/works/mondai/drankfast/d2_polygon/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const n = toInt(args[0])
  // write code here

  return n
}

print(identity)(result)
```

### [うなりの周波数](https://paiza.jp/works/mondai/drankfast/d3_beat_frequency/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [f1, f2] = split(' ', toInt)(args[0])
  // use Math.abs(n) or Math.max(a, b) Math.min(a, b)
  // write code here

  return [f1, f2]
}

print(identity)(result)
```

### [たぶん... ](https://paiza.jp/works/mondai/drankfast/d4_maybe/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [s] = args
  // use String.replace(a, b)
  // write code here

  return s
}

print(identity)(result)
```

### [アンダーライン](https://paiza.jp/works/mondai/drankfast/d5_underline/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [s] = args
  // use String.repeat(n)
  // write code here

  return s
}

print(join('\n'))(result)
```


### [式の計算](https://paiza.jp/works/mondai/drankfast/d6_calculator/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [v1 , op , v2] = split(' ', args[0])
  // use parseInt(n, 10)
  // write code here

  return [v1 , op , v2]
}

print(identity)(result)
```

### [鉛筆の濃さ](https://paiza.jp/works/mondai/drankfast/d7_pencil/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const table = split(',')('6B,5B,4B,3B,2B,B,HB,F,H,2H,3H,4H,5H,6H,7H,8H,9H')
  const k = toInt(args[0])
  // write code here

  return k
}

print(identity)(result)
```

### [靴のサイズ](https://paiza.jp/works/mondai/drankfast/d8_shoes_size/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const s = parseFloat(args[0])
  // use Number.toFixed(digit)
  // write code here

  return s
}

print(join(' '))(result)
```
### [30人31脚](https://paiza.jp/works/mondai/drankfast/d9_30people31legs/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const m = toInt(args[0])
  // write code here

  return m
}

print(identity)(result)
```
### [ボーダー柄 ](https://paiza.jp/works/mondai/drankfast/d10_stripe_pattern/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const n = toInt(args[0])
  // use repeat
  // write code here

  return n
}

print(identity)(result)
```

### [縦書き](https://paiza.jp/works/mondai/drankfast/d11_vertical_writing/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [s] = args
  // use String.split(sep)
  // write code here

  return s
}

print(join('\n'))(result)
```

### [山の英語表記](https://paiza.jp/works/mondai/drankfast/d12_mountain/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const s = args[0]
  // use template literal -> `${}`
  // write code here

  return s
}

print(identity)(result)
```

### [満員電車の乗車率](https://paiza.jp/works/mondai/drankfast/d13_crowded_train/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const n = toInt(args[0])
  // use Math.trunc(f)
  // write code here

  return n
}

print(identity)(result)
```

### [0から9までのカウンタ](https://paiza.jp/works/mondai/drankfast/d14_counting/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const n = toInt(args[0])
  // use mod operator -> %
  // write code here

  return n
}

print(join('\n'))(result)
```

### [気温の変化](https://paiza.jp/works/mondai/drankfast/d15_temperature/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [t1, t2] = split(' ', toInt)(args[0])
  // write code here

  return [t1, t2]
}

print(identity)(result)
```

### [アルファベットの穴の数](https://paiza.jp/works/mondai/drankfast/d16_alphabet_hole/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [s] = args
  // use String.includes or Array.includes
  // write code here

  return s
}

print(identity)(result)
```

### [騒音レベル](https://paiza.jp/works/mondai/drankfast/d17_noise/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const l = toInt(args[0])
  // write code here

  return l
}

print(identity)(result)
```

### [TGIF](https://paiza.jp/works/mondai/drankfast/d18_tgif/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [s] = args
  // write code here

  return s
}

print(identity)(result)
```

### [可聴領域](https://paiza.jp/works/mondai/drankfast/d19_hearing_range/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = toInt(args[0])
  // write code here

  return f
}

print(identity)(result)
```

### [駄菓子の大人買い](https://paiza.jp/works/mondai/drankfast/d20_dagasi/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const m = toInt(args[0])
  // write code here

  return m
}

print(identity)(result)
```