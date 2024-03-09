import Image from "next/image";
import React from "react";

const Editors = () => {
    const Editors = [
        {name:"Jhon De",title:"Calture"},
        {name:"Jhon De",title:"Travel"},
        {name:"Jhon De",title:"Fashion"},
        {name:"Jhon De",title:"Coding"},
     
    ]
  return (
    <div className="mt-6">
      <h3>Chosen by the editor</h3>
      <h1 className="lg:text-4xl text-2xl font-bold mb-5">Editors Pick</h1>
      {
        Editors.map((item,index)=>(
            <div key={index} className=" h-[100px] flex items-center ">
       
          <div className="rounded-full h-[50px] w-[50px] absolute">
            <Image
              src="https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image"
              width={50}
              height={50}
              className="object-cover h-[50px] w-[50px] rounded-full"
            />
          </div>
          <div className=" ml-16 ">
            <h3 className="px-2 py-1 text-sm bg-blue-400 rounded-full inline-block">{item.title}</h3>
            <p className=" text-[14px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className=" text-[14px] "><span className=" font-semibold ">Jhon De - </span> 01.09.2023</p>
          </div>
      
      </div>
        ))
      }
      
    </div>
  );
};

export default Editors;
