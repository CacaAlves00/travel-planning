import React from 'react'
import './TravelsPageTravels.scss'
import { useTravelsPageContext } from '../../util/TravelsPageContext'
import Travel from '../../../../api/travel'
import TravelListItem from './TravelsPageTravelListItem/TravelsPageTravelListItem'

function TravelsPageTravels() {

  const { travelsFilter, travels } = useTravelsPageContext()

  return (
    <section id='travels'>
      {
        travels
          .filter(travel =>
            travel._id.toString().toLowerCase()
              .includes(travelsFilter.toLowerCase()))
          .map(travel => (
            <TravelListItem travel={travel} />
          ))
      }
    </section>
  )
}

export default TravelsPageTravels