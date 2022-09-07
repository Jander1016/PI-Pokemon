import pokemonAsh from '../images/pokemonAsh.gif'
import pokebola from '../images/pokeball.gif'

export const Loading=(initLoad)=>{
    return <div className="loading">
        <h4>Loading...</h4>
        <div>{
            (initLoad)
            ?<img src={pokebola} alt="pokeLoading" width={100} height={100} />
            :<img src={pokemonAsh} alt="pokeLoading" width={100} height={100} />
            } 
        </div>
    </div>
}