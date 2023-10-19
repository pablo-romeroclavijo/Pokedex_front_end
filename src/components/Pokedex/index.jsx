import PokeCard from '../PokeCard'
import Filter from '../Filter'
import {useState, useEffect} from 'react'
import Pagination from '../Pagination'


const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [filterValue, setFilter] = useState('all')
    const [page, setPage] = useState(1)
    const [displayPokemons, setDiplay] = useState([])



  async function fetchData(){
    //console.log('fetching')
    try{
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      const data = await response.json()
      const results = data.results
      console.log('data: ', results)
      return results
    }catch(error){
      console.log(error)
    }
  }

  async function setPokemonsDisplay(fetchData){
    console.log('pokemons:', pokemons.length)
    if(pokemons.length==0){
      console.log('fetching')
      const response = await fetchData()
      setPokemons(response)
      const display = pokemons.slice(0, 10)
      setDiplay(display)
    }else{
    const display = pokemons.slice(0, 10)
    setDiplay(display)
    console.log("displayPokemons:", displayPokemons)}
  }

  
useEffect(()=> {  
    setPokemonsDisplay(fetchData)
    console.log('rendering')
}, [filterValue, pokemons])




  

    return (
    <div className="Pokedex">
        <h2>Your Pokedex</h2>
            <div className="pokemonlist">
                <Filter setFilter = {setFilter}/>
                <Pagination page={page} length={pokemons.length} setPage={setPage}/>
                <>{console.log(displayPokemons)}</>
                <>
                    {displayPokemons.map((pokemon, index)=>
                      <PokeCard filterValue={filterValue} pokemonURL={pokemon.url} setFilter = {setFilter} key={index} page={page} index={index}/>
                    )}

                </>
              
            </div>
    </div>
    )
}
 
export default Pokedex;