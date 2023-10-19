import { useState, useEffect } from 'react'
import Pokemon from '../../OOP/Pokemon'

 const PokeCard = ({pokemonURL}) => {
    //console.log(pokemonURL)

    const [reactObject, setReactObject] = useState()

    useEffect(()=>{
        getPokemon()
    },[pokemonURL]
    )


    async function getPokemon(){
        //console.log('url:', pokemonL)
        const pokemon = await Pokemon.buildPokemon(pokemonURL)
        //console.log(filterValue, pokemon.types)
        let Object = pokemon.pokeCardBuilder()
        setReactObject(Object)}

    return ( 
        reactObject 
        );


 }
  
 export default PokeCard;


