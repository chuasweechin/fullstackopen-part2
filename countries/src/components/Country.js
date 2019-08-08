import React from 'react'

const Country = ({ country, handleFilterChange }) => {
    return (
        <li>
            { country.name }
            <button value={ country.name } onClick={ handleFilterChange }>show</button>
        </li>
    )
}

export default Country