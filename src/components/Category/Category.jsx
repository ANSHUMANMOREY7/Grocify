import React from 'react'
import Heading from '../Heading/Heading'
import FruitCat from '../../assets/fruits-and-veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import Button from '../Button/Button'

const Category = () => {

  const RenderCards = category.map(cards => {
    return (
      // card 
      <div className='flex-1 basis-[300px]'>
        {/* card image */}
        <div className='w-full min-h-[32vh] relative -mb-12 '>
          <img src={cards.image} className='absolute bottom-0' />
        </div>
        {/* card content */}
        <div className='bg-zinc-200 pt-17 p-8 rounded-xl'>
          <h3 className='text-3xl font-bold text-zinc-800'>{cards.title}</h3>
          <p className='text-zinc-600 mt-3 mb-9'>{cards.description}</p>
          <Button content="See All" />
        </div>
      </div>
    )
  });

  return (
    <section>
      <div className='py-20 max-w-[1300px] mx-auto px-10'>
        <Heading highlight='Shop' content='By Category' />

        {/* category cards */}
        <div className='md:flex md:mt-14 mt-2  gap-10 '>
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