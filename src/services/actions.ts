import { getToken } from './storage'
import type { ActionsListType, Data } from '../types/actionsType'

const API_URL: string =
  'https://dev.api.bekindnetwork.com/api/v1/actions/admin-list'

type filterType = {
  pageNumber: string
  pageSize: string
  [key: string]: string
}

export async function listActions(filters: filterType): Promise<Data> {
  const userToken = getToken()
  const queryParams = new URLSearchParams(filters).toString()
  const response = await fetch(`${API_URL}?${queryParams}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`,
    },
  })

  if (!response.ok) {
    const dataError = await response.json()
    throw new Error(dataError.message)
  }

  const data = await response.json() as ActionsListType

  return data.data
}
