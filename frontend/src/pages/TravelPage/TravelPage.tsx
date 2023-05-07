import React from 'react'
import './TravelPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useParams } from 'react-router-dom';

function TravelPage() {
  
  const params = useParams()
  
  return (
    <article className='travel-page fade-in'>
      <PageHeader />
      {
        params['travelId']
      }
    </article>
  )
}

export default TravelPage