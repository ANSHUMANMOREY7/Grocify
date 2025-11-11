import React from 'react'
import Home from './components/Home/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
const App = () => {

const Router = createBrowserRouter ([
  {
    path : "/",
    element:  <Home /> ,

  },
  {
    path:"/fruits",
    element: <Fruits />
  }
])

  return (
   <RouterProvider router={Router}/>
  )
}

export default App
