"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

const Comment = () => {
  const {data:session}= useSession();
  // console.log("session:",session?.user)
    const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the comment, like sending it to a server
    console.log("Submitted comment:", comment);
    // Reset the textarea value
    setComment('');
  };
  return (
    <div className=" my-3 ">
      <form onSubmit={handleSubmit} className=" flex flex-col ">
        <textarea
          type="text"
          multiple
          value={comment}
        onChange={handleChange}
          placeholder=" Write a comment..."
          className="lg:w-[90%] w-full p-2 border-gray-300 border-[1px] rounded-lg mb-4 outline-none focus:border-gray-600 text-black "
        />
       {
        session?.user &&  <button
        type="submit"
        className=" w-28 lg:ml-2 px-2 py-2 rounded-lg bg-gray-900 text-white "
      >
        Submit
      </button>
       }
      </form>
      <div>
          <div className=" flex flex-row gap-5 items-center my-4 ">
          <Image
              src="https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image"
              width={40}
              height={40}
              className=" object-cover lg:h-[40px]  h-[40px] rounded-full "
            />
            <div>
              <h3 className=" font-semibold ">Name</h3>
              <p>22.03.2023</p>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           </div>
    </div>
  );
};

export default Comment;
