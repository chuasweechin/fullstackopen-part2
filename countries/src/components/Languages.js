import React from 'react'

const Languages = ({ languages }) => {
    const languagesElements = languages.map((e) => {
        return (
            <li key= { e.name }>{ e.name }</li>
        )
    })

    return (
        <ul>
            { languagesElements }
        </ul>
    )
}

export default Languages