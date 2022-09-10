/* import { useState, useEffect, useCallback } from "react";

export default function UseApiPokemon(stateReducer){
    const [result, setResult]= useState({loading:true, data:null})
   
    const load = useCallback(()=>loadData(stateReducer),[stateReducer])

    useEffect(() => {
      load()
    }, [load]);
    
    async function loadData(stateReducer){
      try {
        setResult({loading:true, data:null})
        const data= await stateReducer
        setResult({loading:false, data})
      } catch (e) {
        throw (e.message)
      }
      
    }
    return result
} */