import { useState, useEffect } from 'react'
import Message from './Message'
import './simpleForm.css'
const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  })

  const { name, email } = formState

  useEffect(() => {
    document.title = name.toUpperCase()
  }, [name])

  const handleChange = ({ target: { name, value } }) =>
    setFormState({ ...formState, [name]: value })

  return (
    <>
      <h1>useEffect</h1>
      <h2>{name}</h2>
      <hr />
      <input
        type='text'
        name='name'
        placeholder='Tu nombre'
        autoComplete='off'
        value={name}
        onChange={handleChange}
      />
      <input
        type='text'
        name='email'
        placeholder='Tu email'
        autoComplete='off'
        value={email}
        onChange={handleChange}
      />
      { name.toLowerCase() == 'john' && <Message message={`Hola ${name}`} /> }
    </>
  )
}
export default SimpleForm
