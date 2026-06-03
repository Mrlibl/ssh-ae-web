// @ts-nocheck
export function formatNum(num: number) {
  return num?.toLocaleString()
}

function getType(p: object) {
  return Object.prototype.toString.call(p).slice(8, -1).toLowerCase()
}

export const typeUtils: Record<string, (v: any) => boolean> = {}
;['String', 'Number'].forEach((e) => {
  typeUtils[`is${e}`] = (p: any): boolean => {
    return getType(p) === e.toLowerCase()
  }
})

export function scrollToView(id: string) {
  document.getElementById(id)?.scrollIntoView()
}

export function splitArray<T = any>(arr: T[], count: number) {
  const res = []

  while (arr.length) {
    res.push(arr.splice(0, count))
  }

  return res
}

export function openTab(url: string) {
  window.open(url, '_blank')
}

;['String', 'Number'].forEach((e) => {
  typeUtils[`is${e}`] = function (p: any): boolean {
    return getType(p) === e.toLowerCase()
  }
})

export const copy = (text: string) => {
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop
  const scrollLeft =
    window.pageXOffset ||
    document.documentElement.scrollLeft ||
    document.body.scrollLeft
  if (navigator.clipboard && window.isSecureContext && !isIos()) {
    window.scrollTo(scrollLeft, scrollTop)
    return navigator.clipboard.writeText(text)
  } else {
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    window.scrollTo(scrollLeft, scrollTop)
  }
}

export function getUrlQueries(url: string = window.location.search) {
  const queryUrl = decodeURI(url.slice(1))
  const queries = queryUrl.split(/&|\\u0026/)
  const map: Record<string, string> = {}
  queries.forEach((query) => {
    const [key, value] = query.split('=')
    map[key] = value
  })
  return map
}

export function isIos(): boolean {
  return !!navigator.userAgent.match(/ipad|iphone|mac/i)
}

export function isEqual(obj1: any, obj2: any): boolean {
  const o1 = obj1 instanceof Object
  const o2 = obj2 instanceof Object
  if (!o1 || !o2) {
    // 如果不是对象 直接判断数据是否相等
    return obj1 === obj2
  }
  // 判断对象的可枚举属性组成的数组长度
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }
  for (const attr in obj1) {
    const a1 = Object.prototype.toString.call(obj1[attr]) == '[object Object]'
    const a2 = Object.prototype.toString.call(obj2[attr]) == '[object Object]'
    const arr1 = Object.prototype.toString.call(obj1[attr]) == '[object Array]'
    if (a1 && a2) {
      // 如果是对象继续判断
      return isEqual(obj1[attr], obj2[attr])
    } else if (arr1) {
      // 如果是对象 判断
      if (obj1[attr].toString() != obj2[attr].toString()) {
        return false
      }
    } else if (obj1[attr] !== obj2[attr]) {
      // 不是对象的就判断数值是否相等
      return false
    }
  }
  return true
}

export function debounce(func: (...v: any) => void, wait: number) {
  let timer: any
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    } else {
      timer = setTimeout(() => {
        func(...args)
      }, wait)
    }
  }
}

export function shuffle(arr: any[]) {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    const idx = Math.floor(Math.random() * (len - i))
    const temp = arr[idx]
    arr[idx] = arr[len - i - 1]
    arr[len - i - 1] = temp
  }
  return arr
}

export function splitWallet(w: string) {
  return `${w.slice(0, 6)}...${w.slice(-4)}`
}

export function diffTime(dur: number) {
  // 毫秒
  const { floor } = Math
  const sub = floor(dur / 1) //时间戳
  const day = floor(sub / (60 * 60 * 24))
  const hours = floor((sub % (60 * 60 * 24)) / (60 * 60))
  const minutes = floor((sub % (60 * 60)) / 60)
  const seconds = floor(sub % 60)
  return {
    d: `${day < 10 ? '0' : ''}${day}`,
    h: `${hours < 10 ? '0' : ''}${hours}`,
    m: `${minutes < 10 ? '0' : ''}${minutes}`,
    s: `${seconds < 10 ? '0' : ''}${seconds}`,
  }
}

export function formatDate(time: number, fmt = 'yyyy-MM-dd hh:mm:ss') {
  //author: meizz
  const t = new Date(time)
  let res = fmt
  const o: any = {
    'M+': t.getMonth() + 1, //月份
    'd+': t.getDate(), //日
    'h+': t.getHours(), //小时
    'm+': t.getMinutes(), //分
    's+': t.getSeconds(), //秒
    'q+': Math.floor((t.getMonth() + 3) / 3), //季度
    S: t.getMilliseconds(), //毫秒
  }
  if (/(y+)/.test(fmt))
    res = res.replace(
      RegExp.$1,
      (t.getFullYear() + '').substr(4 - RegExp.$1.length),
    )
  for (const k in o)
    if (new RegExp('(' + k + ')').test(res))
      res = res.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? o[k]
          : ('00' + o[k]).substr(('' + o[k]).length),
      )
  return res
}
export const getCurrentTimestamp = (): number => {
  return Date.now() / 1000
}

export function getI18nKey(str: string) {
  return str
    ?.split(/\W/)
    .slice(0, 5)
    .filter((_) => _ !== '')
    .join('_')
    .toLowerCase()
}
