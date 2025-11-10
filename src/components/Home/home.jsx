import React from 'react'
import Navbar from '../Navbar/navbar';
import Main from '../Main/Main';
import Category from '../Category/Category';
import Values from '../Values/Values';
import Products from '../Products/Products';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Main/>  
      <Category/>
      <Values />
      <Products />
    </div>
  )
}

export default Home
