import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkoutForm from './WorkoutForm.jsx'
import BurnSummary from './BurnSummary.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WorkoutForm />
      <BurnSummary />
    </>
  )
}

export default App
