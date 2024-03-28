import Image from "next/image";
import React from "react";
import Pagination from "./Pagination";
import Link from "next/link";
const getBlogs = async (page) => {
  try {
    const result = await fetch(`https://next-js-blog-web.vercel.app/api/getblog?page=${page}`, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache, must-revalidate",
      },
    });
    if (!result.ok) {
      throw new Error("Failed to fetch data");
    }
    return result.json();
  } catch (error) {
    console.log(error);
  }
};
const RecentPost = async ({page}) => {
  const blogs = await getBlogs(page);
  const per_page_data= 3
  const hasPrev = per_page_data*(page-1) > 0
  const hasNext =per_page_data*(page-1)+per_page_data<blogs.total
  return (
    <div>
      {blogs?.data &&
        blogs?.data.map((blog) => (
          <div
            key={blog._id}
            className="   flex lg:flex-row flex-col gap-4 my-2 "
          >
            <div className="   ">
              <Image
                src={blog?.img}
                width={600}
                height={400}
                alt="blog Image"
                className=" object-fill h-[230px] w-[350px]  "
              />
            </div>
            <div className=" w-full  flex flex-col justify-center  ">
              <h1>2023-08-28 -CODING</h1>
              <h1 className=" lg:text-xl text-xl font-bold ">{blog?.title}</h1>
              <div>
                  {blog?.content && (
              <>
                {blog.content
                  .split("\n") 
                  .slice(0, 2) 
                  .map((line, index) => (
                    <div key={index} className="line-clamp-2">
                      < div
                      style={{ whiteSpace: "pre-line" }}
                       dangerouslySetInnerHTML={{__html:line}} />
                    </div>
                  ))}
              </>
            )}
              </div>
              <Link href={`/details/${blog._id}`} className=" pb-3 " >
            <button className=" px-3 py-2 text-white font-medium bg-black hover:bg-gray-900 duration-200 rounded mt-8 ">
              Read More
            </button>
          </Link>
            </div>
          </div>
        ))}
        <div>
        <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
      </div>
    </div>
  );
};

export default RecentPost;

//       className=" ProseMirror whitespace-pre-line  px-6 py-4"