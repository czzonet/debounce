import * as readline from 'readline'

import { delay } from './lib/debounce'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>>> '
})

rl.prompt()

rl.on('line', (line) => {
  const h = async () => {
    await delay(1000).then()
    console.log('your input: ', line);
    rl.prompt()
  }

  h()

}).on('close', () => {
  console.log('bye');
  process.exit(0)
})