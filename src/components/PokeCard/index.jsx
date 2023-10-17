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
        <span className="stats">
            <h5>Stats</h5>
            {console.log(Object.keys(pokemon.stats))}
            {Object.keys(pokemon.stats).map(key => 
                <p>{key} : {pokemon.stats[key]}</p>)}
        </span>
    </div>  
    );
}
 
export default PokeCard;