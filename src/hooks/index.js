import { useCallback, useEffect, useRef, useState } from 'react'

export const useArray = defaultValue => {
  const [array, setArray] = useState(defaultValue),
    push = element => {
      setArray(a => [...a, element])
    },
    replace = newValue => setArray(newValue),
    map = callback => setArray(a => [...a].map(callback)),
    filter = callback => {
      setArray(a => a.filter(callback))
    },
    sort = callback => setArray(a => [...a].sort(callback)),
    reverse = () => setArray(a => [...a].reverse()),
    update = (index, newElement) => {
      setArray(a => [
        ...a.slice(0, index),
        newElement,
        ...a.slice(index + 1, a.length - 1),
      ])
    },
    remove = index => {
      setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length - 1)])
    },
    clear = () => {
      setArray([])
    }

  return {
    array,
    setArray,
    push,
    replace,
    map,
    filter,
    sort,
    reverse,
    update,
    remove,
    clear,
  }
}

export const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState('idle')
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)
  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setStatus('pending')
    setValue(null)
    setError(null)
    return asyncFunction()
      .then(response => {
        setValue(response)
        setStatus('success')
      })
      .catch(error => {
        setError(error)
        setStatus('error')
      })
  }, [asyncFunction])
  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])
  return { execute, status, value, error }
}

export const useFetch = (url = '', options = null) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let isMounted = true

    setLoading(true)

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setData(data)
          setError(null)
        }
      })
      .catch(error => {
        if (isMounted) {
          setError(error)
          setData(null)
        }
      })
      .finally(() => isMounted && setLoading(false))

    return () => (isMounted = false)
  }, [url, options])

  return { loading, error, data }
}

export const useStorage = (key, defaultValue, storageObject) => {
  const isMounted = useIsMounted(),
    [value, setValue] = useState(() => {
      const jsonValue = storageObject.getItem(key)
      if (jsonValue != null) return JSON.parse(jsonValue)

      if (typeof initialValue === 'function') {
        return defaultValue()
      } else {
        return defaultValue
      }
    })

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key)
    storageObject.setItem(key, JSON.stringify(value))
  }, [key, value, storageObject])

  const remove = useCallback(() => {
    isMounted.current && setValue(undefined)
  }, [isMounted])

  return [value, setValue, remove]
}

export const useLocalStorage = (key, defaultValue) => {
  return useStorage(key, defaultValue, window.localStorage)
}

export const useSessionStorage = (key, defaultValue) => {
  return useStorage(key, defaultValue, window.sessionStorage)
}

export const useIsMounted = () => {
  const isMounted = useRef(false)
  useEffect(() => {
    isMounted.current = true
    return () => (isMounted.current = false)
  }, [])
  return isMounted
}

export const useTimeout = (callback, delay) => {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}

export const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay)
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [clear])
}

export const useToggle = defaultValue => {
  const [value, setValue] = useState(defaultValue),
    isMounted = useIsMounted(),
    toggleValue = value => {
      isMounted.current &&
        setValue(currentValue =>
          typeof value === 'boolean' ? value : !currentValue
        )
    }

  return [value, toggleValue]
}
