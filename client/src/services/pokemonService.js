import { useState, useEffect } from "react";

export default function UseApiPokemon(stateReducer){
    const [result, SetResult]= useState({loading:true, data:null})
   
    useEffect(() => {
      loadData(stateReducer)
      SetResult(current=>({loading:false, data: current.results}))
    }, [stateReducer]);

    async function loadData(stateReducer){
      try {
        SetResult({loading:true, data:null})
        const data= await stateReducer
        SetResult({loading:false, data})
      } catch (e) {
        throw (e.message)
      }
    }
    return result
}