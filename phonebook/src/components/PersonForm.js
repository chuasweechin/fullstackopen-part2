import React from 'react'

const PersonForm = ({ addContact, handleNameChange, handleNumberChange }) => {
    return (
        <form onSubmit={ addContact }>
            <div>
                name:
                <input onChange={ handleNameChange }/>
            </div>
            <div>
                number:
                <input onChange={ handleNumberChange }/>
            </div>

            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm