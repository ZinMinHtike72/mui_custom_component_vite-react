import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTheme } from '@emotion/react'
import Cus_Switch from './components/Switch/Cus_Switch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Cus_Switch label={"Custom_Switch"} />
    </div >
  )
}

export default App
