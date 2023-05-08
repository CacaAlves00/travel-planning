import React, { useEffect, useState } from 'react'
import './TravelsPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import Travel, { createTravel, deleteTravel, getTravels } from '../../api/travel'
import ListItem from '../../components/ListItem/ListItem'
import { TravelsPageContext } from './util/TravelsPageContext'
import TravelsPageInputs from './components/TravelsPageInputs/TravelsPageInputs'
import TravelsPageTravels from './components/TravelsPageTravels/TravelsPageTravels'


function TravelsPage() {

  const [travels, setTravels] = useState<Travel[]>([])
  const [travelsFilter, setTravelsFilter] = useState<string>('')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const fetchedData = await getTravels()
    setTravels(fetchedData)
  }

  return (
    <TravelsPageContext.Provider
      value={{ travels, setTravels, travelsFilter, setTravelsFilter, fetchData }}
    >
      <article className='travels-page fade-in'>
        <PageHeader />

        <main>
          <TravelsPageInputs />
          <TravelsPageTravels />
        </main>
        
      </article>
    </TravelsPageContext.Provider>
  )
}

export default TravelsPage