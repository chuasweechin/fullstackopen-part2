import React from 'react'

import Person from './Person'

const Persons = ({ persons }) => {
    const personElements = persons.map((e) => {
        return (
            <Person key= { e.id } person={ e }/>
        )
    });

    return (
        <ul>
            { personElements }
        </ul>
    )
}

export default Persons