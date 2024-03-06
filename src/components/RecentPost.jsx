import Image from 'next/image';
import React from 'react';
// className=" lg:w-3/4  "
const RecentPost = () => {
  return (
    <div >
         
          <div className=" flex lg:flex-row flex-col gap-4 my-5 ">
            <div>
              <Image
                src="https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image"
                width={400}
                height={300}
                className=" object-cover h-[300px] "
              />
            </div>
            <div className=" flex flex-col space-y-4  justify-center ">
              <h1>2023-08-28 -CODING</h1>
              <h1 className=" lg:text-4xl text-xl font-bold ">
                Easiest Way for React State Management
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis alias optio sapiente expedita molestiae dolores at illo
                dolor iste...
              </p>
              <p>Read More</p>
            </div>
          </div>
        </div>
  );
}

export default RecentPost;
