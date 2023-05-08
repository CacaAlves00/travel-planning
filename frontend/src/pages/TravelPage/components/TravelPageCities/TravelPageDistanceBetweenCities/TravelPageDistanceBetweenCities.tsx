import React, { useEffect } from 'react'
import './TravelPageDistanceBetweenCities.scss'
import { TravelCity } from '../../../../../api/travel'
import { convertToHoursAndMinutes } from '../../../../../util/convertToHoursAndMinutes'

type TravelPageDistanceBetweenCitiesProps = {
    distance: number 
    duration: number
}

function TravelPageDistanceBetweenCities({ distance, duration }:
    TravelPageDistanceBetweenCitiesProps) {

    const [hoursString, minutesString] = convertToHoursAndMinutes(duration)

    return (
        <div className='distance-between-cities'>
            <img
                src='/arrow_downward_red.svg'
                alt='Arrow down icon'
            />
            <span>{hoursString}h {minutesString} min ({distance} km)</span>
        </div>
    )
}

export default TravelPageDistanceBetweenCities