import React from 'react'
import {client} from '@/sanity/lib/client'
import { Params, Post } from '@/types/Interface';
import './globals.css'
import { PortableText } from 'next-sanity';
import Image from 'next/image';


async function getPost(slug:string){
  const query=`
  *[_type =="post" && slug.current == "${slug}"][0]{
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    body,
    tags[]->{
      id,
      slug,
      name,
    },
      
  }
  `;

  const post = await client.fetch(query)
  return post;
}

async function page({ params }: Params) {
  const post: Post = await getPost(params.slug);
  console.log(post, 'post');
  return (
    <div className='md:w-full flex justify-center items-center'>
      <div className=''>
        <p className='body1'>{new Date(post.publishedAt).toDateString()}</p>
        <h1 className='text-start md:w-[768px]'>{post.title}</h1>
        {post.tags.map((tag) => (
          <h4 key={tag.id} className='md:mt-6 bg-purpo text-white border-2 p-2 inline-block' >{tag.name}</h4>

          ))}
          
          <div className='mt-14 text-justify max-w-2xl list-disc'>
          <PortableText
          value={post.body}
          components={{
            
            block: {
              // Apply styles to normal blocks of text
              normal: ({ children }) => <p className='text-justify leading-relaxed mb-4'>{children}</p>,
              // Apply styles to different heading levels
              h1: ({ children }) => <h1 className='text-3xl font-bold mt-8 mb-4'>{children}</h1>,
              h2: ({ children }) => <h2 className='text-2xl  font-semibold mt-6 mb-4'>{children}</h2>,
              h3: ({ children }) => <h3 className='text-xl font-medium mt-4 mb-4'>{children}</h3>,
              h4: ({ children }) => <h4 className='text-lg font-medium mt-4 mb-4'>{children}</h4>,
              h5: ({ children }) => <h5 className='text-base font-medium mt-4 mb-4'>{children}</h5>,
              h6: ({ children }) => <h6 className='text-sm font-medium mt-4 mb-4'>{children}</h6>,
            },
            list: {
              // Apply styles to ordered lists
              bullet: ({ children }) => <ul className='list-disc list-inside pl-5 mb-4'>{children}</ul>,
              // Apply styles to unordered lists
              number: ({ children }) => <ol className='list-decimal list-inside pl-5 mb-4'>{children}</ol>,
            },
            listItem: {
              // Apply styles to individual list items
              bullet: ({ children }) => <li className='mb-2'>{children}</li>,
              number: ({ children }) => <li className='mb-2'>{children}</li>,
            },
          }
          
        }
        
        />
          </div>
      </div>
      
    </div>
  );
}

export default page

