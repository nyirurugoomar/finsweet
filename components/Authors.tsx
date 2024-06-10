import React from 'react';
import Image from 'next/image';
import { authors } from '@/constants'

function Authors() {
  return (
    <div className='w-full md:mt-10'>
      <h2 className='text-center md:text-[36px] text-[26px]'>List of Authors</h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 md:p-20 p-10 gap-8'>
      {authors.map((author,index) =>(
        <div key={index} className='flex flex-col items-center md:w-[296px] md:h-[278px] bg-lightGray border-[0.3px] border-mediumGray p-4 hover:bg-lightYellow cursor-pointer'>
          <Image src={author.avatar} width={128} height={128} alt='' />
          <h3 className='mt-4 md:text-[28px] text-[13px]'>{author.name}</h3>
          <p className='body1 text-center '>{author.authTitle}</p>
          <div className='flex space-x-6 mt-2'>
            <img src="/Facebook.svg" width={16} height={16} alt="facebook" />
            <img src="/instagram.svg" width={16} height={16} alt="instagram" />
            <img src="/Linkedin.svg" width={16} height={16} alt="linkedin" />
          </div>
        </div>
      ))}
        
      </div>
    </div>
  );
}

export default Authors;
