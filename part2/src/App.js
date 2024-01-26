import './App.css'
import { useState, useEffect } from 'react'
import Contact from './components/Contact'
import personService from './services/person'
import Filter from './components/Filter'
import AddContacts from './components/AddContacts'
import { Notification } from './components/Notification'

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
	const [errorMessage, setErrorMessage] = useState('')
	const [status, setStatus] = useState('')

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
			// alert(`${newName} Alredy in Phone Book`)
			// setNewName('')

			const person = persons.find(p => p.name === newName)

			if (person.number !== newPhoneNumber) {
				if (
					window.confirm(
						`${newName} is already in Phonebook, replace the number with a new one?`
					)
				) {
					const changeNumber = { ...person, number: newPhoneNumber }

					personService
						.updateContact(person.id, changeNumber)
						.then(returnedObject => {
							setPersons(
								persons.map(p => (p.id !== person.id ? p : returnedObject))
							)
							setErrorMessage(
								`The number is changed sucssfully to : ${newPhoneNumber}`
							)
							setStatus('success')

							setTimeout(() => {
								setErrorMessage('')
								setStatus('')
							}, 5000)
						})
				}
			} else {
				alert(`${newName} already in Phonebook`)
			}
			setNewName('')
			setNewPhoneNumber('')
		} else {
			const personObject = { name: newName, number: newPhoneNumber }
			personService.create(personObject).then(returnedObject => {
				setPersons(persons.concat(returnedObject))

				setErrorMessage(`${returnedObject.name} added`)
				setStatus('success')

				setTimeout(() => {
					setErrorMessage('')
					setStatus('')
				}, 5000)
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

	const handleDelete = id => {
		const person = persons.find(n => n.id === id)
		if (window.confirm(`Delete ${person.name}`)) {
			personService
				.deleteContact(id)
				.then(response => {
					setPersons(persons.filter(pers => pers.id !== id))
				})
				.catch(error => {
					setErrorMessage(`${JSON.stringify(error.response.data)}`)
					setStatus('error')
					
					setTimeout(() => {
						setErrorMessage(null)
						setStatus(null)
					}, 5000)
					setNewName('')
					setNewPhoneNumber('')
				})
		}
	}

	return (
		<div className='App'>
			<Notification status={status} message={errorMessage} />
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
			<Contact
				persons={personToDisplay}
				action={handleDelete}
				label={'Delete'}
			/>
		</div>
	)
}

export default App
