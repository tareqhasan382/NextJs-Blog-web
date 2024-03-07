import Categorie from "@/components/Categorie";
import DiscoverTopic from "@/components/DiscoverTopic";
import MostPopular from "@/components/MostPopular";
import RecentPost from "@/components/RecentPost";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" px-5 max-w-[1280px] h-auto mx-auto py-10 gap-5 overflow-x-hidden ">
      <div className=" ">
        <h1 className=" lg:text-7xl text-2xl ">
          <span className=" font-bold ">Hey,Blog here! </span>
          <span>Discover my stories and creative ideas.</span>
        </h1>
      </div>
      <div className=" flex flex-wrap justify-center items-center my-5 ">
        <div className=" lg:w-1/2 w-full  ">
          <Image
            src="https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image"
            width={600}
            height={200}
            className=" object-cover lg:h-[400px] h-[200px] "
          />
        </div>
        <div className=" lg:w-1/2 w-full  ">
          <h1 className=" lg:text-4xl text-xl font-bold text-left ">
            Simple ways to inspire your Inner Innovator
          </h1>
          <p className=" text-justify ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odit
            quod nostrum aperiam hic cum omnis eveniet? Asperiores praesentium
            iste libero a sint, quae, harum, sequi itaque quibusdam inventore
            qui? Laudantium provident ea cumque placeat odit! Ratione,
            doloremque rerum sit sequi placeat vel! Temporibus praesentium
            alias, rem nam repellendus tempora repudiandae laboriosam totam id
            reiciendis blanditiis, molestiae repellat, culpa voluptatem! A odit
            beatae cumque molestias asperiores non delectus expedita aliquam
            natus, sint voluptatibus sit voluptate, sapiente tempore porro
            commodi eaque mollitia! Earum animi ratione sapiente magni tempora
            hic cupiditate quam.
          </p>
          <button className=" px-3 py-2 text-black font-medium bg-gray-200 hover:bg-gray-400 duration-200 rounded mt-8 ">
            Read More
          </button>
        </div>
      </div>
      {/* ============categories========= */}
      <div>
        <h1 className=" font-bold lg:text-2xl text-xl ">Popular Categories</h1>
        <div className=" flex flex-wrap gap-4 my-6 ">
          <Categorie />
          <Categorie />
          <Categorie />
          <Categorie />
          <Categorie />
          <Categorie />
        </div>
      </div>
      {/* ============Recent Posts========= */}
      <div className=" flex lg:flex-row flex-col gap-5 ">
        {/* ============Recent Posts Left========= */}
        <div className=" flex flex-col lg:w-3/4 gap-3 ">
          <h1 className=" font-bold lg:text-2xl text-xl ">Recent Posts</h1>
          <RecentPost />
          <RecentPost />
          <RecentPost />
        </div>
        {/* ============Recent Posts Right========= */}
        <div className="lg:w-1/4 ">
          <p>Whats hot</p>
          <h1 className=" font-bold lg:text-2xl text-xl ">Most Popular</h1>
          <div className=" flex flex-col my-5 gap-5 ">
            <MostPopular />
            <MostPopular />
            <MostPopular />
            <MostPopular />
            <DiscoverTopic />
          </div>
        </div>
      </div>
      {/* ============pagination========= */}
      <div className=" flex justify-between my-4 ">
        <button className=" w-24 h-10 bg-red-800 hover:bg-red-600 text-white ">
          Previous
        </button>
        <button className=" w-24 h-10 bg-red-800 hover:bg-red-600 text-white ">
          Next
        </button>
      </div>
    </div>
  );
}
