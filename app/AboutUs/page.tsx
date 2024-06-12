import React from 'react'
import Image from 'next/image'
import { Authors, Join } from '@/components'

function page() {
  return (
    <div className='w-full md:w-full md:mt-0 mt-10 '>
      <div className='grid grid-cols-1 lg:grid-cols-2 md:p-28 p-6'>
        <div className='bg-white md:w-[624px] md:h-[356px]'>
           <p className='md:my-0 my-2'>ABOUT US</p>
           <h1 className='md:w-[496px] md:text-[48px] text-[30px] md:leading-[64px] leading-[40px]'>We are a team of content writers who share their learnings</h1>
        </div>
        <div className='md:w-[477px] md:h-[120px] md:p-10'>
           <p className='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div className='bg-mission-about-bg bg-cover md:mx-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center mx-auto gap-4 md:p-20 p-10'>
          <div className=''>
            <p className='font-sans text-[16px] uppercase text-black tracking-widest leading-10 font-bold'>Our mision</p>
            <h2 className='md:w-[550px] md:text-[36px] text-[20px] md:leading-[48px] leading-[30px] '>Creating valuable content for creatives all around the world</h2>
            
              <p className='body1' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
              </p>

          </div>
          <div>
            <p className='font-sans text-[16px] uppercase text-black tracking-widest leading-10 font-bold'>Our mission</p>
            <h2 className='md:w-[550px] md:text-[36px] text-[20px] md:leading-[48px] leading-[30px]'>A platform that empowers individuals to improve</h2>
            <p className='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
      </div>
       
       <div className='md:flex grid-cols-1 lg:grid-cols-2 md:p-24 p-8'> 
           <div className='md:mt-20'>
             <h2 className='md:text-[36px] text-[30px]'>Our team of creatives</h2>
             <h4 className='md:w-[519px] md:my-4 my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
             <p className='body1 md:w-[519px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
           </div>
           <div className='md:mt-0 mt-4'>
            <Image src='/image1.png' width={624} height={517} alt=''/>
           </div>
       </div>

       <div className='md:flex grid-cols-1 lg:grid-cols-2 md:p-20 p-8 md:gap-8'>
        <div className='md:mt-20 md:order-2 order-1'>
          <h2 className='md:text-[36px] text-[30px]'>Why we started this Blog</h2>
          <h4 className='md:w-[519px] md:my-4 my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
          <p className='body1 md:w-[519px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
        <div className='md:mt-0 mt-4 md:order-1 order-2'>
          <Image src='/image2.png' width={624} height={517} alt=''/>
        </div>
       </div>

       <Authors/>
       <Join/>


    </div>
  )
}

export default page