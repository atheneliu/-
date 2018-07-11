/**
 * 此工具方法中主要存放一些 js 对象或者语言方面的处理函数
 * PS: lang 是 language 的简称
 */

export function isArray(o) {
  return Object.prototype.toString.apply(o) === '[object Array]'
}

export function isFunction(o) {
  return Object.prototype.toString.apply(o) === '[object Function]'
}

export function isObject(o) {
  return Object.prototype.toString.apply(o) === '[object Object]'
}

export function isString(o) {
  return Object.prototype.toString.apply(o) === '[object String]'
}

export function isEmpty(value) {
  return value === undefined ||
    (isString(value) && value.trim() === '') ||
    (isArray(value) && value.length === 0) ||
    (isObject(value) && Object.keys(value).length === 0)
}

export function isUrl(value) {
  return /^https?:\/\/.*/.test(value)
}

export function stringToNumber(s) {
  return s ? +s : s
}

export function formatCount(count) {
  const num = (count / 1000).toFixed(1)
  const floorNum = Math.floor(num)
  if (count < 1000) return `${count}`
  if (count < 10000 && count >= 1000) return `${num}k`
  if (count >= 10000) return `${floorNum}k+`
}

export function subStr(_str, num) {
  let str = _str
  if (!str) return ''
  str = str.replace(/\n/g, ' ')
  if (str.length > num) {
    str = `${str.substr(0, num)}...`
  }
  return str
}
