import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';
function Navbar() {

const [menu, setMenu] = useState(false)
const toggleMenu = ()=>{
   setMenu(!menu)
 }

  return (
   <div className='w-full h-auto mb-20 flex flex-wrap items-center justify-evenly lg:gap-x-2'>
      <div className='flex flex-wrap items-center justify-center'>
        <img className='w-20 h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Ia8GtCrs4fA6IUpWxSjp_b_3HHRP8LzI3W5Ca_C7Jg&s"/>
        <p className='text-3xl font-semibold text-blue-500 md:text-4xl'>Calendly</p>
      </div>
      <div className='flex flex-wrap'>
        <ul className={` ${menu ? "block absolute lg:static " : "hidden"} bg-slate-600 lg:bg-white text-white lg:text-black
        font-normal lg:font-bold space-y-4 lg:space-y-0 rounded-xl  shadow-lg md:shadow-none p-4  md:hidden lg:flex md:gap-x-2 flex-wrap items-center lg:gap-x-10 justify-center
        text-xl ml-[110px] lg:ml-0 top-[70px] lg:top-0 `}>
          <li className='cursor-pointer'><a>Individuals</a></li>
          <li className='cursor-pointer'><a>Teams</a></li>
          <li className='cursor-pointer'><a>Enterprise</a></li>
          <li className='cursor-pointer'><a>Products</a></li>
          <li className='cursor-pointer'><a>Pricing</a></li>
          <li className='cursor-pointer'><a>Resources</a></li>
        </ul>
      </div>
      <div className='flex flex-wrap items-center  gap-x-4 md:gap-x-2 pl-2'>
        <button className='font-bold px-2 py-1'>Login</button>
        <button className='px-4 py-3 bg-blue-500 text-white rounded-3xl
        font-bold cursor-pointer'>Sign up free</button>
      </div>
      <div onClick={toggleMenu} className='lg:hidden ml-2 cursor-pointer'>
          <TiThMenu />
      </div>
   </div>
  )
}

export default Navbar