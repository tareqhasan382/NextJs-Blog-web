"use client"
import React, { useState } from "react";

const Comment = () => {
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
          className=" lg:w-[80%] w-full p-2 border-gray-300 border-[1px] rounded-lg mb-4 outline-none focus:border-gray-600 text-black "
        />
        <button
          type="submit"
          className=" w-28 lg:ml-2 px-2 py-2 rounded-lg bg-blue-500 text-white "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comment;
