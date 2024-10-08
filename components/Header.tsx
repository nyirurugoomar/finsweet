"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi'; 
import CustomButton from './CustomButton';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full'>
      <div className='flex justify-between bg-[#232536] items-center p-2 md:p-4'>
        <div className='my-4'>
          <Link href='/'>
            <Image src='/Logo.svg' width={140} height={28.35} alt="Logo" />
          </Link>
        </div>
        <div className='md:hidden flex items-center'>
          {menuOpen ? (
            <FiX className='text-white text-3xl' onClick={toggleMenu} /> // Cross icon when menu is open
          ) : (
            <FiMenu className='text-white text-3xl' onClick={toggleMenu} /> // Menu icon when menu is closed
          )}
        </div>
        <div className='hidden md:flex flex md:gap-6 gap-2 text-white items-center'>
          <Link href='/' className="body0">Home</Link>
          <Link href='/Blog' className="body0">Blog</Link>
          <Link href='/AboutUs' className="body0">About us</Link>
          <Link href='/ContactUs' className="body0">Contact us</Link>
          <CustomButton
            title="Subscribe"
            containerStyles="bg-white text-black md:h-[56px] md:w-[179px] font-bold"
          />
        </div>
      </div>
      {menuOpen && (
        <div className='flex flex-col bg-[#232536] text-white p-4 md:hidden'>
          <Link href='/' className="body0" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href='/Blog' className="body0" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href='/AboutUs' className="body0" onClick={() => setMenuOpen(false)}>About us</Link>
          <Link href='/ContactUs' className="body0" onClick={() => setMenuOpen(false)}>Contact us</Link>
          <CustomButton
            title="Subscribe"
            containerStyles="bg-white text-black h-[56px] w-full font-bold mt-2"
            handleClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Header;
