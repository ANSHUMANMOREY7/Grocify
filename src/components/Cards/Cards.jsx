import React from 'react'
import Button from "../Button/Button"
import { FaHeart, FaPlus } from 'react-icons/fa'

const Cards = () => {
    return (
        <div>
            {/* card icons */}
            <div>
                <span> <FaHeart /> </span>
                <button> <FaPlus /> </button>
            </div>

            {/* card image */}
            <div>
                <img src=" " />
            </div>

            {/* card content */}

            <div>
                <h3>Title</h3>
                <p>3.00</p>
                <Button />
            </div>
        </div>
    )
}

export default Cards
