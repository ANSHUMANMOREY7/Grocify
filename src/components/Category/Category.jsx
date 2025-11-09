import React from 'react'
import Heading from '../Heading/Heading'
import FruitCat from '../../assets/fruits-and-veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import Button from '../Button/Button'

const Category = () => {
  
    const RenderCards = category.map(cards => {
    return (
      <div>
           <div>
            <img src={cards.image} />
           </div>
           <div>
            <h2>{cards.title}</h2>
           </div>
           <div>
            <p>{cards.description}</p>
           </div>
           <Button content="See All"/>
      </div>
    )
  });

  return (
    <section>
      <div className='py-20 '>
        <Heading highlight='Shop' content='By Category'/>

        {/* category cards */}
        <div>
          {RenderCards}
        </div>
      </div>
    </section>
  )
}

export default Category

const category = [
  {
    id: 1,
    title: 'Fruits  & Veggies',
    description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
    image: FruitCat
  },
  {
    id: 2,
    title: 'Dairy & Eggs',
    description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
    image: DairyCat
  },
  {
    id: 3,
    title: 'Meat & SeaFood',
    description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
    image: SeaFoodCat
  }
];