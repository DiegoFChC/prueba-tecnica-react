import { useCallback, useEffect, useState } from 'react'
import { listActions } from '../services/actions'
import { useAppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import type { Data } from '../types/actionsType'

type useActionReturns = {
  data: Data | null
  updateFilters: (pageNumber: number, pageSize: number) => void
  filters: Record<string, number>
}

export function useAction(
  initialFilters = { pageNumber: 1, pageSize: 10 }
): useActionReturns {
  const { startLoading, stopLoading } = useAppContext()
  const [data, setData] = useState<Data | null>(null)
  const [filters, setFilters] = useState(initialFilters)

  const updateFilters = (pageNumber: number, pageSize: number) => {
    setFilters({ pageNumber, pageSize })
  }

  const fetchActions = useCallback(async () => {
    const { pageNumber, pageSize } = filters
    const parseFilters = {
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString(),
    }

    try {
      startLoading()
      const actionsList = await listActions(parseFilters)
      setData(actionsList)
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      } else {
        toast.error('Ocurrió un error inesperado')
      }
    } finally {
      stopLoading()
    }
  }, [filters])

  useEffect(() => {
    fetchActions()
  }, [fetchActions])

  return { data, updateFilters, filters }
}
