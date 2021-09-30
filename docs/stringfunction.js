const p = console.log
const length = iter => {
  let counter = 0
  for (const it of iter) {
    counter += 1
  }
  return counter
}

const startsWith = s => search => {
  const len = length(search)
  for (let i = 0; i < len; i += 1) {
    if (s[i] !== search[i]) {
      return false
    }
  }
  return true
}

const endsWith = s => search => {
  const len = length(search)
  const offset = length(s) - len
  for (let i = 0; i < len; i += 1) {
    if (s[i + offset] !== search[i]) {
      return false
    }
  }
  return true
}

const substring = s => (beginIndex, endIndex) => {
  const [begin, end] = (endIndex === undefined)
    ? [beginIndex, length(s)]
    : (beginIndex > endIndex)
        ? [beginIndex, endIndex] : [endIndex, beginIndex]
  let buf = ''
  for (let i = begin; i < end; i += 1) {
    buf += s[i]
  }
  return buf
}

const slice = s => (beginIndex, endIndex) => {
  const fun = (len => n => n < 0 ? len + n : n)(length(s))
  const [begin, end] = (endIndex === undefined)
    ? [fun(beginIndex), length(s)]
    : [fun(beginIndex), fun(endIndex)]
  let buf = ''
  for (let i = begin; i < end; i += 1) {
    buf += s[i]
  }
  return buf
}

const indexOf = s => search => {
  const searchlen = length(search)
  const len = length(s) - searchlen
  for (let i = 0; i < len; i += 1) {
    if (slice(s)(i, i + searchlen) === search) {
      return i
    }
  }
  return -1
}

const includes = s => search => {
  return indexOf(s)(search) !== -1
}

const stringCase = fun => s => {
  const acc = []
  for (const c of s) {
    const cp = c.codePointAt(0)
    acc.push(fun(cp))
  }
  return String.fromCodePoint(...acc)
}

const toLowerCase = s => {
  const fun = cp => (cp > 0x40 && cp < 0x5b) ? cp + 0x20 : cp
  return stringCase(fun)(s)
}

const toUpperCase = s => {
  const fun = cp => (cp > 0x60 && cp < 0x7b) ? cp - 0x20 : cp
  return stringCase(fun)(s)
}

const split = s => (sep, index) => {}
