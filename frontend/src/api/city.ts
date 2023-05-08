import axios from 'axios'

interface city {
    city: string
    country: string
    region: string
    latitude: string
    longitude: string
}

export async function getCitiesByPrefix(prefix: string): Promise<string[]> {
    try {
        const options = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/places',
            params: {
                namePrefix: prefix
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        }

        const response = await axios.request(options)
        const cities: string[] = response
            .data
            .data
            .map((city: { name: string, country: string }) =>
                `${city.name}, ${city.country}`)
            .filter((elem: string, index: number, self: string[]) =>
                index === self.indexOf(elem)
            )


        return cities
    } catch (error) {
        console.error(error)
        return []
    }
}