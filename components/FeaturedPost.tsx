"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import Link from 'next/link';
import { Post } from '@/types/Interface';
import { client } from "@/sanity/lib/client";

async function getFeaturedPost() {
  const query = `*[_type == "post"][0]{
    title,
    publishedAt,
    excerpt,
    author,
    body[]{
      ...,
      _type == "image" => {
        ...,
        "asset": asset->{
          _id,
          url,
          metadata {
            dimensions,
            lqip,  // Low Quality Image Placeholder
            palette
          }
        },
        alt
      }
    },
    slug
  }`;
  const data = await client.fetch(query);
  return data;
}

async function getOtherPosts() {
  const query = `*[_type == "post"][1..4]{
    title,
    publishedAt,
    excerpt,
    author,
    slug
  }`;
  const data = await client.fetch(query);
  return data;
}

function FeaturedPost() {
  const [featuredPost, setFeaturedPost] = useState<Post | null>(null);
  const [otherPosts, setOtherPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const featured = await getFeaturedPost();
      const others = await getOtherPosts();
      setFeaturedPost(featured);
      setOtherPosts(others);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className='flex justify-center items-center md:my-10'><Image src='/iconsNew-loading.gif' className='md:mt-4' width={50} height={50} alt='loading' /></div>; // Handle loading state if needed
  }

  // Extract the first image from the body array if it exists
  const featuredImage = featuredPost?.body.find((block: { _type: string; }) => block._type === 'image');

  return (
    <div className='md:w-full w-full flex justify-center'>
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-center mx-auto md:p-24 gap-10'>
        <div>
          <h2 className='hidden md:block md:text-[36px]'>Featured Post</h2>
          <div className='border-[0.1px] border-mediumGray p-4 md:mt-4'>
            {/* Render featured post details */}
            {featuredPost && (
              <>
                {featuredImage && (
                  <Image
                    src={featuredImage.asset.url}
                    width={669}
                    height={352}
                    alt={featuredImage.alt || "Feature image"}
                    className='md:w-[669px] md:h-[352px] mt-4'
                  />
                )}
                <h3 className='md:w-[550px] my-4 md:text-[28px] text-[20px]'>{featuredPost.title}</h3>
                <p className='font-sans text-[14px] text-black leading-[20px]'>
                  By <span className='text-purpo'>{featuredPost.author}</span> <span>l {new Date(featuredPost.publishedAt).toDateString()}</span>
                </p>
                <p className='body1 md:w-[551px]'>{featuredPost.excerpt}</p>
                <CustomButton
                  title="Read More"
                  containerStyles="button"
                  rightIcon="/right-arrow.svg"
                />
              </>
            )}
          </div>
        </div>
        <div className='w-[517px]'>
          <div className='md:flex justify-between items-center'>
            <h2 className='hidden md:block'>All posts</h2>
            <Link href='/Blog' className='cursor-pointer'>
              <p className='body1'>View All</p>
            </Link>
          </div>
          <div className='grid'>
            {/* Render other posts */}
            {otherPosts.map((post, index) => (
              <Link key={post.slug.current} href={`/posts/${post.slug.current}`}>
                <div className='md:w-[517px] w-[420px] h-[131px] hover:bg-lightYellow cursor-pointer md:p-4 p-4 mt-4 shadow-md'>
                  <p className='font-sans text-[14px] text-black leading-[20px]'>
                    By <span className='text-purpo'>{post.author}</span> <span>l {new Date(post.publishedAt).toDateString()}</span>
                  </p>
                  <h4>{post.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
