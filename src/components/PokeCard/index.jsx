import { useState, useEffect } from 'react'
import Pokemon from '../../OOP/Pokemon'

 const PokeCard = ({pokemonURL}) => {
    console.log(pokemonURL)

    const [reactObject, setReactObject] = useState()

    useEffect(()=> {
                getPokemon()
                console.log('fetching2')
            }, [])

    async function getPokemon(){
        console.log('url:', pokemonURL)
        const pokemon = await Pokemon.buildPokemon(pokemonURL)
        console.log(pokemon)
        const Object = pokemon.pokeCardBuilder()
        console.log("object:", Object)
        setReactObject(Object)}

    return ( 
        reactObject 
        );


 }
  
 export default PokeCard;


// async function PokeCard ({pokemonURL}) {
//     console.log(pokemonURL)

//     // const [reactObject, setReactObject] = useState()

//     // async function getPokemon(){
//     //     console.log('url:', pokemonURL)
//     //     const pokemon = await Pokemon.buildPokemon(pokemonURL)
//     //     console.log(pokemon)
//     //     const Object = pokemon.pokeCardBuilder()
//     //     setReactObject(Object)

//     // }

//     // useEffect(()=> {
//     //     getPokemon()
//     //     console.log('fetching2')
//     // }, [])


//     return (
//         <p>pablo</p>
//         //reactObject
//     );
// }
 
// export default PokeCard;

