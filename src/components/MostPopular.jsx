import React from 'react';
import FormateDate from './FormateDate';
import Link from 'next/link';
export const getBlogs = async (page) => {
  try {
    const result = await fetch(`https://next-js-blog-web.vercel.app/api/mostPopular`, {
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
const MostPopular = async () => {
 const category = await getBlogs();
  return (
    <>
    {
      category?.data.map(item=>(
        <div key={item?._id} className=" space-y-2 ">
              <button className={`${" bg-red-500 text-white px-3 py-1 rounded-2xl"} " text-white px-3 py-1 rounded-2xl " `}>
                {item?.category}
              </button>
              <Link href={`/details/${item._id}`}>
              <h3 className=" font-medium lg:text-base text-sm cursor-pointer hover:text-blue-400 ">
                {item?.title}
                
              </h3>
              </Link>
              <div className=' flex '>
                <span className="  font-medium ">{item?.userId?.name} -</span> <FormateDate date={item?.createdAt} />
              </div>
            </div>
      ))
    }
    </>
  );
}

export default MostPopular;
