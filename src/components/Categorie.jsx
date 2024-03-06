import Image from 'next/image';
import React from 'react';

const Categorie = () => {
  return (
    <div className=" flex lg:w-[190px] w-[150px] h-[70px] bg-rose-400 rounded-md items-center justify-center gap-2 ">
            <Image
              src="https://images.pexels.com/photos/20258514/pexels-photo-20258514/free-photo-of-feeding-the-serelepe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image"
              width={40}
              height={40}
              className=" object-cover  h-[40px] rounded-full "
            />
            <h1 className=" font-medium "> Fashion</h1>
          </div>
  );
}

export default Categorie;
