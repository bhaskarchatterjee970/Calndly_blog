import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';

function About() {
  return (
    <div className='w-full h-auto bg-slate-100 flex flex-wrap flex-col md:flex-row'>
      <div className='w-full md:w-2/5 h-auto py-4 flex flex-col items-center'>
        <div className='m-10   md:px-12 flex flex-col justify-center space-y-4'>
          <h1 className='text-2xl md:text-5xl text-black font-bold'>Easy</h1>
          <h1 className='text-2xl md:text-5xl text-blue-600 font-bold'>ahead</h1>
          <p className='text-sm font-bold md:font-normal md:text-lg text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam.</p>
        </div>
        <div className='w-full flex items-center gap-x-6 md:mr-4 justify-center'>
          <button className='bg-black text-white w-48 h-16 border-2 rounded-xl flex items-center justify-evenly'>
            <img className='w-1/3 h-full rounded-2xl' src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg" alt="App Store" />
            <div className='w-1/2 h-full flex flex-col items-center justify-center'>
              <h3 className='text-xs'>Download on the</h3>
              <h1 className='text-md font-semibold'>App Store</h1>
            </div>
          </button>
          <button className='bg-black text-white w-48 h-16 border-2 rounded-xl flex items-center justify-evenly'>
            <img className='w-1/3 h-full rounded-2xl' src="https://i.pinimg.com/564x/df/f6/8e/dff68e89139c17011ed995cf857dff75.jpg" alt="Play Store" />
            <div className='w-1/2 h-full flex flex-col items-center justify-center'>
              <h3 className='text-xs'>Download on the</h3>
              <h1 className='text-md font-semibold'>Play Store</h1>
            </div>
          </button>
        </div>
        <div className='w-full mt-10 flex items-center justify-center gap-x-4 mr-4'>
          <a className='cursor-pointer'><FaTwitter className='text-xl' /></a>
          <a className='cursor-pointer'><FaFacebookF className='text-xl' /></a>
          <a className='cursor-pointer'><FaInstagram className='text-xl' /></a>
          <a className='cursor-pointer'><FaLinkedinIn className='text-xl' /></a>
          <a className='cursor-pointer'><FiYoutube className='text-xl' /></a>
        </div>
      </div>

      <div className='w-full md:w-3/5 md:py-2 pl-3 h-auto flex items-center gap-x-2'>
        <div className='w-full flex flex-wrap flex-col space-y-6 text-sm md:text-base'>
          <a className='text-md md:text-xl font-extrabold'>About</a>
          <a className='cursor-pointer'>About Calendly</a>
          <a className='cursor-pointer'>Contact Sales</a>
          <a className='cursor-pointer'>Newsroom</a>
          <a className='cursor-pointer'>Carrers</a>
          <a className='cursor-pointer'>Security</a>
          <a className='text-md md:text-xl font-extrabold'>Support</a>
          <a className='cursor-pointer'>Help Centers</a>
          <a className='cursor-pointer'>Video Tutorials</a>
        </div>
        <div className='w-full flex flex-wrap flex-col space-y-6 text-sm md:text-base'>
          <a className='text-md md:text-xl font-extrabold'>Solutions</a>
          <a className='cursor-pointer'>Customer Success</a>
          <a className='cursor-pointer'>Sales</a>
          <a className='cursor-pointer'>Recruting</a>
          <a className='cursor-pointer'>IT</a>
          <a className='cursor-pointer'>marketing</a>
          <a className='text-md md:text-xl font-extrabold'>Add-Ons</a>
          <a className='cursor-pointer'>Download for Chrome</a>
          <a className='cursor-pointer'>Download for Firefox</a>
        </div>
        <div className='w-full flex flex-col flex-wrap space-y-6 text-sm md:text-base'>
          <a className='text-md md:text-xl font-extrabold'>Popular Features</a>
          <a className='cursor-pointer'>Embed Calendly</a>
          <a className='cursor-pointer'>Availability</a>
          <a className='cursor-pointer'>Sending Notifications</a>
          <a className='cursor-pointer'>Using Caledly Mobile</a>
          <a className='cursor-pointer'>Security</a>
          <a className='text-md md:text-xl font-extrabold'>Developers</a>
          <a className='cursor-pointer'>Developer Tools</a>
          <a className='cursor-pointer'>Developer Tools</a>
        </div>
      </div>
    </div>
  );
}

export default About;
