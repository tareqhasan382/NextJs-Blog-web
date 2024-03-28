import { baseURL } from '@/app/page';
import Image from 'next/image';
import React from 'react';

export const getCategories = async () => {
  try {
    const result = await fetch(`${baseURL}/api/getCategory`, {
      method: "GET",
    });
    if (!result.ok) {
      throw new Error("Failed to fetch data");
    }
    return result.json();
  } catch (error) {
    console.log(error);
  }
};
const Categorie =async () => {
  const colors=["#9be8f2","#f4b2f4","#b28fff","#f5f05b","#b597f1"]
  
  const category =await getCategories()
  return (
    <>
    { category?.data &&
      category?.data.map((item,index)=>(
        <div  key={item._id} className="cursor-pointer flex px-2 h-[50px] rounded-md items-center justify-center gap-2"
      style={{backgroundColor:colors[index%colors.length]}}
        >
            {
              item?.img ? <Image
              src={item?.image}
              alt="Image"
              width={40}
              height={40}
              className=" object-cover  lg:h-[40px] lg:w-[40px] h-[30px] w-[30px] rounded-full "
            />:<Image
            src="https://res.cloudinary.com/dsybkyula/image/upload/v1700403156/Reservation/qitr5bnrzvdhf9jy1veo.jpg"
            alt="Image"
            width={40}
            height={40}
            className=" object-cover  lg:h-[40px] lg:w-[40px] h-[30px] w-[30px] rounded-full "
          />
            }
            <h1 className=" lg:font-medium  font-light pr-2 ">{item?.name}</h1>
          </div>
      ))
    }
    </>
  );
}

export default Categorie;
