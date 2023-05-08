import React, { useEffect, useState } from 'react'
import Travel from '../../../api/travel'
import { getDistanceBetweenCities } from '../../../api/distanceBetweenCities'

export type DistanceDuration = {
    distanceInKms: number
    durationInHours: number
}

function useGetDistancesAndDurationsBetweenCities(travel?: Travel):
    [DistanceDuration[], DistanceDuration] {

    const [distancesAndDurations, setDistancesAndDurations] = useState<DistanceDuration[]>([])
    const [totalDistanceAndDuration, setTotalDistanceAndDuration] = useState<DistanceDuration>({
        distanceInKms: 0, durationInHours: 0
    })

    useEffect(() => {
        async function fetchDistancesAndTimes() {
            if (typeof travel === 'undefined')
                return

            const origins = travel?.cities
                .reduce((acc, cur) => `${acc}${cur.latitude},${cur.longitude};`, '')

            const destinations = travel?.cities
                .reduce((acc, cur) => `${acc}${cur.latitude},${cur.longitude};`, '')

            const [distances, durations] =
                await getDistanceBetweenCities(origins, destinations)

            const distancesAndDurationsLength = distances.length
            const tmpDistancesAndDuration: DistanceDuration[] = []
            const tmpTotalDistanceAndDuration: DistanceDuration = {
                distanceInKms: 0,
                durationInHours: 0
            }

            const penultimateElementIdx = distancesAndDurationsLength - 2
            for (let idx = 0; idx <= penultimateElementIdx; idx++) {
                const distanceInKmsToNextCity = distances[idx][idx + 1] / 1000
                const durationInHoursToNextCity = durations[idx][idx + 1] / 60 / 60

                tmpDistancesAndDuration.push({
                    distanceInKms: distanceInKmsToNextCity,
                    durationInHours: durationInHoursToNextCity
                })

                tmpTotalDistanceAndDuration.distanceInKms += distanceInKmsToNextCity
                tmpTotalDistanceAndDuration.durationInHours += durationInHoursToNextCity
            }

            setDistancesAndDurations(tmpDistancesAndDuration)
            setTotalDistanceAndDuration(tmpTotalDistanceAndDuration)

        }

        fetchDistancesAndTimes()
    }, [travel])

    return [distancesAndDurations, totalDistanceAndDuration]
}

export default useGetDistancesAndDurationsBetweenCities