import React from 'react'
import Navbar from '../Navbar/navbar';
import Main from '../Main/Main';
import Category from '../Category/Category';
import Values from '../Values/Values';
import Products from '../Products/Products';
import Discount from '../Discount/Discount';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Main/>  
      <Category/>
      <Values />
      <Products />
      <Discount />
    </div>
  )
}

export default Home
