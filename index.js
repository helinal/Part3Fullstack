const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

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

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })

app.post('/api/persons', (req, res) => {
  const person = req.body
  console.log(person)
  const name = person.name
  const number = person.number

  const newId = Math.floor(Math.random() * 100)
  person.id = newId

  if(name == null || number == null) {
    return res.status(400).json({
      error: 'name or number missing'
    })
  } 
  
  const p = persons.find(p => p.name === name)
  if (p) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }

  persons = persons.concat(person)
  console.log(person)
  res.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

//virheiden käsittely:
//nimi tai numero puuttuu -> asiaankuuluva statkoodi ja syy
//lisättävä nimi on jo luettelossa -> same as above