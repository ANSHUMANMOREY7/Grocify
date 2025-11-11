import React from 'react'
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/Customer1.jpg"
import Customer2 from "../../assets/Customer2.jpg"
import Customer3 from "../../assets/Customer3.jpg"
import Customer4 from "../../assets/Customer4.jpg"
import Customer5 from "../../assets/Customer5.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonials = () => {


  return (
    <section>
      <div className='max-w-[1300px] px-10 mx-auto py-20'>
        <Heading highlight="Customers" content="Saying" />
        <div className='flex justify-end py-5 gap-x-3 '>
          <button className='text-2xl text-zinc-800 rounded-lg  w-11 h-11 bg-zinc-300/50 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
            <IoIosArrowBack />
          </button>
          <button className='text-2xl text-zinc-800 rounded-lg  w-11 h-11 bg-zinc-300/50 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          review.map(item => {
            return (
              
                <SwiperSlide className='bg-zinc-300/50 rounded-xl p-8 '>
                  <div className='flex gap-5 items-center'>
                    <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4'></div>
                    <div>
                      <h5 className='text-xl font-bold'>Name</h5>
                      <p className='text-zinc-600'>Profession</p>
                      <span>Stars</span>
                    </div>
                  </div>
                  <div className='mt-10'>
                    <p className='text-zinc-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ipsam voluptas? Corrupti voluptatem at rerum impedit cum. Sed, eveniet recusandae.</p>
                  </div>
                </SwiperSlide>
              
            )
          })
        }

      </Swiper>


    </section>
  )
}

export default Testimonials

const review = [
  {
    id: 1,
    name: "Ankit Yadav",
    profession: "Food Blogger",
    rating: 3,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: Customer1,
  },
  {
    id: 2,
    name: "Rishi Sharma",
    profession: "Chef",
    rating: 4,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: Customer2,
  },
  {
    id: 3,
    name: "Asmita Rai",
    profession: "Model",
    rating: 5,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Surya Maharana",
    profession: "Fitness Coach",
    rating: 3,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: Customer4,
  },
  {
    id: 5,
    name: "Rashi Joshi",
    profession: "Nutritionist",
    rating: 4,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: Customer5,
  }
]