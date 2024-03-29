import React from "react";
import MostPopular from "./MostPopular";
import DiscoverTopic from "./DiscoverTopic";
import CardList from "./CardList";

const BlogStory = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const {cat}= searchParams
  return (
    <div className=" px-5 max-w-[1280px] h-auto mx-auto py-10 gap-5 overflow-x-hidden ">
     <h1 className=" flex justify-center items-center w-full h-10 bg-orange-400 text-write text-xl font-bold text-center text-white ">{cat} Blog</h1>
     <div className=" flex lg:flex-row flex-col gap-5  ">
        {/* ============Recent Posts Left========= */}
        <div className=" flex flex-col lg:w-3/4 gap-3 ">
          <h1 className=" font-bold lg:text-2xl text-xl ">Recent Posts</h1>
          {/* <RecentPost page={page} /> */}
          <CardList page={page} cat={cat} />
        </div>
        {/* ============Recent Posts Right========= */}
        <div className="lg:w-1/4 ">
          <p>Whats hot</p>
          <h1 className=" font-bold lg:text-2xl text-xl ">Most Popular</h1>
          <div className=" flex flex-col my-5 gap-5 ">
            <MostPopular />
            <DiscoverTopic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogStory;

// "Cache-Control": "no-cache, no-store, must-revalidate",
// Pragma: "no-cache",
// Expires: 0,