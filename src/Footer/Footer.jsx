import React from 'react';

function Footer() {
  return (
    <div className='w-full h-auto p-4 flex-wrap flex-col md:flex md:flex-row justify-evenly bg-purple-900'>
      <div className='w-full md:w-2/5 h-full flex flex-wrap m-6 md:mt-14 '>
        <div className='w-full h-auto flex flex-col items-start justify-center space-y-8'>
          <p className='text-slate-200 font-bold text-xl'>STAY UPDATED</p>
          <p className='text-white font-extrabold text-[63px] leading-none'>Subsribe to the newsletter</p>
          <p className='text-xl font-bold text-slate-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cum reiciendis, repellendus debitis possimus quasi.</p>
        </div>
      </div>
      <div className='w-full md:w-2/5 h-full p-4 md:p-1 flex-wrap md:mt-4 bg-white rounded-xl'>
        <form className='text-black mx-3 my-6'
              onSubmit={(e)=>{e.preventDefault()}}>
          <div className="flex flex-col md:flex-row md:items-center justify-evenly">
            <div className='mb-4 md:m-2 w-full md:w-2/5'>
              <label htmlFor="first_name" className="block text-normal font-bold text-gray-700">First Name</label>
              <input type="text" placeholder='First Name' name="first_name" className="mt-1 h-16 p-2 border border-gray-300 rounded-md w-full"/>
            </div>
            <div className="mb-4 md:m-2 w-full md:w-2/5">
              <label htmlFor="last_name" className="block text-normal font-bold text-gray-700">Last Name</label>
              <input type="text" placeholder='Last Name' name="last_name" className="mt-1 p-2 h-16 border border-gray-300 rounded-md w-full"/>
            </div>
          </div>
          <div className=" flex-wrap mb-4 md:px-3 md:ml-5 w-full">
            <label htmlFor="email" className="block text-normal font-bold text-gray-700">Email Address</label>
            <input type="email" placeholder='Enter Your Email Address' name="email" className="mt-1 p-2 h-16 border border-gray-300 rounded-md w-full md:w-11/12 flex items-center justify-center"/>
          </div>
          <div className='flex items-center justify-center'>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white m-2 w-4/5 md:w-11/12 font-bold py-4 px-4  rounded-3xl">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;
