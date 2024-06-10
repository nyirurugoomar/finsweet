import React from 'react'
import CustomButton from './CustomButton'

function Join() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='text-center'>
        <h2 className='md:w-[470px] w-[360px] mx-auto md:text-[36px] text-[28px]'>Join our team to be a part of our story</h2>
        <p className='body1 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <div className='mt-6 flex justify-center'>
          <CustomButton
            title="Join Now"
            containerStyles="button hover:bg-[#EDC14A]"
            
            
          />
        </div>
      </div>
    </div>
  )
}

export default Join
