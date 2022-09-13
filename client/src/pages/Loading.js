import wait from '../images/wait.gif'
import pokebola from '../images/pokeball.gif'

export const Loading=(initLoad)=>{
    return <div className="loading">
        <h4>Loading...</h4>
        <div>{
            (initLoad)
            ?<img src={wait} alt="pokeLoading" width={200} height={200} />
            :<img src={pokebola} alt="pokeLoading" width={100} height={100} />
            } 
        </div>
    </div>
}