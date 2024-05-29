import express from 'express'
import cors from 'cors'
import { createAnimal, changeAnimal, getAllAnimals, deleteAnimal, getAllAnimalById } from './db.js'
const app = express()
const port = 3000
app.use(express.json())
app.use(cors({origin: ['http://localhost:5173', "http://localhost:5174"]}))

app.get('/animals', async (req, res) => {
    const result = await getAllAnimals()
    res.send(result.rows)
})

app.get('/animals/:id', async (req, res) => {
    const result = await getAllAnimalById(req.params.id)
    res.send(result.rows)
})

app.post('/animals', async (req, res) => {
    const result = await changeAnimal(req.body)
    res.send(result.rows)
})

app.post('/animals', async (req, res) => {
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
