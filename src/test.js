const readLines = (file = '/dev/stdin') =>
  require('fs').readFileSync(file).toString().trim().split('\n')
const identity = value => value
const join = sep => list => list.join(sep)
const split = (sep, fun = identity) => iter => Array.from(iter.split(sep), fun)
const slice = (begin, end) => iter => end ? iter.slice(begin) : iter.slice(begin, end)
const toInt = s => parseInt(s, 10)
const toStr = n => n.toString()
const toList = fun => iter => Array.from(iter, fun)
const print = fun => value => console.log(fun(value))

const fun = (...args) => {
  const seq = n => [...Array(n).keys()].map(v => v + 1)
  const N = toInt(args[0])
  return toList(join(' '))(toList(seq)(seq(N)))
}

const lines = readLines() // if you use stdin or define your array literal
print(join('\n'))(fun(...lines)) // use join('\n') or join(' ') or identity in the first parenthesis
