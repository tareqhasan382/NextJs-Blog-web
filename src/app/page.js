import Categorie from "@/components/Categorie";
import DiscoverTopic from "@/components/DiscoverTopic";
import MostPopular from "@/components/MostPopular";
// import ReactHtmlParser from "react-html-parser";
import RecentPost, { getBlogs } from "@/components/RecentPost";
import Image from "next/image";
import Link from "next/link";

//http://localhost:3000
//https://next-js-blog-web.vercel.app
export const baseURL = "https://next-js-blog-web.vercel.app";
export default async function Home({ searchParams }) {
  const blogs = await getBlogs();

  // console.log("blog:", blogs?.data?.[0]);
  const blog = blogs?.data?.[1];
  const page = parseInt(searchParams?.page) || 1;
  return (
    <div className=" px-5 max-w-[1280px] h-auto mx-auto py-10 gap-5 overflow-x-hidden ">
      <div className=" ">
        <h1 className=" lg:text-7xl text-2xl ">
          <span className=" font-bold ">Hey,Blog here! </span>
          <span>Discover my stories and creative ideas.</span>
        </h1>
      </div>
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
      {/* ============pagination========= */}
    </div>
  );
}
