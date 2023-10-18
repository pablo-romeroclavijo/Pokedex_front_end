import PokeCard from '../PokeCard'
import Filter from '../Filter'
import {useState, useEffect} from 'react'


const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])

  
    async function fetchData(){
      console.log('fetching')
      try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
        const data = await response.json()
        const results = data.results
        console.log('data: ', results)
        setPokemons(results)
      }catch(error){
        console.log(error)
      }
    }

    useEffect(()=> {
      fetchData()
      console.log('fetching')
  }, [])

    return (
    <div className="Pokedex">
        <h2>Your Pokedex</h2>
            <div className="pokemonlist">
                <Filter />
                {pokemons.map((pokemon, index) => 
                  <PokeCard pokemonURL={pokemon.url} key={index}/>
                )
            }
            </div>
    </div>)
}
 
export default Pokedex;