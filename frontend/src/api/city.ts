import axios from 'axios'

export type City = {
    name: string
    completeName: string
    country: string
    countryCode: string
    region: string
    regionCode: string
    latitude: 25.309469444
    longitude: 55.342811111
}

export async function getCitiesByPrefix(prefix: string): Promise<City[]> {
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
        const cities: City[] = response
            .data
            .data
            .map((city: City) => ({
                ...city,
                completeName: `${city.name}, ${city.regionCode}, ${city.countryCode}`,
            })
            )
            .filter(
                (city: City, index: number, self: City[]) =>
                    self.findIndex((c: City) => c.completeName === city.completeName) === index
            )


        return cities
    } catch (error) {
        console.error(error)
        return []
    }
}