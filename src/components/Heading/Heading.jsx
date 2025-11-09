import React from 'react'
import FruitCat from '../../assets/fruits-and-veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
const Heading = (props) => {
  return (
    <div>
      <div className='w-fit mx-auto'>
          <h2 className='font-bold md:text-5xl text-[2.1rem]'>
            <span className='text-orange-500 font-bold'> {props.highlight}</span> {props.content}
          </h2>
          <div className='w-34 h-1 bg-orange-300 md:mt-6 mt-3 ml-auto '></div>
        </div>
    </div>
  )
}

export default Heading 


const Category =[
  { id:1 ,
    title:'Fruits  & Veggies',
    description:'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
    image:FruitCat
  },
  {
    id:2,
    title:'Dairy & Eggs',
    description:'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
    image:DairyCat
  },
  {
    id:3,
    title:'Meat & SeaFood',
    description:'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
    image:SeaFoodCat
  }
];