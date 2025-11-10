import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from "../ProductList/ProductList"
import Cards from '../Cards/Cards'

const Products = () => {

    const categories = ["All", "Fruits", "Vegetables ", "Dairy", "Seafood"];
    const [ activeTab , setActiveTab] = useState("All");

    const renderCards = ProductList.map(product =>{
        return(
           <Cards />
        )
    })
    return (
        <section>
            <div className='max-w-[1300px] mx-auto px-10 py-20'>
                <Heading highlight="Our" content="Products" />

                {/* Tabs  */}

                <div className='flex justify-center gap-9 mt-10'>
                    {categories.map(category => {
                        return (
                           <button key={category}
                           className={`text-lg cursor-pointer px-5 py-2 rounded-lg
                           ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-300'}`} onClick={()=>setActiveTab(category)}>
                            {category}
                           </button>
                        )
                    })}
                </div>
                
                {/* product cards */}
                <div>{renderCards}</div>
            </div>
        </section>
    )
}

export default Products
