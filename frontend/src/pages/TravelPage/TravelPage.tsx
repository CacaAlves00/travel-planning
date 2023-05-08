import React, { useEffect, useState } from 'react'
import './TravelPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useParams } from 'react-router-dom';
import Travel, { getTravel, updateTravel } from '../../api/travel';
import { TravelPageContext } from './util/TravelPageContext';
import TravelPageInputs from './components/TravelPageInputs/TravelPageInputs';
import TravelPageCities from './components/TravelPageCities/TravelPageCities';
import useGetDistancesAndDurationsBetweenCities from './hooks/useGetDistancesAndDurationsBetweenCities';
import TravelPageFooter from './components/TravelPageFooter/TravelPageFooter';

function TravelPage() {

  const params = useParams()
  const [travel, setTravel] = useState<Travel>()
  const [searchCity, setSearchCity] = useState<string>('')
  const [distancesAndDurationsBetweenCities, totalDistancesAndDurationsBetweenCities]
    = useGetDistancesAndDurationsBetweenCities(travel)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const fetchedData = await getTravel(`${params['travelId']}`)
    setTravel(fetchedData)
  }

  return (
    <TravelPageContext.Provider
      value={{ 
        travel, setTravel, searchCity, setSearchCity, fetchData, 
        distancesAndDurationsBetweenCities, totalDistancesAndDurationsBetweenCities
      }}
    >
    <article className='travel-page fade-in'>
      <PageHeader />

      <main>
        <TravelPageInputs />
        <TravelPageCities />
      </main>

      <TravelPageFooter />

    </article>
    </TravelPageContext.Provider>
  )
}

export default TravelPage