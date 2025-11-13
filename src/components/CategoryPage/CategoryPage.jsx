import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from "../../components/ProductList/ProductList"
import Cards from '../Cards/Cards'


const CategoryPage = ({title}) => {
const RenderProduct = ProductList.map(product=>{
    return(
        <div>
            <Cards image={product.image} name={product.name} price={product.price}/>
        </div>
    )
})

    return (
        <div>
            <Banner title={title} />

            <div className='grid grid-cols-1 md:grid-cols-4 gap-9 max-w-[1300px] mx-auto px-10 py-20'>
                {RenderProduct}
            </div>
        </div>
    )
}

export default CategoryPage
