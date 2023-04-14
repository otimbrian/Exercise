import { useState } from 'react'
import Contact from './components/Contact'

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
	const [newName, setNewName] = useState('')

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
			setPersons(persons.concat({ name: newName }))
			setNewName('')
		}
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={handleNameSubmit}>
				<div>
					name: <input onChange={handleNameChange} value={newName} />
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
