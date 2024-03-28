"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import parse from "html-react-parser";
import TipTap from "./TipTap";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { baseURL } from "@/app/page";
const Write = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [selectImage, setSelectImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (!file) return;
    setSelectImage(file);
  };
  const handleContentChance = (value) => {
    setContent(value);
  };

  const handleTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
    if (value.trim() === "") {
      setTitleError(true);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!selectImage) {
      toast.warning("Please select a Image to upload.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }
    const formData = new FormData();
    formData.append("file", selectImage);
    formData.append("upload_preset", "Reservation");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dsybkyula/image/upload",
      formData
    );
    const imageUrl = response?.data?.secure_url;
   // console.log("imgUrl:",imageUrl)
    setImage(imageUrl);
    const data = {
      img: response?.data?.secure_url,
      userId: session?.user?._id,
      content: content,
      title: title,
      category: "Story",
    };

    try {
      if (title.trim() === "") {
        setTitleError(true);
        setLoading(false);
        return;
      } else {
        setTitleError(false);
      }
      if (content.trim() === "") {
        setContentError(true);
        setLoading(false);
        return;
      } else {
        setContentError(false);
      }
      console.log("data:",data)
      // https://next-js-blog-web.vercel.app
      // http://localhost:3000
      const response = await fetch(`${baseURL}/api/blog`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setLoading(false);
        router.refresh();
        setContent("");
        setTitle("");
        toast.success("Blog Upload Successfully");
        router.push("/blog");
      } else {
        setLoading(false);
        toast.error("Blog Upload Failed");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Blog Upload Failed");
    }
  };

  // const handleSubmit = async(event) => {
  //   setLoading(true);

  //   event.preventDefault()

  //   if(title.trim()===""){
  //     setTitleError(true)
  //     return
  //   }else {
  //     setTitleError(false)
  //   }
  //   if(content.trim()===""){
  //     setContentError(true)
  //     return
  //   }else{
  //     setContentError(false)
  //   }

  // const data={ img:image, userId:session?.user?._id,content:content,title:title,category:"Story" }
  // const result= await fetch('http://localhost:3000/api/blog',{
  //   method:"POST",
  //   headers:{"Content-Type":"application/json"},body:JSON.stringify(data)
  // })
  // console.log("result:",result)
  // if (result.ok) {
  //   setLoading(false);
  //   setContent("");
  //   setTitle("")
  //   toast.success("Blog Upload Successfully");
  // }else{
  //   setLoading(false);
  //   setContent("");
  //   setTitle("")
  //   toast.error("Blog Upload Feild");

  // }

  // }

  return (
    <div className="lg:px-5 px-1 max-w-[1280px] mx-auto py-10 gap-5 overflow-x-hidden ">
      {/* ===========header========= */}
      <h1 className=" text-center text-2xl font-bold my-4 ">Write blog</h1>
      <div>
        <form onSubmit={handleSubmit} className=" flex flex-col ">
          <input
            className="lg:w-[1250px] w-full p-2 lg:text-4xl text-lg border-gray-300 border-b-[1px] outline-none focus:border-gray-600 text-black "
            type="text"
            id="title"
            name="title"
            value={title}
            placeholder="Title"
            onChange={handleTitle}
          />
          {titleError && (
            <span className="text-sm text-red-500 ">
              Title field is required
            </span>
          )}

          {/* <textarea
          className="lg:w-[1250px] w-full h-44 p-2 text-lg border-gray-300 border-b-[1px] outline-none focus:border-gray-600 text-black "
          type="text"
          id="text"
          name="text"
          placeholder= "Tell your story"
          {...register("text", { required: true })}
         
        />
        {errors.text && <span className="text-sm text-red-500 ">This field is required</span>} */}
          <div className=" my-2 ">
            <TipTap
              content={content}
              onChange={(newContent) => handleContentChance(newContent)}
            />
            {contentError && (
              <span className="text-sm text-red-500 ">Story is required</span>
            )}
          </div>
          <div className=" flex flex-col gap-5 my-3 cursor-pointer ">
            {/* <LuPlusCircle size={30} onClick={()=>setOpen(!open)}  /> */}
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`${loading ? " cursor-not-allowed w-36 py-3 bg-blue-500 text-white font-semibold rounded-md my-3":"w-36 py-3 bg-blue-500 text-white font-semibold rounded-md my-3"}`}
          >
            {loading? "Loading":"Submit"}
          </button>
        </form>
      </div>

      <div className=" w-full text-wrap ">
        {/* <ReactQuill placeholder="Tell your story" theme="snow" value={value} onChange={setValue} /> */}
        {/* src={URL.createObjectURL(selectImage)} */}
        {selectImage ? (
          <Image
            src={URL.createObjectURL(selectImage)}
            alt="img"
            height={50}
            width={50}
            className=" object-fill lg:w-44 w-full h-auto "
          />
        ) : (
          <p className=" text-left ">Image upload preview will appear here!</p>
        )}
      </div>
    </div>
  );
};

export default Write;
