import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cus_Button from './components/Button/Cus_Button'
import Cus_Form_Input from './components/Text_Field/Cus_Form_Input'
import { useTheme } from '@emotion/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Cus_Button variant='contained' sx={{
        width: 200
      }}  >
        Custom button
      </Cus_Button>
    </div >
  )
}

export default App
