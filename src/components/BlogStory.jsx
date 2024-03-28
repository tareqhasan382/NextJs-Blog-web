import React from "react";
import Image from "next/image";
// https://next-js-blog-web.vercel.app
// http://localhost:3000
const getBlogs = async () => {
  try {
    const result = await fetch("http://localhost:3000/api/getblog", {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache, must-revalidate"
      }
    });
    if (!result.ok) {
      throw new Error("Failed to fetch data");
    }
    return result.json();
  } catch (error) {
    console.log(error);
  }
};
const BlogStory = async () => {
  const blogs = await getBlogs();
//  console.log("Blogs:", blogs?.data);
  return (
    <div className=" px-5 max-w-[1280px] h-auto mx-auto py-10 gap-5 overflow-x-hidden ">
      <h1>Blogs</h1>
      {blogs?.data &&
        blogs.data.map((blog) => (
          <div key={blog._id} className=" w-full h-full ">
            <div>
              <h3>{blog?.title} </h3>
              <div className=" w-full bg-slate-100 flex flex-wrap ">
                <span className=" text-6xl font-bold ">Story</span>
                <div className="  h-10 w-full bg-red-200 overflow-hidden ">
                <div
                  className=" ProseMirror whitespace-pre-line  px-6 py-4"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: blog?.content }}
                />
                </div>
              </div>
              <div>
                <Image
                  src={blog?.img}
                  width={300}
                  height={400}
                  alt="Blog Image"
                  layout="lazy"
                  
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogStory;

// "Cache-Control": "no-cache, no-store, must-revalidate",
// Pragma: "no-cache",
// Expires: 0,