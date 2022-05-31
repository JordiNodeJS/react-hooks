import { useEffect, useState, useRef } from 'react'

const useFetch = url => {
  const isMounted = useRef(true)

  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setState({ data: null, loading: true, error: null })
    fetch(url)
      .then(res => res.json())
      .then(
        data =>
          isMounted ?
          setTimeout(_ => setState({ data, loading: false, error: null }), 2000):
          console.log('useFetch: isMounted: false')
      )
  }, [url])

  return state
}

export default useFetch
