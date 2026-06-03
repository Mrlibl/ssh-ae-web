/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * author: zhangzhenyang
 * use: 解析语言包
 */

const fs = require('fs')
const path = require('path')

const xlsx = require('node-xlsx')

const enTarget = require('../src/i18n/en/index.json')
const jpTarget = require('../src/i18n/jp/index.json')
const koTarget = require('../src/i18n/kr/index.json')
const zhTarget = require('../src/i18n/zh/index.json')

function getKey(str) {
  return str
    ?.split(/\W/)
    .slice(0, 5)
    .filter((_) => _ !== '')
    .join('_')
    .toLowerCase()
}

const [cur_work = 'work', tableIndex = 2] = process.argv.slice(2)

console.log('使用表', tableIndex, '生成文件名', cur_work)

const xlsxPath = path.resolve(__dirname, './index.xlsx')
const data = xlsx.parse(xlsxPath)[tableIndex].data

const zh = {},
  en = {},
  korea = {},
  jp = {}

function getRandomString() {
  return Math.random().toString(16).slice(2, 8)
}

data.forEach((d) => {
  if (d[3]) {
    let key = getKey(d[2])
    if (!key) return
    if (enTarget[key]) {
      // 若之前存在, 并且值不一样, key 加随机后缀
      if (enTarget[key] !== d[2]) key = `${key}_${getRandomString()}`
      else return
    }
    zh[key] = d[3]
    en[key] = d[2]
    korea[key] = d[4]
    jp[key] = d[5]?.trim()
  }
})

const targetMap = ['zh', 'en', 'kr', 'jp']
const currentJSON = [zh, en, korea, jp]
const previousJSON = [zhTarget, enTarget, koTarget, jpTarget]

currentJSON.forEach((_, i) => {
  const target = `./src/i18n/${targetMap[i]}/index.json`
  const d = new Date()

  const date = `${d.getFullYear()}/${
    d.getMonth() + 1
  }/${d.getDate()} ${cur_work}`

  const merge = {
    ...previousJSON[i],
    [date]: cur_work,
    ...currentJSON[i],
  }

  fs.writeFileSync(target, JSON.stringify(merge, null, 2))
})

console.log(`解析成功！👍👍👍 打开`)
targetMap.forEach((_) => console.log(`./src/i18n/${_}/index.json`))
console.log('解析方案变更, 无需手动导入')

// function getAllFiles(dir) {
//   const files = fs.readdirSync(dir)
//   console.log(files)
// }

// function doReplace(p) {
//   const realPath = p ? path.resolve(__dirname, p) : '../src/pages'
//   const reg = /i18n.*/g
//   if (p.endsWith('.vue') || p.endsWith('.js')) {
//     console.log('正在替换文件')
//   } else {
//     const files = getAllFiles(realPath)
//   }
// }

async function needPrompt() {
  // const askWriteIndex = [
  //   {
  //     type: 'input',
  //     name: 'q1',
  //     message: '需要帮忙引入吗😊? 1:需要',
  //   },
  // ]
  // const askReplaceVue = [
  //   {
  //     type: 'input',
  //     name: 'q2',
  //     message: '需要帮忙替换vue中"i18n_"字段吗? 开发中'
  //   }
  // ]
  // const res1 = await inquirer.prompt(askWriteIndex)
  // if (res1.q1 == 1) {
  // map.forEach((_) => {
  // const fileName = `${base}/${_}/index.ts`
  // const data = fs.readFileSync(fileName, 'utf8').split(/\n/)
  // data.splice(0, 0, `import ${importVar} from './${cur_work}'`)
  // data.splice(10, 0, `  ...${importVar},`)
  // fs.writeFileSync(fileName, data.join('\n'))
  // })
  // const res2 = await inquirer.prompt(askReplaceVue)
  // if (res2.q2 === 1) {
  //   console.log('正在执行替换')
  //   // doReplace()
  // }
  // } else {
  // }
}

needPrompt()
