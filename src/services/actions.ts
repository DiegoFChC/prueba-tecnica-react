import { getToken } from './storage'
import type { ActionsListType, Data } from '../types/actionsType'
import { defaultImage } from '../utils/defaultImage'

const API_URL = import.meta.env.VITE_API_URL_LIST_CREATE

type filterType = {
  pageNumber: string
  pageSize: string
  [key: string]: string
}

type action = {
  name: string
  description: string
  color: `#${string}`
}

export async function listActions(filters: filterType): Promise<Data> {
  const userToken = getToken()
  const queryParams = new URLSearchParams(filters).toString()
  const response = await fetch(`${API_URL}/admin-list?${queryParams}`, {
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

export async function createAction({ name, description, color }: action) {
  const userToken = getToken()

  const blob = await defaultImage()
  const formData = new FormData()
  formData.append('name', name);
  formData.append('description', description);
  formData.append('color', color);
  formData.append('status', '1')
  formData.append('icon', blob, 'default-icon.png')

  const response = await fetch(`${API_URL}/admin-add`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    body: formData
  })

  if (!response.ok) {
    const dataError = await response.json()
    throw new Error(dataError.message)
  }

  const data = await response.json()

  return data
}