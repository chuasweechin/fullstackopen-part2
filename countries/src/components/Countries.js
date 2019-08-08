import React from 'react'

import Country from './Country'
import CountryDetails from './CountryDetails'

const Countries = ({ countries, filter, handleFilterChange }) => {
    let resultElements = "Please specific a filter"

    if (filter.length > 0) {
        if (countries.length === 1) {
            resultElements = <CountryDetails country={ countries[0] }/>
        }
        else if (countries.length > 10) {
            resultElements = "There are too many matches, please specific another filter"
        }
        else if (countries.length <= 10) {
            resultElements = countries.map((e) => {
                return (
                    <Country
                        key= { e.numericCode }
                        country={ e }
                        handleFilterChange={ handleFilterChange }
                    />
                )
            });
        }
    }

    return (
        <div>
            { resultElements }
        </div>
    )
}

export default Countries