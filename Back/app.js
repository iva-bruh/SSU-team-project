import express from 'express'
import cors from 'cors'
import { createAnimal, getAllAnimals, deleteAnimal } from './db.js'
const app = express()
const port = 3000
app.use(express.json())
app.use(cors({origin: ['http://localhost:5173']}))

app.get('/animals', async (req, res) => {
    const result = await getAllAnimals()
    res.send(result.rows)
})

app.post('/animals', async (req, res) => {
    console.log(req.body)
    const result = await createAnimal(req.body)
    res.send(result.rows)
})

app.delete('/animals/:id', async (req, res) => {
    const result = await deleteAnimal(req.params.id)
    res.send(result)
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})
