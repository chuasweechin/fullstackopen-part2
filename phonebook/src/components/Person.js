import React from 'react'

const Person = ({ person, destroyContact }) => {
    return (
        <li>
            { `${ person.name } - ${ person.number }` }
            <button name={ person.name } id={ person.id } onClick={ destroyContact }>delete</button>
         </li>
    )
}

export default Person