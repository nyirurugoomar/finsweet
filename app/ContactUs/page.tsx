import React from 'react';

function Page() {
  return (
    <div className='flex justify-center items-center w-full'>
      <div className='text-center md:mt-20 mt-10'>
        <p className='font-sans uppercase md:leading-[20px] text-black md:text-[16px] font-bold'>Contact us</p>
        <h1 className='md:text-[48px] text-[30px]'>Let’s Start a Conversation</h1>
        <p className='body1 md:w-[768px] md:block hidden md:my-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <div className='bg-purpo'>
          <div className='grid grid-cols-1 lg:grid-cols-2 md:p-10 p-6 md:gap-20 '>
            <div className='text-start'>
              <p className='body1 md:my-8 md:border-b-[0.3px] md:border-mediumGray'>Working hours</p>
              <h5 className='text-white'>Monday To Friday</h5>
              <h5 className='text-white'>9:00 AM to 8:00 PM</h5>
              <p className='body2'>Our Support Team is available 24/7</p>
            </div>
            <div className='text-start'>
              <p className='body1 md:my-8 md:border-b-[0.3px] md:border-mediumGray'>Contact Us</p>
              <h5 className='text-white'>020 7993 2905</h5>
              <p className='body2'>hello@finsweet.com</p>
            </div>
          </div>
        </div>
        <form action="" className='md:mt-10 mt-10 md:grid grid md:gap-y-4 gap-y-4 '>
          <input 
            type="text"
            className='md:w-[768px] w-[368px]  md:h-[76px] h-[46px] md:border-[1.5px] border-[1.5px] md:p-4 p-2 '
            placeholder='Full Name'
           />
           <input 
            type="email"
            className='md:w-[768px] w-[368px]  md:h-[76px] h-[46px] md:border-[1.5px] border-[1.5px] md:p-4 p-2'
            placeholder='Email'
           />
           <select 
            className='md:w-[768px] w-[368px]  md:h-[76px] h-[46px] md:border-[1.5px] border-[1.5px] md:p-4 p-2'
            >
              <option value="" disabled selected>Query Related</option>
              <option value="sales">Sales</option>
              <option value="support">Support</option>
              <option value="general">General</option>
           </select>
           <textarea 
            className='md:w-[768px] w-[368px]  md:h-[76px] h-[76px] md:border-[1.5px] border-[1.5px] md:p-4 p-2' 
            placeholder='Message'
           ></textarea>
           <button 
            type="submit"
            className='md:w-[768px] md:h-[76px] h-[46px] md:border-[1.5px] md:p-4 md:my-4 bg-yellow text-black font-bold'
           >
             Send Message
           </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
