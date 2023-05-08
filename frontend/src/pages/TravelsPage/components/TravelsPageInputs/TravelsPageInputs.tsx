import React, { useContext } from 'react'
import './TravelsPageInputs.scss'
import AddButton from '../../../../components/AddButton/AddButton'
import { createTravel } from '../../../../api/travel'
import SearchInput from '../../../../components/SearchInput/SearchInput'
import { useTravelsPageContext } from '../../util/TravelsPageContext'

function TravelsPageInputs() {

    const { fetchData, travelsFilter, setTravelsFilter } = useTravelsPageContext()

    return (
        <section id='inputs'>
            <AddButton
                onClick={async () => {
                    await createTravel([])
                    fetchData()
                }}
            />
            <SearchInput
                value={travelsFilter}
                onChange={(value) => setTravelsFilter(value)}
                placeholder='Filtrar viagem...'
            />
        </section>
    )
}

export default TravelsPageInputs