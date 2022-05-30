import { useEffect } from "react"
const Message = ({ message }) =>{ 
    useEffect(() => {
        console.log(message)
        console.log('componente montado')
        const handleListener =e => console.log('🐋', e)
        document.querySelector('h2').addEventListener('mouseover', handleListener)
        return () => {
            console.log('componente desmontado')
            document.querySelector('h2').removeEventListener('mouseover', handleListener)
        }
    }, [])
    return(<h3>{message}</h3>)}
export default Message
