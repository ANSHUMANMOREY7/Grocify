import React from 'react'
import grocery from '../../assets/grocery.png';
import Button from '../Button/Button';
const Main = () => {
    return (
        <section>
            <div className='max-w-[1300px] mx-auto px-10 flex items-center md:pt-25 pt-31 min-h-screen md:flex-row flex-col'>
                {/* main content */}
                <div className='flex-1'>
                    <span className='text-orange-500 bg-orange-100 px-5 py-2 rounded-full text-lg'>Export Best Quality...</span>
                    <h1 className='md:text-7xl/20 text-4xl/13 font-bold mt-4 '>
                        Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> <br />In  Your City
                    </h1>
                    <p className='text-zinc-600 md:text-lg text-md max-w-[550px] mt-4 mb-5'>
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>
                    <Button content="Shop Now"/>
                </div>
                {/* main image */}
                <div className='flex-1'>
                    <img src={grocery} alt="main image" />
                </div>

            </div>
        </section>
    )
}

export default Main;
