import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'
import './MultipleCustomHooks.css'
const MultipleCustomHooks = () => {
  const url = 'https://breakingbadapi.com/api/quotes/'

  const { counter, increment } = useCounter(1)

  const { data, loading } = useFetch(`${url}${counter}`)

  const { quote, author } = !!data && data[0]
  console.log(quote, author)

  return (
    <>
      <h1>Breaking Bad Api</h1>
      <hr />
      {loading ? (
        <p className='alert alert-info text-center'>Loading...</p>
      ) : (
        <section>
          <main className='text-end'>
            <blockquote className='blockquote'>{quote}</blockquote>
          </main>
          <footer className='blockquote-footer text-end'>
            <cite>{author}</cite>
          </footer>
          <button
            onClick={increment}
            type='button'
            className='btn btn-primary mt-4 text-start'
          >
            Siguiente Cita
          </button>
        </section>
      )}
    </>
  )
}

export default MultipleCustomHooks
