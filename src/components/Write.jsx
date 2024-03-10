"use client"
import React, { useState } from "react";
import { LuPlusCircle } from "react-icons/lu";
import { FaRegFileImage,FaPhotoVideo  } from "react-icons/fa";
import parse from 'html-react-parser';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import TipTap from "./TipTap";
const Write = () => {
  const router = useRouter()
  const [loading,setLoading]=useState(false)
  const [imageError,setImageError]=useState(false)
  const [open,setOpen]=useState(false)
  const [selectImage, setSelectImage] = useState(null);
  const [content,setContent]=useState("")
const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  setImageError(false)
  setSelectImage(file)
  const inputfile = new FormData();
console.log("Image:",inputfile)
}
const handleContentChance=(value)=>{
  setContent(value)
}
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm()

const onSubmit = async(data) => {
if(selectImage ===null){
  setImageError(true)
  return 
}
  console.log("data:",data)
  console.log("selectImage:",selectImage)
}
console.log("content:",content)

  return (
    <div className="lg:px-5 px-1 max-w-[1280px] mx-auto py-10 gap-5 overflow-x-hidden">
      {/* ===========header========= */}
      <h1 className=" text-center text-2xl font-bold my-4 ">Write blog</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col ">
        <input
          className="lg:w-[1250px] w-full p-2 lg:text-4xl text-lg border-gray-300 border-b-[1px] outline-none focus:border-gray-600 text-black "
          type="text"
          id="title"
          name="title"
          placeholder="Title" 
          {...register("title", { required: true })}
        />
        {errors.title && <span className="text-sm text-red-500 ">This field is required</span>}
        
        {/* <textarea
          className="lg:w-[1250px] w-full h-44 p-2 text-lg border-gray-300 border-b-[1px] outline-none focus:border-gray-600 text-black "
          type="text"
          id="text"
          name="text"
          placeholder= "Tell your story"
          {...register("text", { required: true })}
         
        />
        {errors.text && <span className="text-sm text-red-500 ">This field is required</span>} */}
        <TipTap 
        content={content}
        onChange={(newContent)=>handleContentChance(newContent)}
         />
        <button type="submit" className=" w-36 py-3 bg-blue-500 text-white font-semibold rounded-md my-3 ">Submit</button>
        </form>
        <div
                className="ProseMirror whitespace-pre-line  px-6 py-4"
                style={{ whiteSpace: "pre-line" }}
                dangerouslySetInnerHTML={{ __html: content }}
              />
      </div>
      <div className=" flex flex-col gap-5 my-3 cursor-pointer ">
      {/* <LuPlusCircle size={30} onClick={()=>setOpen(!open)}  /> */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageError && <span className="text-sm text-red-500 ">Image is required</span> }
      </div>
      <div className=" w-full text-wrap ">
      {/* <ReactQuill placeholder="Tell your story" theme="snow" value={value} onChange={setValue} /> */}
      {selectImage ? (
            <Image src={URL.createObjectURL(selectImage)} alt="img" height={50} width={50} className=" object-fill lg:w-44 w-full h-auto " />
          ) : (
            <p className=" text-left ">
              Image upload preview will appear here!
            </p>
          )}
      </div>

    </div>
  );
};

export default Write;
