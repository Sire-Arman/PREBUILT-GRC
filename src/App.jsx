import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GRCWebsite from './pages/GRCWebsite'
import SwastikGRCWebsite from './pages/Template2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <GRCWebsite /> */}
    <SwastikGRCWebsite />
    </>
  )
}

export default App
