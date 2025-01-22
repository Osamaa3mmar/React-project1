import React, { useState } from 'react'
import useFitch from '../../Hooks/useFitch/useFitch';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';
import { useParams } from 'react-router-dom';

export default function CurrentCategory() {
  const [skip,setSkip]=useState(0);
    let current=0;
    const {slug}=useParams();
    const { data, loading, error } = useFitch(import.meta.env.VITE_BURL + `/products/category/${slug}?limit=28&skip=${skip}`);
    const num =Math.ceil(data.total/28);
    const makeSkip=(num)=>{
      console.log(num)
      current=num;
      setSkip((num-1)*28);
    }
  
  
  
  
  
      if (loading) {
        return <div>Loading</div>;
      }
      return (
        <div className="row">
          {error ? <div className="alert alert-danger">{error}</div> : ""}
          {data.products.length > 0
            ? data.products.map((product) => {
                return (
                  <div className="col-lg-3 col-sm-6 d-flex " key={product.id}>
                    <ProductCard {...product}/>
                  </div>
                );
              })
            : "s"}
            <Pagination count={num} onClick={makeSkip} current={current} />
        </div>
       
      );
}
