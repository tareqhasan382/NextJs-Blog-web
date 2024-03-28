import React from "react";
import Comment from "@/components/Comment";
import DiscoverTopic from "@/components/DiscoverTopic";
import Editors from "@/components/Editors";
import MostPopular from "@/components/MostPopular";
import Image from "next/image";
// import { useRouter } from 'next/router';

const getBlog = async (id) => {
    try {
      const result = await fetch(`https://next-js-blog-web.vercel.app/api/getblog/${id}`, {
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

const DetailsPage = async({ params: { id } }) => {
//   const router = useRouter();
//   const params = router.query;
   console.log("id:",id)
const blog = await getBlog(id)
// console.log("data:",data)
  return (
    <div className=" px-5 max-w-[1280px] h-auto mx-auto py-10 gap-5 overflow-x-hidden ">
      {/* ===========header========= */}
     
      <div className=" flex flex-wrap justify-center my-5 ">
        <div className="lg:w-1/2  w-full lg:pr-5 flex flex-col justify-between ">
          <p className=" lg:text-4xl text-xl font-bold text-left line-clamp-10  ">
            {blog?.data?.title}
          </p>
          <div className=" flex gap-5 lg:my-10 my-5 ">
            <Image
              src="https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image"
              width={50}
              height={50}
              className=" object-cover lg:h-[50px]  h-[50px] rounded-full "
            />
            <div>
              <h3 className=" font-semibold ">William Radolph</h3>
              <p>25 April 2023</p>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/2 w-full  ">
          <Image
            src={blog?.data.img}
            alt="Image"
            width={600}
            height={200}
            className=" object-cover lg:h-[300px] h-[200px] "
          />
        </div>
        {/* ===========body========= */}
        <div className=" flex lg:flex-row flex-col gap-5 mt-10 ">
          {/* ============Recent Posts Left========= */}
          <div className=" flex flex-col lg:w-3/4 gap-3  ">
            <div>
            <div
                  className=" ProseMirror whitespace-pre-line  px-6 py-4"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: blog?.data.content }}
                />
            </div>
            {/* ===========Comment========= */}
        <div className=" w-full my-5 ">
            <h1 className="lg:text-4xl text-xl font-bold">Comments</h1>
           <Comment/>
           
        </div>
          </div>
          {/* ============Recent Posts Right========= */}
          <div className="lg:w-1/4 ">
            <p>Whats hot</p>
            <h1 className=" font-bold lg:text-2xl text-xl  ">Most Popular</h1>
            <div className=" flex flex-col my-5 gap-5 ">
              <MostPopular title="Calture" bg="bg-orange-400" />
              <MostPopular />
              <MostPopular title="Coding" bg="bg-blue-400" />
             
              {/* <Discover By Topic /> */}
              <DiscoverTopic/>
              <Editors/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DetailsPage;
