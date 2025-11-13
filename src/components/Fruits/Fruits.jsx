import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgImage from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Veggies" bgImage={bgImage} categories={'Fruits , Vegetables'} />
    </div>
  )
}

export default Fruits
