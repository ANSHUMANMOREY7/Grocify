import React from 'react'
import Button from "../Button/Button"
import { FaHeart, FaPlus } from 'react-icons/fa'


const Cards = ({ image , name , price}) => {
    return (
        <div>
            {/* card icons */}
            <div>
                <span> <FaHeart /> </span>
                <button> <FaPlus /> </button>
            </div>

            {/* card image */}
            <div>
                <img src={image}/>
            </div>

            {/* card content */}

            <div>
                <h3>{name}</h3>
                <p>{price}</p>
                <Button content="Shop Now" />
            </div>
        </div>
    )
}

export default Cards
