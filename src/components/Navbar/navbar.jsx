import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

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
        {/* nav actions */}
        <div className=' flex items-center gap-x-5'>
          {/* search bar */}
          <div className='flex p-0.5 items-center border-2 rounded-full border-orange-300'>
            <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='outline-none border-none flex-1 h-[5vh] px-3 focus:outline-none' />
            <button className=' text-2xl w-10 h-10 flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-600 rounded-full text-white '><IoIosSearch /></button>
          </div>

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