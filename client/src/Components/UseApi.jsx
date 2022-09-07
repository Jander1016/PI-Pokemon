import { useState, useEffect } from "react";
import axios from 'axios'

export default function UseApi(url){
    const [result, SetResult]= useState({loading:true, data:null})

    useEffect(() => {
      loadData(url)
    }, [url]);
    
    async function loadData(url){
      try {
        SetResult({loading:true, data:null})
        const resp= await axios.get(url)
        const data= await resp.data
        SetResult({loading:false, data})
      } catch (e) {
        throw (e.message)
      }
    }
    return result
}
