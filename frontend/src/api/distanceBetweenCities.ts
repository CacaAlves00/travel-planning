import { TravelCity } from './travel'
import axios from 'axios'

export async function getDistanceBetweenCities(origins: string, destinations: string) {

    const options = {
        method: 'GET',
        url: 'https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix',
        params: {
            origins,
            destinations
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'trueway-matrix.p.rapidapi.com'
        }
    }

    try {
        const response = await axios.request(options)
        const distances: number[][] = response.data.distances
        const durations: number[][] = response.data.durations

        return [distances, durations]

    } catch (error) {
        console.error(error)
        return []
    }
}