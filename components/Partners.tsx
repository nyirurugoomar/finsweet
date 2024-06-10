import React from 'react'
import Image from 'next/image'
import { companies } from '@/constants'

function Partners() {
  return (
    <div className='w-full my-10'>
      <h2 className='text-center md:text-[36px] text-[26px]'>Our Partners</h2>
      <div className='sliding-images-wrapper md:p-20 p-10'>
        <div className='sliding-images gap-4 '>
          {companies.map((company, index) => (
            <div key={index}>
              <Image src={company.logo} width={225} height={225} alt='logo'/>
            </div>
          ))}
          {companies.map((company, index) => (
            <div key={index + companies.length}>
              <Image src={company.logo} width={225} height={225} alt='logo'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partners
