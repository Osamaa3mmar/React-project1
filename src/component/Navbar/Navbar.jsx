import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'

export default function Navbar() {
    const [page,setPage]=useState(1);

    function changePage(id){
        setPage(id);
    }
  return (
  <nav className={"navbar navbar-expand-lg  z-3 " + style.navbar}>
  <div className="container-fluid">
    <Link className={"navbar-brand " + style.logo} to={"/"}>Market Nest</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className={'nav-link '+ (page==1?style.navLinkActive:style.navLink)} onClick={()=>changePage(1)} aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={'nav-link '+ (page==2?style.navLinkActive:style.navLink)} onClick={()=>changePage(2)} to={"/Categories"}>Categories</Link>
        </li>
        <li className="nav-item">
          <Link className={'nav-link '+ (page==3?style.navLinkActive:style.navLink)} onClick={()=>changePage(3)} to={"/products"}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className={'nav-link '+ (page==4?style.navLinkActive:style.navLink)} onClick={()=>changePage(4)} aria-disabled="true" to={'/Quotes'}>Quotes</Link>
        </li>
        <li className="nav-item">
          <Link className={'nav-link '+ style.navLinkAdd} aria-disabled="true" to={'/Add'}>Add Product</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
