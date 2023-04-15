import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cus_Form_Input from './components/Text_Field/Cus_Form_Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Cus_Form_Input label={"Email"} placeholder='example@gmail.com' sx={{
        width: 300
      }} />
    </div>
  )
}

export default App
