import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFitch from '../../Hooks/useFitch/useFitch';
import ProductImages from './ProductImages';
import style from './currentProduct.module.css'
import tagStyle from '../ProductCard/ProductCard.module.css'
export default function CurrentProduct() {
    const {id}=useParams();
    const {data,loading,error}=useFitch(import.meta.env.VITE_BURL+ '/products/'+id);
    const [thump,setThump]=useState(null);
    console.log(thump)
    console.log(data)
    if(loading){
        return <div>Loading</div>;
    }
    function changeImage(img){
        setThump(img);
    }
  return (
    <div className={style.product}>
      {error?<div className='alert alert-danger'> {error}</div>:""}
      {data?
      <div className='row'>
        <div className="col-2"> 
        <ProductImages imgs={data.images} onClick={changeImage}/>
      </div>
      <div className="col-5">
        <img src={thump?thump:data.thumbnail} className={style.currentImage} alt="" />
      </div>
      
      <div className={"col-5 "}>
        <h2 className={style.title}>{data.title}</h2>
        <div className={tagStyle.tag}>
        <Link className={tagStyle.tagLink} to={`/Categories/${data.category}`} >{data.category}</Link>
      </div>
      <p className={style.price}>{data.price} <span className={style.dolar}>$</span> </p>
        <p className={style.rate}>Rating : <span className={style.rateval}>{data.rating}/5</span></p>
      <div className={style.line}></div>
        <p className={style.description}>{data.description}</p>
      <button className={style.buyBtn}>Buy Now</button>
      </div>
      </div>
      :''}
    </div>
  )
}
