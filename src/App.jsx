import { useState } from 'react'
import {createHeader} from "./component/Header"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <div className='header' >
        {createHeader()}
      </div>
   </div>
  )
}

export default App
