import { useState } from 'react'

const useArray = defaultValue => {
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
export default useArray
