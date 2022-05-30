import { useEffect } from 'react'
import useForm from '../../hooks/useForm'
import './simpleForm.css'
const FormWithCustomHook = () => {
  const [valuesState, handleChange] = useForm({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = valuesState

  useEffect(_ => console.log('email changed'), [email])

  const handleSubmit = e => {
    e.preventDefault()
    console.log(valuesState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form with custom hook</h1>
      {name && <h2>{name}</h2>}
      <input
        className='form-control'
        type='text'
        name='name'
        placeholder='Tu nombre'
        autoComplete='off'
        value={name}
        onChange={handleChange}
      />
      <input
        className='form-control'
        type='email'
        name='email'
        placeholder='Tu email'
        autoComplete='off'
        value={email}
        onChange={handleChange}
      />
      <input
        className='form-control'
        type='password'
        name='password'
        placeholder='Tu password'
        value={password}
        onChange={handleChange}
      />
      <button className='btn btn-primary'>Save</button>
    </form>
  )
}
export default FormWithCustomHook
