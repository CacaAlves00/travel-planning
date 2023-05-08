import { Link } from 'react-router-dom'
import ListItem from '../../../../../components/ListItem/ListItem'
import { swapElementWithNext, swapElementWithPrevious } from '../../../../../util/swapArrayElements'
import { useTravelsPageContext } from '../../../util/TravelsPageContext'
import './TravelsPageTravelListItem.scss'
import Travel, { deleteTravel } from '../../../../../api/travel'

type TravelListItemProps = {
  travel: Travel
}

function TravelsPageTravelListItem({ travel }: TravelListItemProps) {

  const { fetchData, travels, setTravels } = useTravelsPageContext()

  return (
    <Link to={`/travel/${travel._id}`}>
      <ListItem
        title={`ID da viagem: ${travel._id}`}
        onDelete={async () => {
          await deleteTravel(travel._id)
          fetchData()
        }}
        onDownwards={() => setTravels(
          swapElementWithNext<Travel>(
            [...travels],
            travels.findIndex(item => travel._id === item._id)
          )
        )}
        onUpwards={() => setTravels(
          swapElementWithPrevious<Travel>(
            [...travels],
            travels.findIndex(item => travel._id === item._id)
          )
        )} />
    </Link>
  )
}

export default TravelsPageTravelListItem
