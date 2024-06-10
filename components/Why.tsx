import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

function Why() {
  return (
    <div className='w-full mt-10'>
       <div className=' grid grid-cols-1 lg:grid-cols-2 md:p-16 p-10'>
         <div className='z-0 md:absolute'>
            <Image src='/together.png' alt='photo' width={949} height={405}/>
         </div>
         <div className='  md:w-[706px] md:h-[584px] md:mt-[121px] mt-10 bg-white md:z-10 md:ml-[34rem]  '>
           <div className='md:p-20 md:absolute'>
           <p className='body1 font-sans'>Why we started </p>
           <h1 className='md:w-[646px] w-[323px] md:text-[48px] text-[28px] md:leading-[64px] leading-[40px] '>It started out as a simple idea and evolved into our passion</h1>
           <p className='body1 md:w-[646px] w-[300px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
           <CustomButton
             title="Discover our story"
             containerStyles="button"
             rightIcon="/right-arrow.svg"
            />  
           </div>
           
         </div>

       </div> 
    </div>
  )
}

export default Why