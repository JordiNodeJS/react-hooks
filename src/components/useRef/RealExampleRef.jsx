import { useState } from 'react'
import MultipleCustomHooks from '../MultipleCustomHooks/MultipleCustomHooks'

const RealExampleRef = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Real Example Ref</h1>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => setShow(!show)}
      >Show / Hide</button>
      {show && <MultipleCustomHooks />}
      <hr />

    </>
  )
}
export default RealExampleRef
