import React from 'react'
import './TravelPageFooter.scss'
import { convertToHoursAndMinutes } from '../../../../util/convertToHoursAndMinutes'
import { useTravelPageContext } from '../../util/TravelPageContext'

function TravelPageFooter() {

    const {
        distancesAndDurationsBetweenCities,
        totalDistancesAndDurationsBetweenCities
    } = useTravelPageContext()

    const [totalHours, totalMinutes] =
        convertToHoursAndMinutes(totalDistancesAndDurationsBetweenCities.durationInHours)

    const distancesAndDurationsIsEmpty = () => (
        (typeof distancesAndDurationsBetweenCities === 'undefined') ||
        (distancesAndDurationsBetweenCities.length === 0)
    )

    if (distancesAndDurationsIsEmpty())
        return <></>

    return (
        <footer className='travel-page-footer'>
            <span> {totalHours}h {totalMinutes} min</span>
            <span>Duração total</span>
            <span> ({totalDistancesAndDurationsBetweenCities.distanceInKms} km)</span>
        </footer>
    )
}

export default TravelPageFooter