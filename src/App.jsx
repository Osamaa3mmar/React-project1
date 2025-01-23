import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import style from './app.module.css'
import Categories from './component/Categories/Categories'
import Products from './component/Products/Products'
import CurrentCategory from './component/Categories/CurrentCategory'
import CurrentProduct from './component/Products/CurrentProduct'
import Quotes from './component/Quotes/Quotes'
import Add from './component/Add/Add'
export default function App() {
  return (
    <div className={"pt-4 "+style.body}>
    <div className='container' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Categories/:slug' element={<CurrentCategory/>}></Route>
        <Route path='/Categories' element={<Categories/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/Products/:id' element={<CurrentProduct/>}></Route>
        <Route path='/Quotes' element={<Quotes/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
      </Routes>


    </div>
    </div>
  )
}
