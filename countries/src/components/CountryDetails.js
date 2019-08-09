import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Languages from './Languages'

const CountryDetails = ({ country }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const dataHook = () => {
            axios
                .get(`https://api.apixu.com/v1/current.json?key=fda124a179ba417e8b4155251190908&q=${ country.name }`)
                .then(response => {
                    setWeather(response.data)
                })
        }

        dataHook()

    }, [country.name]);

    if (weather !== null) {
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

                <h2>Weather in { country.name }</h2>
                <div>Temperature: { weather.current.temp_c } Celsius</div>
                <div>Wind: { weather.current.wind_kph } kph direction { weather.current.wind_dir }</div>
                <div>
                    <img src={ weather.current.condition.icon } width="75px"/>
                </div>
            </div>
        )
    } else {
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

                <h2>Loading Weather for { country.name }....</h2>
            </div>
        )
    }


}

export default CountryDetails