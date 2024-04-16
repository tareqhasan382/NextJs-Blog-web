import Categorie from "@/components/Categorie";
import DiscoverTopic from "@/components/DiscoverTopic";
import Hero from "@/components/Hero";
import MostPopular from "@/components/MostPopular";
import RecentPost from "@/components/RecentPost";

//http://localhost:3000
//https://next-js-blog-web.vercel.app
export const baseURL = "https://next-js-blog-web.vercel.app";
export default async function Home({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1;
  return (
    <div className=" px-5 max-w-[1280px] h-auto mx-auto py-10 gap-5 overflow-x-hidden ">
      <div className=" ">
        <h1 className=" lg:text-7xl text-2xl ">
          <span className=" font-bold ">Hey,Blog here! </span>
          <span>Discover my stories and creative ideas.</span>
        </h1>
      </div>
      <Hero />
      {/* ============categories=========px-3 py-1 */}
      <div>
        <h1 className=" font-bold lg:text-2xl text-xl ">Popular Categories</h1>
        <div className=" flex flex-wrap gap-4 my-4 ">
          <Categorie />
        </div>
      </div>
      {/* ============Recent Posts========= */}
      <div className=" flex lg:flex-row flex-col gap-5  ">
        {/* ============Recent Posts Left========= */}
        <div className=" flex flex-col lg:w-3/4 gap-3 ">
          <h1 className=" font-bold lg:text-2xl text-xl ">Recent Posts</h1>
          <RecentPost page={page} />
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
}
