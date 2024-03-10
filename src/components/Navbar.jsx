"use client"

import { useState } from "react";
import { signOut } from 'next-auth/react';
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookSquare ,FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter,FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { useSession } from "next-auth/react";
const Navbar = () => {
  const {data:session}= useSession()
 
  const [showProfile, setShowProfile] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
 
  return (
    <div  className="px-5 max-w-[1280px] mx-auto">
    <div className="flex items-center justify-between w-full py-4 relative">
      <div className="flex items-center justify-center md:space-x-10 lg:space-x-20 ">
        <div className="font-semibold text-2xl">
          <Link href="/" className="text-2xl font-bold ">
          Blog
          </Link>
        </div>
        <nav  className="max-md:hidden flex flex-row items-center  ">
          <ul className="flex items-center space-x-3  font-semibold text-[15px]">
       
            <li>
              <Link href="/" className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}>
              Home
              </Link>
            </li>
            <li>
              <Link href="/" className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}>
              Contact
              </Link>
            </li>
            <li>
              <Link href="/" className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}>
              About
              </Link>
            </li>
            {
              session?.user ? <li onClick={()=>signOut()}>
              <Link href="/login" className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}>
              SignOut
              </Link>
            </li>:<li>
              <Link href="/login" className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}>
              Login
              </Link>
            </li>
            }
            <li>
              <Link href="/write" className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}>
              Write
              </Link>
            </li>
          </ul>
          
        </nav>
      </div>
      
      <div className="flex items-center space-x-2">
        {/* <SearchBar /> max-md:hidden */}
        <p className=" flex text-right items-end font-semibold cursor-pointer hover:text-[#5636f3] duration-300  "> <FaFacebookSquare size={20} /></p>
        <p className=" flex text-right items-end font-semibold cursor-pointer hover:text-[#5636f3] duration-300  "> <FaSquareXTwitter size={20} /></p>
        <p className=" flex text-right items-end font-semibold cursor-pointer hover:text-[#5636f3] duration-300  "> <FaSquareInstagram size={20}/></p>
        <p className=" flex text-right items-end font-semibold cursor-pointer hover:text-[#5636f3] duration-300  "><FaLinkedin size={20} /> </p>
        <div
          onClick={() => setShowProfile(!showProfile)}
          className="relative cursor-pointer"
        >   
        </div>

        {/* <Link href="/">
          <div className=" text-xl py-3 bg-[#5636f3] hover:bg-[#7559ff] text-white rounded-md">
           <button className=" px-4 ">Get</button>
           
          </div>
        </Link> */}
<ToggleTheme/>

        <span
          onClick={() => setShowNav(!showNav)}
          className="p-[9px] bg-gray-100 rounded-md md:hidden"
        >
         {
          showNav ?  <AiOutlineClose size={30}
          className="transition ease-in duration-150"
        />: <CiMenuBurger size={30}
        className="transition ease-in duration-150"
      />
         }
        </span>
      </div>
    </div>
    <div
      className={`md:hidden ${
        showNav
          ? "pb-4  rounded-lg "
          : "h-0 invisible opacity-0"
      }`}
    >
      <ul className="flex flex-col text-[15px] opacity-100 ">
      <li onClick={() => setIsHovered(!isHovered)} className=" pt-3 " >
            <Link href="/" className={`${isHovered && " text-blue-500  rounded-full"} py-2 inline-block w-full`}>
                <span className={` flex flex-row gap-1 font-semibold `}>
                Home
                   
                </span> 
            </Link>
          
           
        </li>
        <li onClick={() => setIsHovered2(!isHovered2)} className=" " >
            <Link href="/" className={`${isHovered2 && " text-blue-500  rounded-full"} py-2 inline-block w-full`}>
                <span className={` flex flex-row gap-1 font-semibold `}>
                Contact
                    
                </span> 
            </Link>
            
           
        </li>
        <li onClick={() => setIsHovered3(!isHovered3)} className=" " >
            <Link href="/" className={`${isHovered3 && " text-blue-500  rounded-full"} py-2 inline-block w-full`}>
                <span className={` flex flex-row gap-1 font-semibold `}>
                About
                 
                </span> 
            </Link>
            
           
        </li>
        <li onClick={() => setIsHovered4(!isHovered4)} className="" >
            <Link href="/write" className={`${isHovered4 && " text-blue-500  rounded-full"} py-1 inline-block w-full`}>
                <span className={` flex flex-row gap-1 font-semibold `}>Write</span> 
            </Link>
           
        </li>
        {
          session?.user ? <li onClick={()=>signOut()} >
          <Link href="/login" className="py-1 inline-block w-full">
              <span className={` flex flex-row gap-1 font-semibold `}>Sign Out</span> 
          </Link>
         
      </li>:<li  >
            <Link href="/login" className="py-1 inline-block w-full">
                <span className={` flex flex-row gap-1 font-semibold `}>Login</span> 
            </Link>
           
        </li>
        }
      </ul>
      
    </div>
  </div>
  )
}

export default Navbar