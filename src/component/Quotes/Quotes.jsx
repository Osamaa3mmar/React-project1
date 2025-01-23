import React, { useEffect, useState } from 'react'
import useFitch from '../../Hooks/useFitch/useFitch'
import style from './card.module.css'
import axios from 'axios';
export default function Quotes() {
    const [data,setData]=useState({});
    const random=async ()=>{
        const{data}=await axios.get(import.meta.env.VITE_BURL+ '/quotes/random');
        setData(data);
    }

    useEffect(()=>{
        random();
    },[])
  return (
    <div className={style.body}>
    <div className={style.card}>
      <div className={style.word}>{data.quote}</div>

      <p className={style.auther}>{data.author}</p>
    </div>
    <button className={style.btn} onClick={random}>Random</button>
    </div>
  )
}
