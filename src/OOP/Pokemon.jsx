class Pokemon{
    constructor({id, stats, types, height, weight, name, sprites}){
        this.pokeID = id
        this.stats = stats.map(stat => {return ({name: stat.stat.name, value: stat.base_stat})})
        this.types = types.map(type => type.type.name)
        this.height = height
        this.weight = weight
        this.name = name
        this.img =  sprites.other["official-artwork"]["front_default"]
    }

    static async buildPokemon(url){
        try{
            const response = await fetch (url)
            const data = await response.json()
            //console.log('data: ', data)
            
            const pokemon =  new Pokemon(data)
            //console.log("pokemon: ", pokemon)
            return pokemon

        }catch(error){
            console.log(error)
        }
    }

    pokeCardBuilder(){
        console.log('pokebuilder')
        console.log(this.stats)
        return(
            <div className="pokecard" key={this.pokeID}>
                <h3>{this.name}</h3>
                <img src={this.img}></img>
                <p>Types: {this.types.join(', ')}</p>
                <div className="stats" >
                    <h5>Stats</h5>
                    {this.stats.map(stat=> 
                        <p>{stat.name}: {stat.value}</p>)}
                </div>
            </div>  
        )
    
    }
}

export default Pokemon