import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";

const navbar = () => {
  return (
    <header className='bg-white'>
      <nav className=' max-w-[1400px] mx-auto px-10 h-[14vh] flex justify-between items-center '>
        {/* nav logo */}
        <a href="#" className=' text-3xl font-bold'>
          Gr<span className='text-orange-500 uppercase'>o</span>cify
        </a>
        {/* menu */}
        <ul className='flex gap-5'>
          <li>
            <a href="#" className='font-bold tracking-wider text-orange-500 hover:text-orange-500'>Home</a>
          </li>
          <li>
            <a href="#" className='font-bold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
          </li>
          <li>
            <a href="#" className='font-bold tracking-wider text-zinc-800 hover:text-orange-500'>process</a>
          </li>
          <li>
            <a href="#" className='font-bold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
          </li>
        </ul>
        {/* search bar */}
        <div className=' flex items-center gap-x-5'>
          <a href="#" className='text-zinc-800 hover:text-orange-500 text-2xl'>
            <GoHeartFill />
          </a>
          <a href="#" className='text-zinc-800 hover:text-orange-500 text-2xl'>
            <HiMiniShoppingBag />
          </a>

        </div>
      </nav>
    </header>
  )
}

export default navbar