import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Countries from './components/Countries'
import Filter from './components/Filter'

const App = () => {
    const [ countries, setCountries] = useState([])
    const [ newFilter, setNewFilter ] = useState('')

    const countriesToShow = newFilter.length === 0 ? countries
                            : countries.filter(country => country.name.toLowerCase().indexOf(newFilter) >= 0)

    useEffect(() => {
        const dataHook = () => {
            axios
                .get('https://restcountries.eu/rest/v2/all')
                .then((response) => {
                    setCountries(response.data)
                })
        }

        dataHook();

    }, []);

    const handleFilterChange = (e) => setNewFilter(e.target.value.toLowerCase())

    return (
        <div>
            <Filter
                handleFilterChange={ (e) => { handleFilterChange(e) } }
            />

            <Countries
                filter={ newFilter }
                countries={ countriesToShow }
                handleFilterChange={ (e) => { handleFilterChange(e) } }
            />
        </div>
    )
}

export default App