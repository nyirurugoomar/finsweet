import React from 'react'
import Image from 'next/image'
import { CustomButton } from '@/components'
import { posts } from '@/constants'


function page() {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 lg:grid-cols-2 bg-lavender md:p-20 p-6'>
        <div className=''>
            <p className=' font-sans md:text-[18px] md:leading-[20px] tracking-[3px] text-black uppercase md:my-4 '>Featured Post</p>
            <h2 className='md:w-[654px] md:text-[36px] text-[28px] md:leading-[48px] leading-[40px]'>Step-by-step guide to choosing great font pairs</h2>
            <p className=' font-sans md:text-[16px] text-[12px] leading-[28px] text-darkGray md:my-4  '>By <span className=' text-purpo '>James Deo</span>  |  May 23, 2022 </p>
            <p className='body1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <CustomButton
             title="Read More"
             containerStyles="button"
             rightIcon="/right-arrow.svg"
            />  
        </div>
        <div className=' hidden justify-end lg:flex'>
           <Image src='/blogMan.png' width={515} height={359}  alt=''/>
        </div>
      </div>
      {/* all post  */}
      <div className='md:my-10'>
         <div className='md:w-[1282px] md:p-10 md:border-b-[0.3px] md:border-mediumGray md:mx-10 '>
          <h1>All posts</h1>
         </div>
         {posts.map((post,index) =>(
          <div key={index} className='md:flex grid-cols-1 lg:grid-cols-2 md:p-10 p-8 hover:bg-lightYellow cursor-pointer'>
           <div className=''>
              <Image src={post.image} width={490} height={318} alt=''/>
           </div>
           <div className='md:p-8'>
                <p className='font-sans md:text-[16px] md:leading-[20px] leading-10 font-medium tracking-[3px] uppercase text-purpo '>{post.post_type}</p>
                <h2 className='md:my-4 md:w-[642px] md:text-[36px] text-[30px]'>{post.title}</h2>
                <p className='font-sans font-normal text-[16px] leading-[28px] text-[#6D6E76] md:w-[642px]'>{post.body}</p>
           </div>
         </div>
         ))}
         
         
      </div>
    </div>
  )
}

export default page