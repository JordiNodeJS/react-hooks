import { useRef } from 'react'

const FocusScreen = () => {
  const inputRef = useRef()
  console.log(inputRef);
  const handleClick = _ => inputRef.current.select()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '2rem',
        padding: '2rem',
      }}
    >
      <h1>Focus Screen</h1>
      <input
        ref={inputRef}
        type='text'
        className='form-control'
        placeholder='tu nombre'
      />
      <button onClick={handleClick} className='btn btn-outline-info mt-2'>
        Focus
      </button>
    </div>
  )
}

export default FocusScreen
