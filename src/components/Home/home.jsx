import React from 'react'
import Navbar from '../Navbar/navbar';
import Main from '../Main/Main';
import Category from '../Category/Category';
import Values from '../Values/Values';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Main/>  
      <Category/>
      <Values />
    </div>
  )
}

export default Home
