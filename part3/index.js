const express = require('express')
const app = express()

const persons = [
    {
        id: 1,
        name: 'Arto Hellas',
        number: '040-123456'
    },
    {
        id: 2,
        name: 'Ada Lovelace',
        number: '39-44-5323523'
    },
    {
        id: 3,
        name: 'Dan Abramov',
        number: '12-43-234345'
    },
    {
        id: 4,
        name: 'Mary Poppendieck',
        number: '39-23-6423122'
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'application/json' })
//   response.end(JSON.stringify(notes))
// })

app.get('/api/infor', (request, response) => {
    const time = new Date()
    response.send(
        `<div><p>Phonebook has infor for ${persons.length} people</p><div>${time}</div></div>`
    )
})

app.get('/api/person/:id', (request, response) => {
    const person = persons.find(person => person.id === Number(request.params.id))

    if (!person) {
        response.status(404).send('Not found')
    } else {
        response.json(person)
    }
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
