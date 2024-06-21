import React from 'react';
import { client } from '@/sanity/lib/client';
import { Params, Post } from '@/types/Interface';
import './globals.css';
import { PortableText } from 'next-sanity';
import Image from 'next/image';

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == $slug]{
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    _id,
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
    tags[]->{
      _id,
      slug,
      name
    },
  }
  `;

  const post = await client.fetch(query, { slug });
  return post[0];
}

async function page({ params }: Params) {
  const post: Post = await getPost(params.slug);
  console.log(post, 'post');
  return (
    <div className='md:w-full md:mx-0 mx-4 flex justify-center items-center md:mt-20'>
      <div className=''>
        <h3 className='text-purpo'>{post.author}</h3>
        <p className='body1'>Posted on {new Date(post.publishedAt).toDateString()}</p>
        <h1 className='text-start md:w-[768px]'>{post.title}</h1>
        {post.tags.map((tag) => (
          <h4 key={tag.id} className='md:mt-6 bg-purpo text-white border-2 p-2 inline-block'>{tag.name}</h4>
        ))}

        <div className='mt-14 text-justify max-w-2xl list-disc'>
          <PortableText
            value={post.body}
            components={{
              block: {
                normal: ({ children }) => <p className='text-justify leading-relaxed mb-4'>{children}</p>,
                h1: ({ children }) => <h1 className='md:text-3xl  font-bold mt-8 mb-4'>{children}</h1>,
                h2: ({ children }) => <h2 className='md:text-2xl  font-semibold mt-6 mb-4'>{children}</h2>,
                h3: ({ children }) => <h3 className='md:text-xl  font-medium mt-4 mb-4'>{children}</h3>,
                h4: ({ children }) => <h4 className='md:text-lg  font-medium mt-4 mb-4'>{children}</h4>,
                h5: ({ children }) => <h5 className='md:text-base  font-medium mt-4 mb-4'>{children}</h5>,
                h6: ({ children }) => <h6 className='md:text-sm  font-medium mt-4 mb-4'>{children}</h6>,
              },
              list: {
                bullet: ({ children }) => <ul className='list-disc list-inside pl-5 mb-4'>{children}</ul>,
                number: ({ children }) => <ol className='list-decimal list-inside pl-5 mb-4'>{children}</ol>,
              },
              listItem: {
                bullet: ({ children }) => <li className='mb-2'>{children}</li>,
                number: ({ children }) => <li className='mb-2'>{children}</li>,
              },
              types: {
                image: ({ value }) => {
                  const { asset, alt } = value;
                  if (!asset || !asset.url) {
                    return null;
                  }
                  return (
                    <div className='md:relative relative md:w-[800px] w-[350px] h-[200px] md:h-[382px] md:my-4'>
                      <Image
                        src={asset.url}
                        alt={alt || 'Post Image'}
                        layout='fill'
                        objectFit='cover'
                        placeholder='blur'
                        blurDataURL={asset.metadata.lqip}
                      />
                    </div>
                  );
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
