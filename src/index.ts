import * as readline from 'readline'

import { delay, debounce } from './lib/debounce'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>>> '
})

rl.prompt()

/**
 * 生成防抖函数 
 */
const debouncer = debounce(() => console.log('debounce'), 2000)

rl.on('line', (line) => {
  const h = async () => {
    // await delay(1000).then()
    console.log('your input: ', line);
    debouncer()
    rl.prompt()
  }

  h()

}).on('close', () => {
  console.log('bye');
  process.exit(0)
})