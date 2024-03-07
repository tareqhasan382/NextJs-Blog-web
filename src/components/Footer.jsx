import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
  return (
  
      <footer className="px-5 max-w-[1280px] mx-auto h-auto py-10 " >
      <div className="flex flex-col items-center">
        <p className="text-center ">© {year} Blog. All rights reserved.</p>
        <div className="flex flex-wrap space-x-4 items-center justify-center ">
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact Us
          </a>
          
        </div>
        
      </div>
    </footer>
    
  );
}

export default Footer;
