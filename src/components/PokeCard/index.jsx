const PokeCard = ({pokemon, key}) => {

    const colorKey = {
        fire:'rgb(248, 0, 0)',
        water:'rgb(0, 0, 255)',
        normal:'rgb(0, 0, 0)',
        bug:'rgb(0, 248, 0)',
        flying:'rgb(204, 0, 102)',
    }
    return (
    
    <div className="pokecard" key={key}>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.image}></img>
        <p style={{color: colorKey[pokemon.type]}}> Type: {pokemon.type}</p>
        <div className="stats" style={{display:"none"}}>
            <p>Stats</p>
            {Object.keys(pokemon.stats).forEach(key => {console.log(key); <p>{key}</p>})}
        </div>
    </div>  
    );
}
 
export default PokeCard;