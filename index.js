const express = require('express')
const app = express()

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Matti Meikäläinen",
        number: "112 221"
    },
    {
        id: 3,
        name: "Maija Mehiläinen",
        number: "112233"
    },
]

app.get('/', (req, res) => {
  res.send('<h1>Hello hello</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
