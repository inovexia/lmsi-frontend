import { useCallback, useEffect, useState } from 'react'

export default function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [value, setValue] = useState()

  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    false && console.log(dependencies)
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [callback, dependencies])

  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])

  return { loading, error, value }
}
