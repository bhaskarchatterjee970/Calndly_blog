import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Container() {
  return (
    <div className='w-full h-auto md:gap-x-6 flex my-8 flex-wrap justify-evenly items-center'>
        <div className='flex flex-wrap items-center justify-end'>
            <img className='pl-4 h-[470px] w-[570px]  pt-4' src='https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
        <div className='pl-4 h-full flex flex-wrap flex-col items-start justfy-end'>
            <p className='p-4 text-slate-600 font-md text-lg pt-8'>WHAT'S NEW</p>
            <p className='p-4 font-extrabold text-[40px] '>Welcome to the Time Economy</p>
            <p className='p-4 text-slate-800 text-xl'>Lorem Lorem ipsum dolor sit amet. Lorem, ipsum dolor.dolor Lorem Lorem <br/> l ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='flex flex-wrap items-start justify-center'>
              <p className='p-4 tex-black font-bold text-lg' >Read the article</p>
              <FaArrowRight className=' h-8 w-8 mt-3 p-2 cursor-pointer text-white bg-black rounded-3xl'/>
            </div>
        </div>
    </div>
  );
}

export default Container;
