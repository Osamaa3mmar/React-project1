import React from 'react'
import style from '../Categories/Categories.module.css'
import style2 from './Loading.module.css'

export default function LoadingCategories({count}) {
    const temp =[];
    for (let i=0;i<count;i++){
        temp.push(<div key={i} className='col-lg-3 col-md-4 col-sm-6'>
            <div className={style.catCard}>
           <div className={style2.palceholder}>Loading . . .</div>
   
        </div> </div>);
    }
  return (
    <div className='row mb-5'>
      {temp}
    </div>
  )
}
