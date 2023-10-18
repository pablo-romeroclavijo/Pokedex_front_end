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
                <Pagination page={page} length={pokemons.length} setPage={setPage}/>
                <>
                  {const displayPokemons = pokemons.slice(0,10);
                  displayPokemons.map(pokemon=>
                     {<PokeCard filterValue={filterValue} pokemonURL={pokemon.url} setFilter = {setFilter} key={index} page={page} index={index}/>}
                    )
                  }
              
                  
                </>

            </div>
    </div>)
}
 
export default Pokedex;