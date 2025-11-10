import React from 'react'
import Button from "../Button/Button"
import { FaHeart, FaPlus } from 'react-icons/fa'


const Cards = ({ image , name , price}) => {
    return (
        <div className='bg-zinc-300/50 p-5 rounded-xl'>
            {/* card icons */}
            <div className='flex justify-between'>
                <span className='text-3xl text-zinc-400'> <FaHeart /> </span>
                <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-4 py-3 rounded-lg'> <FaPlus /> </button>
            </div>

            {/* card image */}
            <div className='w-full h-50  p-2 mt-3 mb-3'>
                <img src={image} className='w-full h-full mx-auto object-contain'/>
            </div>

            {/* card content */}

            <div className='text-center' >
                <h3 className='text-2xl font-semibold'>{name}</h3>
                <p className='text-2xl font-bold mt-4 mb-3 '>${price.toFixed(2)}</p>
                <Button content="Shop Now" />
            </div>
        </div>
    )
}

export default Cards
