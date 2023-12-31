import bug from '../assets/Logos/bug.png'
import dark from '../assets/Logos/dark.png'
import dragon from '../assets/Logos/dragon.png'
import electric from '../assets/Logos/electric.png'
import fairy from '../assets/Logos/fairy.png'
import fighting from '../assets/Logos/fighting.png'
import fire from '../assets/Logos/fire.png'
import flying from '../assets/Logos/flying.png'
import ghost from '../assets/Logos/ghost.png'
import grass from '../assets/Logos/grass.png'
import ground from '../assets/Logos/ground.png'
import ice from '../assets/Logos/ice.png'
import normal from '../assets/Logos/normal.png'
import poison from '../assets/Logos/poison.png'
import psychic from '../assets/Logos/psychic.png'
import rock from '../assets/Logos/rock.png'
import steel from '../assets/Logos/steel.png'
import water from '../assets/Logos/water.png'

import Pokedex  from '../components/Pokedex'

const logos = {
    "bug" : bug,
    "dark" : dark,
    "electric" : electric,
    "fairy" : fairy,
    "fighting" : fighting,
    "fire" : fire,
    "flying" : flying,
    "ghost"  : ghost,
    "grass" : grass,
    "ground" : ground,
    "ice" : ice,
    "normal" : normal,
    "poison" : poison,
    "psychic" :psychic,
    "rock" : rock,
    "steel" : steel,
    "water" : water,
    'dragon' : dragon
}



class Pokemon{

    constructor({id, stats, types, height, weight, name, sprites}){
        this.pokeID = id
        this.stats = stats.map(stat => {return ({name: stat.stat.name, value: stat.base_stat})})
        this.types = types.map(type => type.type.name)
        this.height = height
        this.weight = weight
        this.name = name[0].toUpperCase() + name.slice(1)
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

    pokeCardBuilder(handleHover, handleHoverOut){

        //console.log('pokebuilder')
        //console.log(this.stats)
        return(
           
            <div className="pokecard" key={this.pokeID} onPointerEnter={handleHover} onPointerLeave={handleHoverOut} id={this.pokeID}  >
                <div className="pokecard-inner" id={this.pokeID} >
                    <div className='pokecard-front' id={this.pokeID} >
                        <h3 id={this.pokeID}>{this.name}</h3>
                        <img id={this.pokeID} src={this.img}></img>

                        <div className="types"id={this.pokeID}>  
                            {this.types.map(type=> <img value={type} src={logos[type]} className='typeText'/>)}
                        </div>
                    </div>
                    <div className='pokecard-back' id={this.pokeID}>
                        <div className="stats" id={this.pokeID} >
                            <h5 id={this.pokeID}>Stats</h5>
                            {this.stats.map(stat=> 
                                <p id={this.pokeID}>{stat.name[0].toUpperCase() + stat.name.slice(1)}: {stat.value}</p>)}
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default Pokemon