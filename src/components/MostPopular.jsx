import React from 'react';

const MostPopular = ({title,bg}) => {

  return (
    <div className=" space-y-2 ">
              <button className={`${bg? bg :" bg-red-500 text-white px-3 py-1 rounded-2xl"} " text-white px-3 py-1 rounded-2xl " `}>
                {title ? title : "Travel"}
              </button>
              <h3 className=" font-medium lg:text-base text-sm ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                
              </h3>
              <p>
                <span className="  font-medium ">Josep Owen -</span>10.08.2023
              </p>
            </div>
  );
}

export default MostPopular;
