import React from 'react'
import './TravelPageCities.scss'
import { useTravelPageContext } from '../../util/TravelPageContext'
import TravelPageCity from './TravelPageCity/TravelPageCity'
import TravelPageDistanceBetweenCities from './TravelPageDistanceBetweenCities/TravelPageDistanceBetweenCities'
import useGetDistancesBetweenCities from '../../hooks/useGetDistancesAndDurationsBetweenCities'
import { convertToHoursAndMinutes } from '../../../../util/convertToHoursAndMinutes'
import { TravelCity } from '../../../../api/travel'

function TravelPageCities() {

  const { travel } = useTravelPageContext()

  const {
    distancesAndDurationsBetweenCities,
    totalDistancesAndDurationsBetweenCities
  } = useTravelPageContext()

  function shouldShowDistancesAndDurations(cities: TravelCity[], idx: number) {

    const distancesAndDurationsIsEmpty =
      (typeof distancesAndDurationsBetweenCities === 'undefined') ||
      (distancesAndDurationsBetweenCities.length === 0)

    if (distancesAndDurationsIsEmpty) return false

    // Disregard last city because the last city
    // doesnt have distance to anywhere (it's the end of travel)
    const distancesAndDurationsIsSameLengthThanCities =
      distancesAndDurationsBetweenCities.length === (cities.length - 1)

    if (!distancesAndDurationsIsSameLengthThanCities)
      return false

    const isNotLastElement = idx !== (cities.length - 1)
    return isNotLastElement

  }

  return (
    <section className='cities'>
      {
        travel?.cities
          .map((city, idx, cities) => (
            <>
              <TravelPageCity city={city} />
              {
                (shouldShowDistancesAndDurations(cities, idx)) &&
                <TravelPageDistanceBetweenCities
                  distance={distancesAndDurationsBetweenCities[idx].distanceInKms}
                  duration={distancesAndDurationsBetweenCities[idx].durationInHours}
                />
              }
            </>
          ))
      }
    </section>
  )
}

export default TravelPageCities