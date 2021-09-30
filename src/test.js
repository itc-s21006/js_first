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
  const [[n, k], ...rest] = toList(toInt)(args)
  return [[n, k], ...rest]
}

const lines =  readLines() // if you use stdin or define your array literal
print(identity)(fun(...lines))  // use join('\n') or join(' ') or identity in the first parenthesis
