import React from 'react'
import grocery from '../../assets/grocery.png';
import Button from '../Button/Button';
const Main = () => {
    return (
        <section>
            <div className='max-w-[1300px] mx-auto px-10 flex items-center pt-25  min-h-screen'>
                {/* main content */}
                <div className='flex-1'>
                    <span className='text-orange-500 bg-orange-100 px-5 py-2 rounded-full text-lg'>Export Best Quality...</span>
                    <h1 className='text-7xl/20 font-bold mt-4 '>
                        Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> <br />In  Your City
                    </h1>
                    <p className='text-zinc-600 text-lg max-w-[550px] mt-4 mb-5'>
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
