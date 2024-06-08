import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { news } from '@/constants'


function FeaturedPost() {
  return (
    <div className='md:w-full flex justify-center'>
      <div className='grid grid-cols-1 lg:grid-cols-2  justify-center mx-auto p-24 gap-10'>
        <div>
            <h2>Featured Post</h2>
             <div className='border-[0.1px] border-mediumGray p-4 md:mt-4'>
             <img src="/featureimage.png"  alt="feature image" className='w-[669px] h-[352px] mt-4' />
             <p className=' font-sans text-[14px] text-black leading-[20px] my-4 '>By <span className='text-purpo'>John Doe</span>   <span>l   May 23, 2022</span></p>
            <h3 className='w-[659px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
            <p className=' body1 w-[551px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <CustomButton
             title="Read More"
             containerStyles="button"
             rightIcon="/right-arrow.svg"
            />  
             </div>
        </div>
        <div className='w-[517px]'>
            <div className='md:flex  justify-between items-center'>
            <h2>All posts</h2>
            <p className='body1'>View All</p>
            </div>
            <div className='grid'>
            {news.map((post, index) => (
              <div key={index} className='w-[517px] h-[131px] hover:bg-lightYellow cursor-pointer p-4 mt-4'>
                <p className='font-sans text-[14px] text-black leading-[20px]'>By <span className='text-purpo'>{post.author}</span> <span>l {post.date}</span></p>
                <h4>{post.title}</h4>
              </div>
            ))}
            </div>
            
            
        </div>
      </div>
    </div>
  )
}

export default FeaturedPost