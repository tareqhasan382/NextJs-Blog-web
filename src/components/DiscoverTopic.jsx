import React from 'react';
import { getCategories } from './Categorie';
import Link from 'next/link';
const DiscoverTopic =async () => {
const lists= await getCategories();
const colors=["#573ac5","#c035ca","#9b6dff","#f39e0c","#b597f1","#222bdd"]
    const list =[
        {id:1,title:"Stype"},
        {id:2,title:"Fashion"},
        {id:3,title:"Food"},
        {id:4,title:"Travel"},
        {id:5,title:"Culture"},
        {id:6,title:"Coding"},
]

  return (
    <div className=' mt-6 '>
      <h3>Discover by topic</h3>
      <h1 className=' lg:text-4xl text-2xl font-bold '>Categories</h1>
      <div className=' flex flex-wrap gap-4 mt-6'>
       {lists?.data?.map((item,index)=>(
        <Link href={`/blog?cat=${item?.name}`} key={item._id}   >
         <h1 className=' text-white cursor-pointer flex w-20 h-10 duration-300 text-center items-center justify-center rounded-md '
        style={{backgroundColor:colors[index%colors.length]}}
         >{item?.name}</h1>
         </Link>
       ))}
      </div>
    </div>
  );
}

export default DiscoverTopic;
