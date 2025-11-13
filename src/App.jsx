import React from 'react'
import Home from './components/Home/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import SeaFood from './components/SeaFood/SeaFood'
import AllProducts from './components/AllProducts/AllProducts'
const App = () => {

const Router = createBrowserRouter ([
  {
    path : "/",
    element:  <Home /> ,

  },
  {
    path:"/fruits",
    element: <Fruits />,
  },
  {
    path:"/Dairy",
    element: <Dairy />,
  },
  {
    path:"/SeaFood",
    element: <SeaFood />,
  },
  {
    path:"/allProducts",
    element:<AllProducts />
  }

])

  return (
   <RouterProvider router={Router}/>
  )
}

export default App
