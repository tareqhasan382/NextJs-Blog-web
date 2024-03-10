import Write from '@/components/Write';
import React from 'react';
import PrivateRoute from '../../PrivateRoute';
//className=" px-5 max-w-[1280px] h-auto mx-auto py-10 gap-5 overflow-x-hidden "
const page = () => {
  return (
    
    <PrivateRoute>
      <Write/>
    </PrivateRoute>

  )
 
}

export default page;
