import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

    const dataHook = async () => {
        const response = await axios.get('http://localhost:3001/persons')
        setPersons(response.data)
    }

    useEffect(dataHook, []);

    const addContact = (event) => {
        let duplicate = false;
        event.preventDefault();

        for (let i = 0; i < persons.length; i++) {
            if (persons[i].name.toLowerCase() === newName.toLowerCase()) {
                alert(`${ newName } has already been added to phonebook`);
                duplicate = true;
                break;
            }
        }

        if (duplicate === false) {
            setPersons(persons.concat({ id: persons.length + 1, name: newName, number: newNumber }));
        }
    }

    const handleNameChange = (event) => setNewName(event.target.value)
    const handleNumberChange = (event) => setNewNumber(event.target.value)
    const handleFilterChange = (event) => setNewFilter(new RegExp(event.target.value, 'ig'))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter
                handleFilterChange={ (e) => { handleFilterChange(e) } }
            />

            <h2>Add a new</h2>
            <PersonForm
                addContact={ (e) => { addContact(e) } }
                handleNameChange={ (e) => { handleNameChange(e) } }
                handleNumberChange= { (e) => { handleNumberChange(e) } }
            />

            <h2>Numbers</h2>
            <Persons
                persons={ personsToShow }
            />
        </div>
    )
}

export default App