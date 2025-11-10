import React from 'react'
import Button from "../Button/Button"
import FreshFruits from '../../assets/fresh-fruits.png'
const Discount = () => {
  return (
   <section className='relative bg-zinc-300/50'>
     {/* background image only on md and larger */}
     <div className='hidden md:block absolute inset-0 bg-right bg-contain bg-no-repeat' style={{backgroundImage:`url(${FreshFruits})`}} aria-hidden="true" />
  <div className='bg-zinc-300/50 md:bg-transparent max-w-[1400px] mx-auto px-10 py-10 flex flex-col md:flex-row items-start md:items-center gap-x-0 gap-y-4 md:gap-y-0'>
      <span className='text-6xl md:text-9xl text-orange-500 font-bold inline-block transform rotate-0 md:rotate-90 md:shrink-0'>20%</span>
      <div className='max-w-[700px] flex-1'>
        <h3 className=' text-4xl md:text-7xl text-zinc-800 font-bold '>Fisrt Order Discount!</h3>
        <p className='text-zinc-600 my-6'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
        <Button content="Get A Discount"/>
      </div>
    </div>
   </section>
  )
}

export default Discount
