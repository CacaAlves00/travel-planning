import React from 'react'
import './TravelPageInputs.scss'
import SearchInputAutocomplete from '../../../../components/SearchInputAutocomplete/SearchInputAutocomplete'
import { useTravelPageContext } from '../../util/TravelPageContext'
import { updateTravel } from '../../../../api/travel'
import { City, getCitiesByPrefix } from '../../../../api/city'

function TravelPageInputs() {

  const { searchCity, setSearchCity, travel, fetchData } = useTravelPageContext()

  return (
    <section className='inputs'>
      <SearchInputAutocomplete<City>
        value={searchCity}
        onChange={(value) => setSearchCity(value)}
        onSelect={async (value) => {

          if (typeof travel !== 'undefined') {
            const reachedLimitLength =
              travel.cities.length > 24

            if (reachedLimitLength) return

            await updateTravel(travel._id, {
              _id: travel._id,
              cities: [
                ...travel.cities,
                {
                  name: value.completeName,
                  latitude: value.latitude,
                  longitude: value.longitude,
                }
              ]
            })

            fetchData()
          }
        }}
        placeholder='Procurar cidade (digite pelo menos 3 letras)'
        autocomplete={async (prefix) => getCitiesByPrefix(prefix)}
        getAutocompleteValue={val => val.completeName}
      />
    </section>
  )
}

export default TravelPageInputs