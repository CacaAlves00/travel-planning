import React from 'react'
import './TravelPageInputs.scss'
import SearchInputAutocomplete from '../../../../components/SearchInputAutocomplete/SearchInputAutocomplete'
import { useTravelPageContext } from '../../util/TravelPageContext'
import { updateTravel } from '../../../../api/travel'
import { getCitiesByPrefix } from '../../../../api/city'

function TravelPageInputs() {

  const { searchCity, setSearchCity, travel, fetchData } = useTravelPageContext()

  return (
    <section className='inputs'>
      <SearchInputAutocomplete
        value={searchCity}
        onChange={(value) => setSearchCity(value)}
        onSelect={async (value) => {
          console.log(travel)
          if (typeof travel !== 'undefined') {
            await updateTravel(travel._id, {
              _id: travel._id,
              cities: [...travel.cities, value]
            })

            fetchData()
          }
        }}
        placeholder='Procurar cidade (digite pelo menos 3 letras)'
        autocomplete={(prefix) => getCitiesByPrefix(prefix)}
      />
    </section>
  )
}

export default TravelPageInputs