import { useState, useEffect } from 'react'
import Pokemon from '../../OOP/Pokemon'
import pokeball from '../../assets/pokeball2.png'

 const PokeCard = ({pokemonURL, setBigScreen}) => {
    //console.log(pokemonURL)

    const [reactObject, setReactObject] = useState()

    useEffect(()=>{
        getPokemon()
    },[pokemonURL]
    )

    function handleHover(e){
        console.log("in")
        console.log(e.target)
        setBigScreen(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.target.id}.png`)
    }

    function handleHoverOut(){
        console.log("out")
        setBigScreen(pokeball)
    }


    async function getPokemon(){
        //console.log('url:', pokemonL)
        const pokemon = await Pokemon.buildPokemon(pokemonURL)
        //console.log(filterValue, pokemon.types)
        let Object = pokemon.pokeCardBuilder(handleHover, handleHoverOut)
        setReactObject(Object)}

    return ( 
        reactObject 
        );


 }
  
 export default PokeCard;


