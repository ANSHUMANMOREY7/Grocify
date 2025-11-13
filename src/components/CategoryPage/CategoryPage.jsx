import React from 'react'
import Banner from '../Banner/Banner'
import productList from '../../components/ProductList/ProductList.js'
import Cards from '../Cards/Cards'


const CategoryPage = ({ title, bgImage, categories = [] }) => {

    // If no categories are passed, default to ['All'] so the page shows all products.
    const filteredItems = categories.includes('All')
        ? productList
        : productList.filter(item => categories.includes(item.category))

const RenderProduct = filteredItems.map(product=>{
    return(
        <Cards key={product.id} image={product.image} name={product.name} price={product.price}/>
    )
})

    return (
        <div>
            <Banner title={title} bgImage={bgImage} />

            <div className='grid grid-cols-1 md:grid-cols-4 gap-9 max-w-[1300px] mx-auto px-10 py-20'>
                {RenderProduct}
            </div>
        </div>
    )
}

export default CategoryPage
