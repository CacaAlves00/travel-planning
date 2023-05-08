import { useContext } from 'react'
import { createContext } from 'react'
import Travel from '../../../api/travel'
import { DistanceDuration } from '../hooks/useGetDistancesAndDurationsBetweenCities'

type TravelPageContextType = {
    travel: Travel | undefined
    setTravel: React.Dispatch<React.SetStateAction<Travel | undefined>>
    searchCity: string
    setSearchCity: React.Dispatch<React.SetStateAction<string>>
    fetchData: () => void
    distancesAndDurationsBetweenCities: DistanceDuration[]
    totalDistancesAndDurationsBetweenCities: DistanceDuration
}

export const TravelPageContext = createContext<TravelPageContextType>({
    travel: {_id: '-1', cities: []},
    setTravel: () => { },
    searchCity: '',
    setSearchCity: () => { },
    fetchData: () => { },
    distancesAndDurationsBetweenCities: [],
    totalDistancesAndDurationsBetweenCities: {distanceInKms: 0, durationInHours: 0}
})

export const useTravelPageContext = () => useContext(TravelPageContext)