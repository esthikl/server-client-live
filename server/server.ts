import express, { Router } from 'express'
import { setInterval } from 'timers'

const app = express()
const bodyParser = require('body-parser')
const port = 5000

var cors = require('cors')

app.use(cors())


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (_, res) => {
    console.log(response)
    res.json(response)
})

app.listen(port, () => console.log(`Running on port ${port}`))


//Anwendung Counter

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