import {createInterface} from 'readline'
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
})

const waitForInput = (): Promise<string> => new Promise((resolve) => {
    readline.on('line', a => {
        resolve(a)
        readline.removeAllListeners()
    })
})

export default waitForInput