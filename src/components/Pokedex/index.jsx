import PokeCard from '../PokeCard'
import Filter from '../Filter'
import {useState, useEffect} from 'react'
import Pagination from '../Pagination'
import Pokemon from '../../OOP/Pokemon'
import pokedexImage from '../../assets/pokedex.png'
import Stats from '../Stats'
import pokeball from '../../assets/pokeball2.png'

const pokedexLogo = 'https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg'



const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [filterValue, setFilter] = useState('all')
    const [page, setPage] = useState(1)
    const [filtered, setFiltered] = useState([])
    const [displayPokemons, setDiplay] = useState([])
    const [statsFilter, setStats] = useState({hp: '1', attack: '1', defense: '1'})
    const [bigScreen, setBigScreen] = useState(pokeball)




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


  async function filter(data){
    let filtered = []
    for(let i = 0; i < data.length; i++){
      const pokemon = await Pokemon.buildPokemon(data[i].url)
      // console.log('filtering', pokemon.stats)
      // console.log(statsFilter.hp < pokemon.stats[0].value && statsFilter.attack < pokemon.stats[1].value && statsFilter.defense < pokemon.stats[2].value)
      if(statsFilter.hp < pokemon.stats[0].value && statsFilter.attack < pokemon.stats[1].value && statsFilter.defense < pokemon.stats[2].value )
          {if(filterValue == 'all'){
            filtered.push(data[i])
      
          }else if(pokemon.types.includes(filterValue)){
            filtered.push(data[i])
          }
      }}
    console.log('filterd: ', filtered)
    setFiltered(filtered)
  }


  async function setPokemonsDisplay(){
    
    console.log('pokemons:', pokemons.length)
    console.log('filtered:', filtered.length)

    if(pokemons.length==0){
      console.log('fetching')
      const response = await fetchData()
      setPokemons(response)

    }
    else if(filtered==0){
      console.log('filtering')
      const filtered = filter(pokemons)
      setFiltered(filtered)
    }
    
    else{
      console.log('here')
      const toDisplay = []

      for(let i = (page-1)*8 ; i < (page)*8; i++){
          if(filtered[i]){
            toDisplay.push(filtered[i])}
      }

      console.log('display:', toDisplay)
      setDiplay(toDisplay)
      //console.log('display2:', displayPokemons)
    }
  }

  useEffect(()=>{
    filter(pokemons)
    setPage(1)
  }, [filterValue, statsFilter])

  useEffect(()=> {  
      console.log('rendering')
      setPokemonsDisplay()
  }, [pokemons, page, filtered])


  return (
    <div className="Pokedex">
      <div className="pokeImage">
        <img src={pokedexImage}/>
        <div className="pokecard-container">
          <>
            {displayPokemons.map((pokemon, index)=>
            <PokeCard pokemonURL={pokemon.url} key={index} setBigScreen={setBigScreen}/>)}
          </>
        </div>
        <div className="pokemon-container">
          <p>Loading...</p>
          <img src= {bigScreen}></img>
        </div>
        <div className="type-container">
          <Filter setFilter = {setFilter}/>
        </div>

        <div className="stat-container">
          <Stats setFilter = {setStats} statsFilter={statsFilter}/>
        </div>

        <div className="pagination-container">
          
          <Pagination page={page} length={filtered == undefined ? pokemons.length : filtered.length} setPage={setPage}/>
        </div>

      </div>

  
    </div>
  )
}
 
export default Pokedex;