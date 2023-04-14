import './App.css'
import { useState } from 'react'
import Contact from './components/Contact'

const App = () => {
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
			setPersons(persons.concat(personObject))
			setNewName('')
			setNewPhoneNumber('')
		}
	}

	const handlePhoneNumberChange = event => {
		event.preventDefault()
		setNewPhoneNumber(event.target.value)
	}

	const handleSerchChange = event => {
		event.preventDefault()
		setSearch(event.target.value)
	}

	return (
		<div className='App'>
			<h2>Phonebook</h2>
			<div>
				<h2>Filter Contacts By Name</h2>
				<form>
					Filter by <input value={search} onChange={handleSerchChange} />
				</form>
			</div>
			<form onSubmit={handleNameSubmit}>
				<div>
					<h2>Add New Contact</h2>
					Name: <input onChange={handleNameChange} value={newName} />
					PhoneNumber:{' '}
					<input onChange={handlePhoneNumberChange} value={newPhoneNumber} />
				</div>
				<div>
					<button type='submit'>add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<Contact persons={personToDisplay} />
		</div>
	)
}

export default App
