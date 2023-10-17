import { useState } from 'react'

import './App.css'
import {Pokedex} from './components'

const data = {
  pokemon: [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      stats:{
        HP: '100HP',
        Attack: 98,
        Defense: 85,
        Speed: 100
      }
      },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        stats:{
          HP: '600HP',
          Attack: 34,
          Defense: 85,
          Speed: 5
        }
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        stats:{
          HP: '1000HP',
          Attack: 98,
          Defense: 78,
          Speed: 900
        }
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        stats:{
          HP: '10HP',
          Attack: 5,
          Defense: 5,
          Speed: 100
        }
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        stats:{
          HP: '100HP',
          Attack: 98,
          Defense: 85,
          Speed: 100
        }
    },
    
  ]
}

console.log(data)

function App() {

  return (
    <div>
      <h1>Welcome to the Pokemon App</h1>
      <Pokedex data={data}/>
    </div>
   
  )
}

export default App
