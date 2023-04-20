import './App.css'
import { useState, useEffect } from 'react'
import Contact from './components/Contact'
import personService from './services/person'
import Filter from './components/Filter'
import AddContacts from './components/AddContacts'

// import axios from 'axios'

const App = () => {
	useEffect(() => {
		personService.getAll().then(returnedObject => setPersons(returnedObject))
		// axios.get('http://localhost:3001/persons').then(response => {
		// 	setPersons(response.data)
		// })
	}, [])

	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newPhoneNumber, setNewPhoneNumber] = useState('')
	const [search, setSearch] = useState('')

	const handleNameChange = event => {
		event.preventDefault()
		setNewName(event.target.value)
	}

	const personToDisplay =
		search === ''
			? persons
			: persons.filter(person =>
				person.name.toLowerCase().includes(search.toLowerCase())
			)

	const handleNameSubmit = event => {
		event.preventDefault()

		if (persons.some(value => value.name === newName)) {
			alert(`${newName} Alredy in Phone Book`)
			setNewName('')
		} else {
			const personObject = { name: newName, number: newPhoneNumber }
			personService.create(personObject).then(returnedObject => {
				setPersons(persons.concat(returnedObject))
			})
			// setPersons(persons.concat(personObject))
			setNewName('')
			setNewPhoneNumber('')
		}
	}

	const handlePhoneNumberChange = event => {
		event.preventDefault()
		setNewPhoneNumber(event.target.value)
	}

	const handleSearchChange = event => {
		event.preventDefault()
		setSearch(event.target.value)
	}

	const handleDelete = (id) => {
        const person = persons.find(n => n.id === id)
        if(window.confirm(`Delete ${person.name}`)){
        personService.deleteContact(id).then(
            response => {
                setPersons(persons.filter(pers => pers.id !== id))
            }
        )
     }
  }

	return (
		<div className='App'>
			<h2>Phonebook</h2>
			<Filter search={search} handleSerchChange={handleSearchChange} />
			<AddContacts
				handleNameChange={handleNameChange}
				newName={newName}
				newPhoneNumber={newPhoneNumber}
				handlePhoneNumberChange={handlePhoneNumberChange}
				handleNameSubmit={handleNameSubmit}
			/>
			<h2>Numbers</h2>
			<Contact persons={personToDisplay} action={handleDelete} label={"Delete"}/>
		</div>
	)
}

export default App
