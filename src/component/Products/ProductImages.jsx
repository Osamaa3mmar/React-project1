import React from 'react'
import style from './imgs.module.css'
export default function ProductImages({imgs,onClick}) {
    if(imgs.length ==0){
        return " ";
    }
  return (
    <div className={style.imgsContainer}>
      {imgs.map((img)=>{
        return <img className={style.image} key={img} src={img} onClick={()=>onClick(img)}/>
      })}
    </div>
  )
}
