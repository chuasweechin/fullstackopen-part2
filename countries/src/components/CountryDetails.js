import React from 'react'

import Languages from './Languages'

const CountryDetails = ({ country }) => {
    return (
        <div>
            <h1>{ country.name }</h1>
            <div>Capital: { country.capital }</div>
            <div>Population: { country.population }</div>

            <h2>Languages</h2>
            <Languages languages={ country.languages }/>

            <br/>

            <div>
                <img src={ country.flag } width="200px"/>
            </div>
        </div>
    )
}

export default CountryDetails