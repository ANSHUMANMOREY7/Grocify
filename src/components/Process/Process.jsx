import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { FiTruck } from "react-icons/fi";

const Process = () => {
    const RenderSteps = steps.map(items => {
        return (
            <div className='bg-zinc-300/50 rounded-lg p-5 flex-wrap max-w-[1300px] mx-auto py-10 '>
                 <span className=' flex text-orange-500 w-18 text-7xl h-18 justify-center align-center rounded-full'>{items.number}</span>
                 <div className='flex justify-center'>
                    <span className='text-5xl  text-zinc-800 font-bold '>{items.icon}</span>
                 </div>
                 <div className='p-3 '>
                    <h4 className='font-bold text-2xl text-zinc-800'>{items.title}</h4>  
                    <p className='font-semibold text-zinc-600'>{items.para}</p>
                 </div>
            </div>

        )
    })
    return (
        <div className='max-w-[1300px] mx-auto px-10 py-20'>
            <div className=''>
                <Heading highlight="Our" content="Process" />
            </div>
            <div className='flex gap-10 mt-20 items-center'>
               {RenderSteps}
            </div>
        </div>
    )
}

export default Process

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: "Sourcing",
        para: "It is a long established fact that a reader",
        icon: <PiPlant />,
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: "Manufacturing",
        para: "It is a long established fact that a reader",
        icon: <PiFactory />,
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: "Quality Control",
        para: "It is a long established fact that a reader",
        icon: <SlBadge />,
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: "Logistics",
        para: "It is a long established fact that a reader",
        icon: <FiTruck />
    }
];