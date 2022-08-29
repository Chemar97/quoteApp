import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import colors from './colors.json'
import phrases from './phrases.json'
import QuoteBox from './component/QuoteBox'
import ButtonComponent from './component/ButtonComponent'

function App() {

  const [BgColor, setBgColor] = useState(0)
  const [indexPhrase, setIndexPhrase] = useState(0)

  const index = () =>{
    setBgColor(Math.floor(Math.random()* colors.length))
    setIndexPhrase(Math.floor(Math.random()* phrases.length))
  }
  
  document.body.style.background = `${colors[BgColor]}`

  return (
    <div className="App">
      <QuoteBox colors={colors} 
      BgColor={BgColor} 
      phrases={phrases} 
      indexPhrase={indexPhrase}
      />
      <ButtonComponent index={index}
      colors={colors}
      BgColor={BgColor}
      />
    </div>
  )
}
export default App
