import React from 'react';

const DiscoverTopic = () => {
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
       {list?.map((item)=>(
        <div key={item.id}  >
         <h1 className=' text-white cursor-pointer flex w-20 h-10 bg-red-400 hover:bg-rose-500 duration-300 text-center items-center justify-center rounded-md '>{item?.title}</h1>
         </div>
       ))}
      </div>
    </div>
  );
}

export default DiscoverTopic;
