import PokeCard from '../PokeCard'
import Filter from '../Filter'
import {useState, useEffect} from 'react'


const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [filterValue, setFilter] = useState('all')



    async function fetchData(){
      //console.log('fetching')
      try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        const data = await response.json()
        const results = data.results
        //console.log('data: ', results)
        setPokemons(results)
      }catch(error){
        console.log(error)
      }
    }


    useEffect(()=> {
      fetchData()
  }, [filterValue])



  

    return (
    <div className="Pokedex">
        <h2>Your Pokedex</h2>
            <div className="pokemonlist">
                <Filter setFilter = {setFilter}/>
                
                {pokemons.map((pokemon, index) => 
                  <PokeCard filterValue={filterValue} pokemonURL={pokemon.url} setFilter = {setFilter} key={index}/>
                )
            }
            </div>
    </div>)
}
 
export default Pokedex;