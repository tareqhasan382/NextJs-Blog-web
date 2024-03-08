import Comment from "@/components/Comment";
import MostPopular from "@/components/MostPopular";
import Image from "next/image";
import React from "react";

const page = () => {
    
  return (
    <div className=" px-5 max-w-[1280px] h-auto mx-auto py-10 gap-5 overflow-x-hidden ">
      {/* ===========header========= */}
      <div className=" flex flex-wrap justify-center my-5 ">
        <div className="lg:w-1/2  w-full lg:pr-5 flex flex-col justify-between ">
          <p className=" lg:text-4xl text-xl font-bold text-left line-clamp-10  ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
            src="https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              molestiae repellat vero numquam, quae debitis, ipsum temporibus
              veritatis ratione quo odio laborum enim distinctio architecto
              facilis sed nisi maiores officia.
            </p>
            <p className=" my-5 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              molestiae repellat vero numquam, quae debitis, ipsum temporibus
              veritatis ratione quo odio laborum enim distinctio architecto
              facilis sed nisi maiores officia. Natus, quidem eligendi, rerum
              praesentium libero voluptatem repellendus quibusdam explicabo
              itaque nobis aut alias est cupiditate inventore odio. Libero,
              perspiciatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              molestiae repellat vero numquam, quae debitis, ipsum temporibus
              veritatis ratione quo odio laborum enim distinctio architecto
              facilis sed nisi maiores officia. Natus, quidem eligendi, rerum
              praesentium libero voluptatem repellendus quibusdam explicabo
              itaque nobis aut alias est cupiditate inventore odio.
            </p>
          </div>
          {/* ============Recent Posts Right========= */}
          <div className="lg:w-1/4 ">
            <p>Whats hot</p>
            <h1 className=" font-bold lg:text-2xl text-xl  ">Most Popular</h1>
            <div className=" flex flex-col my-5 gap-5 ">
              <MostPopular title="Calture" bg="bg-orange-400" />
              <MostPopular />
              <MostPopular title="Coding" bg="bg-blue-400" />
             
              {/* <DiscoverTopic /> */}
            </div>
          </div>
        </div>
        {/* ===========Comment========= */}
        <div className=" w-full ">
            <h1 className="lg:text-4xl text-xl font-bold">Comments</h1>
           <Comment/>
        </div>
      </div>
    </div>
  );
};

export default page;
