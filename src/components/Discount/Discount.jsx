import React from 'react'
import Button from "../Button/Button"
import FreshFruits from '../../assets/fresh-fruits.png'
const Discount = () => {
  return (
   <section className='bg-zinc-300/50 bg-right bg-contain bg-no-repeat' style={{backgroundImage:`url(${FreshFruits})`}}>
  <div className='max-w-[1400px] mx-auto px-10 py-10 flex items-center gap-x-1'>
      <span className='text-9xl text-orange-500 font-bold' style={{ transform: 'rotate(-90deg)' }}>20%</span>
      <div className='max-w-[700px] flex-1'>
        <h3 className='text-7xl text-zinc-800 font-bold'>Fisrt Order Discount!</h3>
        <p className='text-zinc-600 my-6'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
        <Button content="Get A Discount"/>
      </div>
    </div>
   </section>
  )
}

export default Discount
