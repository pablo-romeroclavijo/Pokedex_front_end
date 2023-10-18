import { useState, useEffect} from 'react'

import './App.css'
import {Pokedex} from './components'

const pokemonLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/538px-International_Pok%C3%A9mon_logo.svg.png'



function App() {
  return (
    <div>
      <h1>Welcome to the {<img src={pokemonLogo}/> } App</h1>
      <Pokedex />
    </div>
   
  )
}



export default App
