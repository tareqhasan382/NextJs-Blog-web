"use client";
import { baseURL } from "@/app/page";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FormateDate from "./FormateDate";
// blogId, comment
const Comment = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const { data: session } = useSession();
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      blogId: blogId,
      comment: comment,
    };
    try {
      const response = await fetch(`${baseURL}/api/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setComment("");
        toast.success("Comment Successfully");
      } else {
        
        toast.error("Comment Failed");
      }
    } catch (error) {
     
      toast.error("Comment Failed");
    }
  };

  useEffect(() => {
    const getComment = async () => {
      try {
        const result = await fetch(`${baseURL}/api/getComment/${blogId}`, {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache, must-revalidate",
          },
        });

        if (!result.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await result.json();
      
        setComments(data?.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    getComment();
  }, [blogId]);

  // console.log("data:", comments);
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
        {session?.user && (
          <button
            type="submit"
            className=" w-28 lg:ml-2 px-2 py-2 rounded-lg bg-gray-900 text-white "
          >
            Submit
          </button>
        )}
      </form>
      <div>
        { comments.length > 0 &&
          comments.map((item)=>(
            <div key={item?._id}>
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
            <p><FormateDate date={item?.createdAt} /> </p>
          </div>
        </div>
        <p>{item?.comment}</p>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
      </div>
          ))
        }
      </div>
    </div>
  );
};

export default Comment;
