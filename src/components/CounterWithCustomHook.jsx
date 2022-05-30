import styled from 'styled-components'
import  useCounter  from '../hooks/useCounter'
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background: pink;
  }
  &:active {
      color: darkred;
  }
`
const CounterWithCustomHook = () => {
    const {state, reset, increment, decrement} = useCounter(100)

return (
    <>
        <h1>Counter with Hook: {state}</h1>
        <hr />
        <Button onClick={ _ => increment(5) }  primary> +1 </Button>
        <Button onClick={ _ => decrement(7) } primary> -1 </Button>
        <Button onClick={ reset } primary> Reset </Button>
    </>
)
}


export default CounterWithCustomHook
