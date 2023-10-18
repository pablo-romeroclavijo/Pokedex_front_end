import { useState, useEffect } from 'react'
import Pokemon from '../../OOP/Pokemon'

 const PokeCard = ({pokemonURL, filterValue, setFilter}) => {
    //console.log(pokemonURL, filterValue)

    const [reactObject, setReactObject] = useState()

    {useEffect(()=> {
            getPokemon()
            console.log('fetching2')
        },[filterValue])


  

    async function getPokemon(){
        //console.log('url:', pokemonL)
        const pokemon = await Pokemon.buildPokemon(pokemonURL)
        //console.log(filterValue, pokemon.types)
        let Object = undefined
        if(filterValue == 'all'){
             Object = pokemon.pokeCardBuilder()
        }else if(pokemon.types.includes(filterValue)){
            Object = pokemon.pokeCardBuilder()
        }else{
            Object = undefined
        }
        setReactObject(Object)}}

    return ( 
        reactObject 
        );


 }
  
 export default PokeCard;


