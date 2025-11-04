import React from 'react'
import grocery from '../../assets/grocery.png';
import Button from '../Button/Button';
const Main = () => {
    return (
        <section>
            <div className='max-w-[1300px] mx-auto px-10 '>
                {/* main content */}
                <div >
                    <span className='text-orange-500 bg-orange-100 px-5 py-2 rounded-full text-lg'>Export Best Quality...</span>
                    <h1 className='text-7xl font-bold'>
                        Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> In Your City
                    </h1>
                    <p className='text-zinc-600 text-lg '>
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>
                    <Button/>
                </div>
                {/* main image */}
                <img src={grocery} alt="main image" />

            </div>
        </section>
    )
}

export default Main;
