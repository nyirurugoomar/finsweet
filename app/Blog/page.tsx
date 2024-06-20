"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CustomButton } from '@/components';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { client } from "@/sanity/lib/client";
import { Post } from '@/types/Interface';
import Link from 'next/link';

async function getPost() {
  const query = `*[_type =="post"]{
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    tags[]->{
      id,
      slug,
      name
    }
  }`;
  const data = await client.fetch(query);
  return data;
}


function Page() {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const postsPerPage = 4;

  useEffect(() => {
    async function fetchData() {
      const data = await getPost();
      setPosts(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleNext = () => {
    if ((currentPage + 1) * postsPerPage < posts.length) {
      setLoading(true);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setLoading(true);
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);


  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 lg:grid-cols-2 bg-lavender md:p-20 p-6'>
        <div className=''>
          <p className='font-sans md:text-[18px] md:leading-[20px] tracking-[3px] text-black uppercase md:my-4'>Featured Post</p>
          <h2 className='md:w-[654px] md:text-[36px] text-[28px] md:leading-[48px] leading-[40px]'>Step-by-step guide to choosing great font pairs</h2>
          <p className='font-sans md:text-[16px] text-[12px] leading-[28px] text-darkGray md:my-4'>By <span className='text-purpo'>James Deo</span> | May 23, 2022</p>
          <p className='body1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <CustomButton
            title="Read More"
            containerStyles="button"
            rightIcon="/right-arrow.svg"
          />
        </div>
        <div className='hidden justify-end lg:flex'>
          <Image src='/blogMan.png' width={515} height={359} alt='' />
        </div>
      </div>
      <div className='md:my-10'>
        <div className='md:w-[1282px] md:p-10 md:border-b-[0.3px] md:border-mediumGray md:mx-10'>
          <h1>All posts</h1>
        </div>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Image src='/loadingIcon.gif' className='md:mt-4' width={50} height={50} alt='loading' />
          </div>
        ) : (
          currentPosts.map((post) => (

            <Link  href={`/posts/${post.slug.current}`}>
            <div key={post._id} className='md:flex grid-cols-1 lg:grid-cols-2 md:p-10 p-8 hover:bg-lightYellow cursor-pointer'>
              <div className='md:p-8'>
              {post.tags.map((tag) => (
                  <p key={tag.id} className='font-sans md:text-[16px] md:leading-[20px] leading-10 font-medium tracking-[3px] uppercase text-purpo'>{tag.name}</p>

                  ))}
                <h2 className='md:my-4 md:w-[642px] md:text-[36px] text-[30px]'>{post.title}</h2>
                <p className='font-sans font-normal text-[16px] leading-[28px] text-[#6D6E76] md:w-[642px]'>{post.excerpt}</p>
                <div className='flex flex-wrap'>
                  
                </div>
              </div>
            </div>
            </Link>
          ))
        )}
      </div>
      <div className='justify-center items-center flex gap-4'>
        <button onClick={handlePrev} className='flex items-center hover:text-black hover:font-bold'><IoIosArrowBack /> Prev</button>
        <button onClick={handleNext} className='flex items-center hover:text-black hover:font-bold'>Next <IoIosArrowForward /></button>
      </div>
    </div>
  );
}

export default Page;
