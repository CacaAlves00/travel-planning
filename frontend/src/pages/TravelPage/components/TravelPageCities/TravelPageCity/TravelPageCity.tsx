import React from 'react'
import './TravelPageCity.scss'
import ListItem from '../../../../../components/ListItem/ListItem'
import { useTravelPageContext } from '../../../util/TravelPageContext'
import { TravelCity, updateTravel } from '../../../../../api/travel'
import { swapElementWithNext, swapElementWithPrevious } from '../../../../../util/swapArrayElements'

type TravelPageCityProps = {
    city: TravelCity
}

function TravelPageCity({ city }: TravelPageCityProps) {

    const { travel, fetchData } = useTravelPageContext()

    const updateTravelOnDB = (cities: TravelCity[]): Promise<void> =>
        updateTravel(`${travel?._id}`, {
            _id: `${travel?._id}`,
            cities
        })

    return (
        <ListItem
            title={`${city.name}`}
            onDelete={async () => {
                if (typeof travel === 'undefined') return

                const citiesWithCurCityRemoved = travel
                    .cities
                    .filter(item => item.name !== city.name)

                await updateTravelOnDB(citiesWithCurCityRemoved)

                fetchData()
            }}
            onDownwards={async () => {
                if (typeof travel === 'undefined') return

                const citiesSwaped = swapElementWithNext(
                    [...travel.cities]
                    , travel?.cities.findIndex(item => city.name === item.name)
                )

                await updateTravelOnDB(citiesSwaped)

                fetchData()
            }}
            onUpwards={async () => {
                if (typeof travel === 'undefined') return

                const citiesSwaped = swapElementWithPrevious(
                    [...travel.cities]
                    , travel?.cities.findIndex(item => city.name === item.name)
                )

                await updateTravelOnDB(citiesSwaped)

                fetchData()
            }}
        />
    )
}

export default TravelPageCity