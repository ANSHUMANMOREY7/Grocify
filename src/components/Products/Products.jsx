import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from "../ProductList/ProductList"
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'


const Products = () => {

    const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
    const [activeTab, setActiveTab] = useState("All");

    let FilteredItems = activeTab === 'All' ? ProductList : ProductList.filter(item => item.category === activeTab)

    const renderCards = FilteredItems.slice(0, 8).map(product => {
        return (
            <Cards image={product.image} name={product.name} price={product.price} />
        )
    })
    return (
        <section>
            <div className='max-w-[1300px] mx-auto px-10 py-20'>
                <Heading highlight="Our" content="Products" />

                {/* Tabs  */}

                <div className='flex flex-wrap justify-center gap-9 mt-10'>
                    {categories.map(category => {
                        return (
                            <button key={category}
                                className={`text-lg cursor-pointer px-5 py-2 rounded-lg
                           ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-300/50'}`} onClick={() => setActiveTab(category)}>
                                {category}
                            </button>
                        )
                    })}
                </div>

                {/* product cards */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>{renderCards}
                </div>
                <div className='mx-auto w-fit mt-15'>
                    < Link to="/allProducts" className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 mt-5 cursor-pointer'>
                        View All
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Products
