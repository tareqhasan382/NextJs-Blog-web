"use client"
import React, { useEffect, useState } from 'react';
import { getBlogs } from './getBlogs';
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
      const blogs = async ()=>{
        const blogs = await getBlogs();
        setBlogs(blogs)
      }
      blogs();
    },[])
   // console.log("blog:", blogs?.data?.[0]);
    const blog = blogs?.data?.[1];
    
  return (
    <div>
      {blog && (
        <div className=" flex flex-wrap justify-center items-center my-5 ">
          <div className=" lg:w-1/2 w-full  ">
            <Image
              src={blog?.img}
              alt="Image"
              width={600}
              height={200}
              className=" object-cover lg:h-[400px] h-[200px] "
            />
          </div>
          <div className=" lg:w-1/2 w-full  ">
            <h1 className=" lg:text-4xl text-xl font-bold text-left ">
              {blog?.title}
            </h1>
            <div>
              {blog?.content && (
                <>
                  <div
                    className="ProseMirror whitespace-pre-line px-6 py-4"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    <div
                      className=" ProseMirror whitespace-pre-line  px-6 py-4"
                      style={{ whiteSpace: "pre-line" }}
                      dangerouslySetInnerHTML={{
                        __html: blog?.content?.substring(0, 400),
                      }}
                    />
                  </div>
                </>
              )}
            </div>
            <Link href={`/details/${blog?._id}`}>
              <button className=" px-3 py-2 text-black font-medium bg-gray-200 hover:bg-gray-400 duration-200 rounded mt-8 ">
                Read More
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
