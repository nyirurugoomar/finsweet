import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='w-full md:w-full '>
      <div className='grid grid-cols-1 lg:grid-cols-2 md:p-28'>
        <div className='bg-white md:w-[624px] md:h-[356px]'>
           <p>ABOUT US</p>
           <h1 className='md:w-[496px]'>We are a team of content writers who share their learnings</h1>
        </div>
        <div className='md:w-[477px] md:h-[120px] md:p-10'>
           <p className='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='bg-image-bg bg-cover'>
          
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



    </div>
  )
}

export default page