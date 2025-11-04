import React from 'react'

const navbar = () => {
  return (
   <header className='bg-white'>
    <nav  className=' max-w-[1400px] mx-auto px-10 h-[14vh] flex justify-between items-center '>
      <a href="#">
        Gr<span>o</span>cify
      </a>
      {/* menu */}
      <ul  className='flex'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">process</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
   </header>
  )
}

export default navbar