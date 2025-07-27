import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App