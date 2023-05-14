import { useEffect, useState } from 'react'
import './App.css'

function App() {
   const [backendData, setBackendData] = useState([{}])

   useEffect(() => {
    fetch('http://localhost:5100/api').then(
      resp => resp.json()
    ).then(
      data => setBackendData(data)
    ).catch(
      e => console.log(e)
    )
   }, [])

   console.log(backendData);

  return (
    <div></div>
  )
}

export default App
