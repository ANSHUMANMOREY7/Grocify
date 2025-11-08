import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";


const navbar = () => {
  return (
    <header className='bg-white fixed top-0 right-0 left-0'>
      <nav className=' max-w-[1300px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center '>
        {/* nav logo */}
        <a href="#" className=' text-3xl font-bold'>
          Gr<span className='text-orange-500 uppercase'>o</span>cify
        </a>
        {/* menu */}
        <ul className='gap-x-12 md:flex hidden items-center '>
          <li>
            <a href="#" className='font-semibold tracking-wider text-orange-500 hover:text-orange-500 text-lg'>Home</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500 text-lg'>About Us</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500 text-lg'>process</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500 text-lg'>Contact Us</a>
          </li>
        </ul>
        {/* nav actions */}
        <div className=' flex items-center gap-x-3'>
          
          {/* search bar */}
          <div className=' md:flex hidden p-0.5 items-center border-2 rounded-full border-orange-300'>
            <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='outline-none border-none flex-1 h-[5vh] px-3 focus:outline-none' />
            <button className=' text-2xl w-10 h-10 flex justify-center items-center bg-linear-to-b from-orange-400 to-orange-600 rounded-full text-white '><IoIosSearch /></button>
          </div>

          <a href="#" className='text-zinc-800 hover:text-orange-500 text-2xl'>
            <GoHeartFill />
          </a>
          <a href="#" className='text-zinc-800 hover:text-orange-500 text-2xl'>
            <HiMiniShoppingBag />
          </a>
          {/* hamburger */}
          <a href="#" className='text-zinc-800 text-3xl md:hidden '> <TbMenu2 /></a>
          {/* mobile menu */}
          <ul className='flex flex-col items-center justify-center gap-y-6 md:hidden fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500/50 backdrop-blur-xl p-8 w-66 h-[60vh]  z-50'>
            <li>
              <a href="#" className='font-semibold tracking-wider text-white hover:text-orange-200 text-lg'>Home</a>
            </li>
            <li>
              <a href="#" className='font-semibold tracking-wider text-white hover:text-orange-200 text-lg'>About Us</a>
            </li>
            <li>
              <a href="#" className='font-semibold tracking-wider text-white hover:text-orange-200 text-lg'>process</a>
            </li>
            <li>
              <a href="#" className='font-semibold tracking-wider text-white hover:text-orange-200 text-lg'>Contact Us</a>
            </li>
            <li className='flex p-1 items-center border-2 rounded-full border-orange-300 m-1 bg-white/10'>
              <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='outline-none border-none flex-1 h-[4vh] px-2 focus:outline-none bg-transparent text-white placeholder-white/80 w-39' />
              <button className=' text-2xl w-10 h-10 flex justify-center items-center bg-linear-to-b from-orange-400 to-orange-600 rounded-full text-white '><IoIosSearch /></button>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  )
}

export default navbar