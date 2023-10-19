import { useState, useEffect} from 'react'



import './App.css'
import {Pokedex} from './components'
import pokeball from "./assets/pokeball.png"

const pokemonLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/538px-International_Pok%C3%A9mon_logo.svg.png'
const pokeballLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3RnbPovGn07f4mdhAzNqR4hrM1oQCna1sg&usqp=CAU'


function App() {
  return (
    <>
      <div className='header'>
        <h1 className='h1'>Welcome to the {<img src={pokemonLogo}/> } App</h1>
        <img className='pokeball' src={pokeball}/>
      </div>
      <Pokedex />
    </>
   
  )
}



export default App
