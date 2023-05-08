import { useContext } from 'react'
import { createContext } from 'react'
import Travel from '../../../api/travel'

type TravelsPageContextType = {
    travels: Travel[]
    setTravels: React.Dispatch<React.SetStateAction<Travel[]>>
    travelsFilter: string
    setTravelsFilter: React.Dispatch<React.SetStateAction<string>>
    fetchData: () => void
}

export const TravelsPageContext = createContext<TravelsPageContextType>({
    travels: [],
    setTravels: () => { },
    travelsFilter: '',
    setTravelsFilter: () => { },
    fetchData: () => { },
})

export const useTravelsPageContext = () => useContext(TravelsPageContext)