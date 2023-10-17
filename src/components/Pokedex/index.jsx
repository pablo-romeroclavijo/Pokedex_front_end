import Pokecard from '../PokeCard'

const Pokedex = ({data}) => {

    return (
    <div className="Pokedex">
        <h2>Your Pokedex</h2>
            <div className="pokemonlist">
            {data.pokemon.map((pokemon) => <Pokecard pokemon={pokemon} key={pokemon.id}/>)}
            </div>
    </div>)
}
 
export default Pokedex;