import React from 'react';
import CustomButton from './CustomButton'

function AboutMission() {
  return (
    <div className='w-full flex justify-center'>
      <div className='bg-mission-about-bg bg-cover md:w-[1280px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center mx-auto gap-4 md:p-20 p-10'>
          <div className=''>
            <p className='font-sans text-[16px] uppercase text-black tracking-widest leading-10 font-bold'>ABOUT US</p>
            <h2 className='md:w-[550px] md:text-[36px] text-[20px] md:leading-[48px] leading-[30px] '>We are a community of content writers who share their learnings</h2>
            
              <p className='body1' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className='text-purpo text-[18px]'>Read More</button>
              
            
          </div>
          <div>
            <p className='font-sans text-[16px] uppercase text-black tracking-widest leading-10 font-bold'>Our mission</p>
            <h2 className='md:w-[550px] md:text-[36px] text-[20px] md:leading-[48px] leading-[30px]'>We are a community of content writers who share their learnings</h2>
            <p className='body1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMission;
