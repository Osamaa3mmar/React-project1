import React from 'react'
import useFitch from '../../Hooks/useFitch/useFitch';
import style from './Categories.module.css';
import { Link } from 'react-router-dom';
import LoadingCategories from '../Loadings/LoadingCategories';
export default function Categories() {
    const {data,loading,error}=useFitch(import.meta.env.VITE_BURL+'/products/categories');
    if(loading){
        return <LoadingCategories count={30}/>;
    }
    console.log(data)
  return (
      <div className={'row '+ style.cats}>
      {error? <div className='alert alert-danger'>{error}</div>:""}
      {data.length>0?
      data.map((cat)=>{
        return <div key={cat.slug} className='col-lg-3 col-md-4 col-sm-6'>
            <Link to={`/Categories/${cat.slug}`} style={{ textDecoration: 'none' }}>
            <div className={style.catCard}>
                {cat.name}
            </div>
            </Link>
        </div>
      })
      :
      ''}

    </div>

  )
}
