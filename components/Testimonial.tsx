"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonials } from '@/constants'

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const { name, location, image, testimonial } = testimonials[currentIndex];

  return (
    <div className='w-full flex justify-center my-20'>
      <div className='bg-lightYellow md:w-[1280px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center mx-auto gap-4 md:p-20 p-10 '>
          <div className=' md:border-r-[0.3px] md:border-mediumGray'>
            <p className='font-sans text-[16px] uppercase text-black tracking-widest leading-10 font-bold'>TESTIMONIALS</p>
            <h2 className='md:w-[345px] md:text-[36px] text-[20px] md:leading-[48px] leading-[30px] '>What people say about our blog</h2>
            
            <p className='body1 md:w-[349px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div className=''>
            <h4>"{testimonial}"</h4>
            <div className='flex md:gap-10 mt-4 justify-center items-center md:p-10'>
              <div className='md:flex p-4 gap-2'>
                <Image src={image} width={50} height={50} alt='profile' className='rounded-[10rem] ' />
                <div className='grid'>
                  <h4>{name}</h4>
                  <p className='body1'>{location}</p>
                </div>
              </div>
              <div className='flex md:gap-2 gap-2'>
                <button
                  className='bg-black rounded-[10rem] w-[62px] h-[62px] flex items-center justify-center'
                  onClick={handlePrev}
                >
                  <FaArrowLeft color='white' />
                </button>
                <button
                  className='bg-black rounded-[10rem] w-[62px] h-[62px] flex items-center justify-center'
                  onClick={handleNext}
                >
                  <FaArrowRight color='white' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
