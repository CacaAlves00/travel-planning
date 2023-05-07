import React, { useEffect, useState } from 'react'
import './TravelsPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import AddButton from '../../components/AddButton/AddButton'
import SearchInput from '../../components/SearchInput/SearchInput'
import Travel, { deleteTravel, getTravels } from '../../api/travel'
import ListItem from '../../components/ListItem/ListItem'


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
    <article className='travels-page  fade-in'>
      <PageHeader />

      <main>
        <section id='inputs'>
          <AddButton />
          <SearchInput 
          value={travelsFilter}
          onChange={(value) => setTravelsFilter(value)}
          placeholder='Filtrar viagem...' 
          />
        </section>

        <section id='travels'>
          {
            travels.map(travel => (
              <ListItem
                title={`Viagem #${travel.id}`}
                onDelete={async () => {
                  await deleteTravel(travel.id)
                  fetchData()
                }}
              />
            ))
          }
        </section>
      </main>
    </article>
  )
}

export default TravelsPage