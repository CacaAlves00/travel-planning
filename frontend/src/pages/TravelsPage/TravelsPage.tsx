import React, { useEffect, useState } from 'react'
import './TravelsPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import AddButton from '../../components/AddButton/AddButton'
import SearchInput from '../../components/SearchInput/SearchInput'
import Travel, { createTravel, deleteTravel, getTravels } from '../../api/travel'
import ListItem from '../../components/ListItem/ListItem'
import { Link } from 'react-router-dom'


function TravelsPage() {

  const [travels, setTravels] = useState<Travel[]>([])
  const [travelsFilter, setTravelsFilter] = useState<string>('')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const fetchedData = await getTravels()
    setTravels(fetchedData)
    console.log(fetchedData)
  }

  return (
    <article className='travels-page  fade-in'>
      <PageHeader />

      <main>
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

        <section id='travels'>
          {
            travels
            .filter(travel => 
              travel._id.toString().toLowerCase()
              .includes(travelsFilter.toLowerCase()))
            .map(travel => (
              <Link to={`/travel/${travel._id}`}>
                <ListItem
                  title={`ID da viagem: ${travel._id}`}
                  onDelete={async (e) => {
                    e.preventDefault()
                    await deleteTravel(travel._id)
                    fetchData()
                  }}
                />
              </Link>
            ))
          }
        </section>
      </main>
    </article>
  )
}

export default TravelsPage