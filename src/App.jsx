import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import colors from './colors.json'
import phrases from './phrases.json'

function App() {

  const [BgColor, setBgColor] = useState(0)
  const [indexPhrase, setIndexPhrase] = useState(0)

  const indexUser = () =>{
    setBgColor(Math.floor(Math.random()* colors.length))
    setIndexPhrase(Math.floor(Math.random()* phrases.phrase.length))

  }

  document.body.style.background = `${colors[BgColor]}`

  return (
    <div className="App">
      <div className='card'>
        <i style={{color: `${colors[BgColor]}`}} class="icon-quote fa-solid fa-quote-left"></i>
        <div className="phrases">
          <h2 style={{color: `${colors[BgColor]}`}}>{phrases.phrase[indexPhrase]}</h2>
          <h3 style={{color: `${colors[BgColor]}`}}>{phrases.Author[indexPhrase]}</h3>
        </div>
        <button onClick={indexUser} className='button-next'>
          <i class="icon-next fa-solid fa-circle-chevron-right" style={{color: `${colors[BgColor]}`}}></i>
        </button>
      </div>
    </div>
  )
}

export default App
