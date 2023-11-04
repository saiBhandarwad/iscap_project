import { useState } from 'react'
import Features from './components/features/Features'
import UseCase from './components/useCases/UseCase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UseCase/>
     <span>Another Component Here</span>
     <Features/>
    </>
  )
}

export default App
