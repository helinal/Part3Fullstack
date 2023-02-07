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

app.get('/info', (req, res) => {
  res.send(
  `The Phonebook has info of ${persons.length} people <br></br>
   ${new Date().toString()}`)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

///api/persons/:id, jos ei id niin asianmukainen statuskoodi
//yksittäisten puhelinnumerotiedon näyttäminen