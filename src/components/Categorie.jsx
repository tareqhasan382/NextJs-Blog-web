import Image from 'next/image';
import React from 'react';

const Categorie = () => {
  const colors=["#1ecbe1","#df20df","#601fe0","#3bc485","#d3762c"]
  const category =[
    {
      _id:"1",
      image:"https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:"Fashion"
    },
    {
      _id:"2",
      image:"https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:"Food"
    },
    {
      _id:"3",
      image:"https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:"Style"
    },
    {
      _id:"4",
      image:"https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:"Education"
    },
    {
      _id:"5",
      image:"https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:"Culture"
    },
    {
      _id:"6",
      image:"https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:"Travel"
    },
  ]
  return (
    <>
    {
      category.map((item,index)=>(
        <div  key={item._id} className="cursor-pointer flex lg:w-[190px] w-[150px] h-[70px] rounded-md items-center justify-center gap-2"
      style={{backgroundColor:colors[index%colors.length]}}
        >
            <Image
              src={item?.image}
              alt="Image"
              width={40}
              height={40}
              className=" object-cover  h-[40px] rounded-full "
            />
            <h1 className=" font-medium ">{item?.name}</h1>
          </div>
      ))
    }
    </>
  );
}

export default Categorie;

/*
<div className=" cursor-pointer flex lg:w-[190px] w-[150px] h-[70px] bg-rose-400 rounded-md items-center justify-center gap-2 ">
            <Image
              src="https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image"
              width={40}
              height={40}
              className=" object-cover  h-[40px] rounded-full "
            />
            <h1 className=" font-medium "> Fashion</h1>
          </div>

*/