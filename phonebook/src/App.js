import React, { useState, useEffect } from 'react'
import personService from './services/persons'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
    const [ persons, setPersons] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')

    const personsToShow = newFilter.length === 0 ? persons
                            : persons.filter(person => person.name.search(newFilter) >= 0)

    useEffect(() => {
        const dataHook = () => {
            personService
                .getAll()
                .then(initialPersons => {
                    setPersons(initialPersons)
                })
        }

        dataHook()
    }, []);

    const addContact = (e) => {
        e.preventDefault();

        const newPersonObject = {
            name: newName,
            number: newNumber
        }

        const msg = `${ newName } is already added to phonebook, replace the old number with a new one?`
        const duplicatePerson = persons.find(p => p.name === newName);

        // using truthy to check if duplicate is found
        if (duplicatePerson) {
            if (window.confirm(msg) === true) {
                personService
                    .update(duplicatePerson.id, newPersonObject)
                    .then(returnedPerson => {
                        setPersons(persons.map(p => p.id !== duplicatePerson.id ? p : returnedPerson))
                    })
            }
        } else {
            personService
                .create(newPersonObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                })
        }
    }

    const destroyContact = (e) => {
        const id = Number(e.target.id)
        const msg = `Do you really want to delete ${ e.target.name }?`

        if (window.confirm(msg) === true) {
            personService
                .destroy(id)
                .then(destroyedPerson => {
                    setPersons(persons.filter(p => p.id !== id))
                })
        }
    }

    const handleNameChange = (e) => setNewName(e.target.value)
    const handleNumberChange = (e) => setNewNumber(e.target.value)
    const handleFilterChange = (e) => setNewFilter(new RegExp(e.target.value, 'ig'))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter
                handleFilterChange={ (e) => { handleFilterChange(e) } }
            />

            <h2>Add a new</h2>
            <PersonForm
                addContact={ (e) => addContact(e) }
                handleNameChange={ (e) => handleNameChange(e) }
                handleNumberChange= { (e) => handleNumberChange(e) }
            />

            <h2>Numbers</h2>
            <Persons
                persons={ personsToShow }
                destroyContact={ (e) => destroyContact(e) }
            />
        </div>
    )
}

export default App