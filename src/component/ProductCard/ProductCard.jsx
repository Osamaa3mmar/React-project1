import React from 'react'
import style from './ProductCard.module.css'
import { Link } from 'react-router-dom'
export default function ProductCard({id,title,price,tags,brand,thumbnail}) {
  return (
    <div className={style.productCard}>
      <img src={thumbnail} alt="" className={style.productImg} />
      <div className={style.bottom}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.price}>{price} <span className={style.dollar}>$</span></p>
        <ul className={style.tags}>
          {tags.length >0?
          tags.map((tag,index)=>{
           return  <li className={style.tag} key={index}>
            <Link className={style.tagLink}>{tag}</Link>
          </li>
          })
          :""}
          
        </ul>
          
          <Link className={style.detailsBtn} to={`/products/${id}`}>More Details</Link>
      </div>
    </div>
  )
}
