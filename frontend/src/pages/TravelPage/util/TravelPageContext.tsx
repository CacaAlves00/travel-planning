import { useContext } from 'react'
import { createContext } from 'react'
import Travel from '../../../api/travel'

type TravelPageContextType = {
    travel: Travel | undefined
    setTravel: React.Dispatch<React.SetStateAction<Travel | undefined>>
    searchCity: string
    setSearchCity: React.Dispatch<React.SetStateAction<string>>
    fetchData: () => void
}

export const TravelPageContext = createContext<TravelPageContextType>({
    travel: {_id: '-1', cities: []},
    setTravel: () => { },
    searchCity: '',
    setSearchCity: () => { },
    fetchData: () => { },
})

export const useTravelPageContext = () => useContext(TravelPageContext)