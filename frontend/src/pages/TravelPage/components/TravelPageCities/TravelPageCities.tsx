import React from 'react'
import './TravelPageCities.scss'
import { useTravelPageContext } from '../../util/TravelPageContext'
import ListItem from '../../../../components/ListItem/ListItem'

function TravelPageCities() {

  const { travel } = useTravelPageContext()

  return (
    <section className='cities'>
      {
        travel?.cities
          .map(city => (
            <ListItem
              title={`${city}`}
              onDelete={async () => {
                // await deleteTravel(travel._id)
                // fetchData()
              }}
              onDownwards={() => { }}
              onUpwards={() => { }}
            />
          ))
      }
    </section>
  )
}

export default TravelPageCities