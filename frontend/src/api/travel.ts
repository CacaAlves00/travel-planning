import axios, { AxiosResponse } from 'axios'

export type Travel = {
    _id: number
    cities: string[]
}

export default Travel

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/travel`

export async function getTravels(): Promise<Travel[]> {
  const response: AxiosResponse<{ data: Travel[] }> = await axios.get(`${API_URL}`)
  return response.data.data
}

export async function getTravel(id: number): Promise<Travel> {
  const response: AxiosResponse<{ data: Travel }> = await axios.get(`${API_URL}/${id}`)
  return response.data.data
}

export async function createTravel(cities: string[]): Promise<Travel> {
  const response: AxiosResponse<{ data: Travel }> = await axios.post(`${API_URL}`, {cities})
  return response.data.data
}

export async function updateTravel(id: number, travel: Travel): Promise<void> {
  await axios.put(`${API_URL}/${id}`, travel)
}

export async function deleteTravel(id: number): Promise<void> {
  await axios.delete(`${API_URL}/${id}`)
}
