import BlogStory from '@/components/BlogStory';
import React from 'react';

const page = ({ searchParams }) => {
  return (
    <div className=' w-full '>
      <BlogStory searchParams={searchParams} />
    </div>
  );
}

export default page;
