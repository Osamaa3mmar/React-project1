import React from 'react'
import useFitch from '../../Hooks/useFitch/useFitch'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom';
import style from '../Categories/Categories.module.css'
import LoadingCategories from '../Loadings/LoadingCategories';
export default function Category() {
    const {data,loading,error}=useFitch(import.meta.env.VITE_BURL+'/products/categories');
    if(loading){
        return <LoadingCategories count={8}/>;
    }
    console.log(data)
  return (
      <div className='row mb-5'>
      {error? <div className='alert alert-danger'>{error}</div>:""}
      {data.length>0?
      data.slice(0,8).map((cat)=>{
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
