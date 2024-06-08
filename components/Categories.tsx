import React from 'react'
import Image from 'next/image'
import { categories } from '@/constants'

function Categories() {
  return (
    <div className='w-full mt-10'>
        <h2 className='text-center md:text-[36px] text-[26px]'>Choose A Catagory</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 md:p-20 p-10 gap-8'>
            {categories.map((category,index) =>(
                <div key={index} className='md:w-[296] md:h-[228px] border-[0.3px] border-mediumGray p-4 hover:bg-yellow cursor-pointer'>
                <Image src={category.icon} width={48} height={48}  alt='icon-business'/>
                <h3 className='md:py-4 md:text-[28px] text-[20px]'>{category.title}</h3>
                <p className='body1 md:text-[16px] text-[4px]'>{category.spec}</p>
                </div>
            ))}
          
        </div>
    </div>
  )
}

export default Categories