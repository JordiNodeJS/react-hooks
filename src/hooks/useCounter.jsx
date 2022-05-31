import { useState } from 'react'

const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState)
  const reset = _ => setCounter(initialState)
  const increment = _ => setCounter(counter + 1)
  const decrement = _ => setCounter(counter - 1)

  return {
      counter,
      reset,
      increment,
      decrement
  }
}

export default useCounter