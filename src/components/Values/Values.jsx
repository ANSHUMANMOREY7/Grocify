import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from '../../assets/Basket-full-vegetables.png'
const Values = () => {

const leftValues = value.slice(0, 2).map((item)=>{
    return(
        <div className=' flex flex-row-reverse items-center gap-7'>
           <div>
            <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full '>{item.icon}</span>
           </div>
           <div className='text-right'>  
            <h3 className=' text-3xl text-zinc-800 font-bold'>{item.title}</h3>
            <p className='text-zinc-600 '>{item.para}</p>
           </div>
        </div>
    )
})
const rightValues = value.slice(2, 4).map((item)=>{
    return(
        <div className=' flex items-center gap-7'>
           <div>
            <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full '>{item.icon}</span>
           </div>
           <div className=''>  
            <h3 className=' text-3xl text-zinc-800 font-bold'>{item.title}</h3>
            <p className='text-zinc-600 '>{item.para}</p>
           </div>
        </div>
    )
})

  return (
    <section>
      <div className='max-w-[1300px] mx-auto px-10 py-20'>
          <Heading highlight='Our' content='Values'/>
          <div className='flex items-center justify-between gap-5 mt-16 '>
            {/* left values */}
             <div className='min-h-100 flex flex-col justify-between'>
                 {leftValues}
             </div>
             <div  className='w-1/2'> <img src={Basket}/></div>
             {/* right values */}
             <div  className='min-h-100 flex flex-col justify-between'>
                  {rightValues}
             </div>
          </div>
      </div>
    </section>
  )
}

export default Values

const value=[
   {
     id:1,
     title:"Trust",
     para:"It is a long established fact that a reader will be distracted by the readable.",
     icon: <FaHeart />
   },
   {
     id:2,
     title:"Always Fresh",
     para:"It is a long established fact that a reader will be distracted by the readable.",
     icon: <FaLeaf />
   },
   {
    id:3,
     title:"Food Safety",
     para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
     icon: <FaShieldAlt />
   },
   {
   id:2,
     title:"100% Organic",
     para:" we always ensure that our products are organic and fresh.",
     icon: <FaSeedling />
    }

];