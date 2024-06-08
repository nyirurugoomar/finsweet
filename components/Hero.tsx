import React from 'react'

function Hero() {
  return (
    <div className='md:max-w-[1440px] md:mx-auto bg-hero-bg bg-cover md:p-20 p-10 leading-6  '>
        <div className='md:p-20 '>
            <h5 className='md:text-[16px] text-[12px] font-light font-sans text-lightGray uppercase'>Posted on <span className=' font-bold uppercase '>startup</span></h5>
            <h1 className='md:w-[803px] text-lightGray md:mt-4 md:text-[48px] text-[16px] md:leading-[64px] leading-[30px] '>Step-by-step guide to choosing great font pairs</h1>
            <p className=' font-sans md:text-[16px] text-[12px] leading-[28px] text-lightGray md:mt-2  '>By <span className=' text-yellow '>James West</span>  |  May 23, 2022 </p>
            <p className=' text-lightGray md:text-[16px] text-[10px] md:leading-[28px] leading-[20px] md:w-[619px] md:py-6 '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <button className='bg-yellow md:p-[18px] p-[6px] md:px-16 px-6 font-bold mt-6'>Read More</button>
        </div>

    </div>
  )
}

export default Hero