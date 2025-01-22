import React from 'react'
import useFitch from '../../Hooks/useFitch/useFitch'
import Category from './Category'
import Products from './Products'

export default function Home() {

  return (
    <div className='mt-5'>
      <Category/>
      <Products/>
    </div>
  )
}
