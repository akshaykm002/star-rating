import { useState } from 'react'
import './App.css'
import StarRating from './components/StarRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StarRating stars={5}/>
    
    </>
  )
}

export default App
