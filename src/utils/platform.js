export function isIOS() {
  const iosTag = 'Apple Computer, Inc.'
  return navigator.vendor === iosTag
}

export function isIOS9() {
  return navigator.userAgent.indexOf('iPhone OS 9') > -1
}

export function isIOS8() {
  return navigator.userAgent.indexOf('iPhone OS 8') > -1
}

export function isMobile() {
  const ua = window.navigator.userAgent.toLowerCase()
  return !!ua.match(/AppleWebKit.*Mobile.*/)
}

export function isAndroid() {
  const ua = window.navigator.userAgent.toLowerCase()
  // android终端或者uc浏览器
  return ua.indexOf('android') > -1 || ua.indexOf('linux') > -1
}

export function androidVersion() {
  const ua = window.navigator.userAgent.toLowerCase()
  return parseFloat(ua.substr(ua.search('android') + 8, 5))
}

export function hasWebSocket() {
  return window && !(!window.WebSocket || androidVersion() < 4.4)
}

export function isWeiXin() {
  const ua = navigator.userAgent.toLowerCase()
  return !!(/micromessenger/.test(ua))
}

export function isQQ() {
  const reg = new RegExp('qq/', 'g')
  const ua = navigator.userAgent.toLowerCase()
  return !!(reg.test(ua))
}
