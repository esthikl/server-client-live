import express from 'express'
import { increase } from './counter'


const app = express()
const port = 5000
app.get('/', (_, res) => {
    res.json(increase)
})

app.listen(port, () => console.log(`Running on port ${port}`))