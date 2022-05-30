import useFetch from '../../hooks/useFetch'
import './MultipleCustomHooks.css'
const MultipleCustomHooks = () => {
  const url = 'https://breakingbadapi.com/api/quotes/1'
  const { data } = useFetch(`${url}`)

  const { quote, author } = !!data && data[0]
  console.log(quote, author)

  return (
    <>
      <h1>Breaking Bad Api</h1>
      <hr />
      <section>
        <main   className='text-end'>
          <blockquote className='blockquote'>{quote}</blockquote>
        </main>
        <footer className='blockquote-footer text-end'>
          <cite>{author}</cite>
        </footer>
      <button type='button' className='btn btn-primary mt-4 text-start'>
        Siguiente Frase
      </button>
      </section>
    </>
  )
}

export default MultipleCustomHooks
