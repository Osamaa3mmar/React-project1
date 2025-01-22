import axios from "axios";
import { useEffect, useState } from "react"

export default function useFitch(url) {
    const [data,setData]=useState({});
    const [loading ,setLoading]=useState(true);
    const [error,setError]=useState(null);

    const getData=async ()=>{
        try{
            const {data}=await axios.get(url);
            setError(null);
            setData(data);
        }catch(e){
            setError(e.message);
            setData([]);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getData();
    },[url]);
    
  return {loading,data,error}
}
