import React from 'react'

import Person from './Person'

const Persons = ({ persons, destroyContact }) => {
    const personElements = persons.map((e) => {
        return (
            <Person
                key= { e.id }
                person={ e }
                destroyContact ={ destroyContact }
            />
        )
    });

    return (
        <ul>
            { personElements }
        </ul>
    )
}

export default Persons