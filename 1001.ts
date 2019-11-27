import waitForInput from "./core"

async function main() {
    console.log('1001')
    const a = Number(await waitForInput())
    const b = Number(await waitForInput())

    console.log(`X = ${a + b}`)
}

main()