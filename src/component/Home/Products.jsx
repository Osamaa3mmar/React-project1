import React from "react";
import useFitch from "../../Hooks/useFitch/useFitch";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

export default function Products() {
  const { data, loading, error } = useFitch(
    import.meta.env.VITE_BURL + "/products?limit=8&skip=100"
  );
  console.log(data);

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
    </div>
  );
}
