import './App.css'
import { useState } from 'react'
import Contact from './components/Contact'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newPhoneNumber, setNewPhoneNumber] = useState('')

	const handleNameChange = event => {
		event.preventDefault()

		setNewName(event.target.value)
	}

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
	return (
		<div className='App'>
			<h2>Phonebook</h2>
			<form onSubmit={handleNameSubmit}>
				<div>
					Name: <input onChange={handleNameChange} value={newName} />
					PhoneNumber:{' '}
					<input onChange={handlePhoneNumberChange} value={newPhoneNumber} />
				</div>
				<div>
					<button type='submit'>add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<Contact persons={persons} />
		</div>
	)
}

export default App
