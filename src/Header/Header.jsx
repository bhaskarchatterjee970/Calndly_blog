import React, { useState } from 'react';


function Header() {
  return (
    <div className='w-full h-32 flex   flex-col items-center justify-center mt-16'>
      <h1 className='text-[45px] font-extrabold mb-6'>The Calendly Blog</h1>    
        <ul className='flex flex-wrap items-center text-[10px] md:text-[17px] font-extrabold  text-black md:justify-center  md:gap-x-10'>
          <li className='cursor-pointer p-2 font-bold text-slate-500'><a>ALL</a></li>
          <li className='cursor-pointer p-2 font-bold text-slate-500'><a>WHAT'S NEW</a></li>
          <li className='cursor-pointer p-2 font-bold text-slate-500'><a>SALES</a></li>
          <li className='cursor-pointer p-2 font-bold text-slate-500'><a>RECRUTING</a></li>
          <li className='cursor-pointer p-2 font-bold text-slate-500'><a>PRODUCTIVITY</a></li>
          <li className='cursor-pointer p-2 font-bold text-slate-500'><a>CREATING CALENDLY</a></li>
        </ul>
      
    </div>
  );
}

export default Header;
