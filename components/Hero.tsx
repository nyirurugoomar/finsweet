import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1440px] mx-auto bg-hero-bg bg-cover p-20 leading-6  '>
        <div className='p-20 '>
            <h5 className='text-[16px] font-light font-sans text-lightGray uppercase'>Posted on <span className=' font-bold uppercase '>startup</span></h5>
            <h1 className='md:w-[803px] text-lightGray md:mt-4'>Step-by-step guide to choosing great font pairs</h1>
            <p className=' font-sans text-[16px] leading-[28px] text-lightGray md:mt-2  '>By <span className=' text-yellow '>James West</span>  |  May 23, 2022 </p>
            <p className=' text-lightGray text-[16px] leading-[28px] md:w-[619px] md:py-6 '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <button className='bg-yellow p-[18px] px-16 font-bold'>Read more </button>
        </div>

    </div>
  )
}

export default Hero