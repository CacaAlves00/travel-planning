import React, { useEffect, useState } from 'react'
import './TravelPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useParams } from 'react-router-dom';
import SearchInput from '../../components/SearchInput/SearchInput';
import Travel, { getTravel, updateTravel } from '../../api/travel';
import AddButton from '../../components/AddButton/AddButton';
import { getCitiesByPrefix } from '../../api/city';
import SearchInputAutocomplete from '../../components/SearchInputAutocomplete/SearchInputAutocomplete';
import ListItem from '../../components/ListItem/ListItem';
import { TravelPageContext } from './util/TravelPageContext';
import TravelPageInputs from './components/TravelPageInputs/TravelPageInputs';
import TravelPageCities from './components/TravelPageCities/TravelPageCities';

function TravelPage() {

  const params = useParams()
  const [travel, setTravel] = useState<Travel>()
  const [searchCity, setSearchCity] = useState<string>('')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const fetchedData = await getTravel(`${params['travelId']}`)
    setTravel(fetchedData)
  }

  return (
    <TravelPageContext.Provider
      value={{ travel, setTravel, searchCity, setSearchCity, fetchData }}
    >
    <article className='travel-page fade-in'>
      <PageHeader />

      <main>
    
        <TravelPageInputs />
        <TravelPageCities />
      </main>
    </article>
    </TravelPageContext.Provider>
  )
}

export default TravelPage