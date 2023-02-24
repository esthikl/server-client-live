import { setInterval } from 'timers'


let i: number = 1
let response: string[] = []
let iText: string

function start() {
    setInterval(increase, 1000)

}

setTimeout(start, 5000)

export function increase() {
    if (i < 300) {
        i++
        iText = String(i)
        response.push(iText)
    }
    console.log(response)
    return (response)
}

