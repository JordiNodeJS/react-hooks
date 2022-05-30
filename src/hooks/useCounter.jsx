import { useState } from 'react'

const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState)
  const reset = _ => setState(initialState)
  const increment = (factor) => setState(state + factor)
  const decrement = (factor) => setState(state - factor)

  return {
      state,
      reset,
      increment,
      decrement
  }
}

export default useCounter