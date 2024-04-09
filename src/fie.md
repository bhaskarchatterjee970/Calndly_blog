import './App.css'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Container from './Container/Container'
import Content from './Content/Content'
import Slider from './Slider/Slider'
import Footer from './Footer/Footer'
import About from './About/About'

function App() {

  return (
    <>
      <div className='w-full h-screen'>
        <Navbar/>
        <Header/>
        <Container/>
        <Content/> 
        <Slider/>
        <Footer/>
        <About/>
      </div>    
    
    </>
  )
}

export default App



NAVBAR
import React from 'react'
import Tag from '../Tags/Tag'


function Navbar() {
  return (
    <div className='w-full h-20 flex items-center justify-evenly'>
        <div className='flex w-1/6 h-full p-2'>
            <img className='w-10 h-10 m-3' src="https://theme.zdassets.com/theme_assets/1024340/78b0cd1ea78d2763fb98cb466ef065903b5efc0b.png"/>
            <h2 className='text-blue-500 text-4xl m-2'>Calnedly</h2>
        </div>

        <div className='flex w-1/2 h-full items-center gap-x-12 p-4'>
           <Tag name="Individuals"/>
           <Tag name="Teams"/>
           <Tag name="Enterprise"/>
           <Tag name="Products"/>
           <Tag name="Pricing"/>     
           <Tag name="Resources"/>     
        </div>

        <div className='flex w-1/6 h-full items-center  justify-evenly'>
            <button className='p-2 font-bold '>Login</button>
            <button className='px-6 py-3 rounded-3xl bg-blue-600 text-white
            font-semibold'>Sign up free</button>
        </div>
    </div>
  )
}

export default Navbar



HEADER
import React from 'react'
import Tag from '../Tags/Tag'

function Header() {
  return (
    <div className='w-full h-32 mt-12 mb-4 flex-col'>
        <h1 className='text-center text-[45px] font-extrabold '>The Calendly Blog</h1>
        <div className='flex items-center justify-center gap-x-16 mt-8'>
            <Tag name="ALL" light={true} color={true}/>
            <Tag name="WHAT'S NEW" light={true}/>
            <Tag name="SALES"light={true}/>
            <Tag name="RECRUTING" light={true}/>
            <Tag name="PRODUCTIVITY" light={true}/>
            <Tag name="CREATING CALENDLY" light={true}/>


        </div>
    </div>
  )
}

export default Header


CONTAINER
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Container() {
  return (
    <div className='w-full h-[600px]  my-2 flex items-center'>
        <div className='left w-1/2 h-full p-2 mt-4 flex flex-col gap-y-6 items-center justify-center'>
            <img className='w-11/12 h-4/5 rounded-lg' src="https://images.unsplash.com/photo-1594842084112-fe6d71906449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <div className='right w-1/2 h-full pr-3 flex flex-col'>
           <div className='w-full h-2/3 p-4 gap-y-5 left-0 flex-col mt-2 flex items-left justify-center'>
            <p className='text-gray-500'>WHAT'S NEW</p>
            <h1 className='font-extrabold text-[44px] pb-2'>Welcome to the Time Economy</h1>
            <p className='text-black text-xl '>Lorem Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit.</p>
           </div>
           <div className='flex  items-center gap-x-3 px-4'>
                <p className='text-black text-xl font-bold'>Read the article</p>
                <FaArrowRight className="bg-black cursor-pointer w-9 h-9 p-3 text-white  rounded-full"/>
            </div>
        </div>
    </div>    
)
}

export default Container



CONTENT
import React from 'react'
import Card from '../Card/Card'

function Content() {
  return (
    <div className='w-full'>
        <p className='px-14 text-black text-xl font-semibold'>Most popular</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1
        w-full pl-10'>
            <Card violet={true} text="WHAT'S NEW" font={true} clickOnRead={true}/>
            <Card sky={true} text="PRODUCTIVITY" font={true} clickOnRead={true}/>
            <Card blue={true} text="WHAT'S NEW" font={true} clickOnRead={true}/>
            <Card white={true} text="WHAT'S NEW"/>
            <Card white={true} text="WHAT'S NEW"/>
            <Card white={true} text="WHAT'S NEW"/>
            <Card white={true} text="PRODUCTIVITY"/>
            <Card white={true} text="PRODUCTIVITY"/>
            <Card white={true} text="WHAT'S NEW"/>
            <Card white={true} text="PRODUCTIVITY"/>
            <Card white={true} text="PRODUCTIVITY"/>
            <Card white={true} text="WHAT'S NEW"/>
            <Card white={true} text="SALES"/>
            <Card white={true} text="PRODUCTIVITY"/>
            <Card white={true} text="WHAT'S NEW"/>
            <Card white={true} text="PRODUCTIVITY"/>
            <Card white={true} text="PRODUCTIVITY"/>
            <Card white={true} text="WHAT'S NEW"/>
        </div>
    </div>
  )
}

export default Content



SLIDER
import React from 'react'
import Select from '../Select/Select'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

function Slider() {
  return (
    <div className='w-full flex items-center justify-center gap-x-2 my-4'>      
       <Select name={<MdKeyboardDoubleArrowLeft/>} padding={true}/>
       <Select name={<IoIosArrowBack/>} padding={true}/>
       <Select name="1"/>
       <Select name="2"/>
       <Select name="3"/>
       <Select name="4"/>
       <Select name={<IoIosArrowForward/>} padding={true}/>
       <Select name={<MdKeyboardDoubleArrowRight/>} padding={true}/>
    </div>
  )
}

export default Slider

FOOTER
import React from 'react'

function Footer() {
  return (
    <div className='w-full h-3/4 bg-gradient-to-r from-violet-800 via-violet-800 to-blue-600 my-4 flex items-center gap-x-1 text-white'>
        <div className='w-1/2 h-3/4 mx-4 p-4 flex  items-left my-4 flex-col space-y-6'>
            <h3 className='text-slate-200 text-xl'>STAY UPDATED</h3>
            <h1 className='text-6xl font-semibold'>Subscribe to the newsletter</h1>
            <p className='text-2xl'>Lorem ipsum dolor Lorem ipsum dolor sit amet. sit  consectetur adipisicing elit. Quis, temporibus.</p>
        </div>
        <div className='w-2/5 h-4/5 bg-slate-200 rounded-md m-3'>
            <form className='text-black mx-3 my-6'
            onSubmit={(e)=>{e.preventDefault()}}>
                <div className="flex items-center justify-evenly">
                    <div className='mb-4 m-2 w-2/5'>
                        <label for="first_name" className="block text-normal font-bold text-gray-700">First Name</label>
                        <input type="text" placeholder='First Name' name="first_name" className="mt-1 h-16 p-2 border border-gray-300 rounded-md w-full"/>
                    </div>
                    <div class="mb-4 m-2 w-2/5">
                        <label for="last_name" class="block text-normal font-bold text-gray-700">Last Name</label>
                        <input type="text" placeholder='Last Name' name="last_name" className="mt-1 p-2 h-16 border border-gray-300 rounded-md w-full"/>
                    </div>
                </div>
                <div className="mb-4 px-3 ml-5 w-full">
                    <label for="email" className="block text-normal font-bold text-gray-700">Email Address</label>
                    <input type="email" placeholder='Enter Your Email Address' name="email" className="mt-1 p-2 h-16 border border-gray-300 rounded-md w-11/12"/>
                </div>
                <div className='flex items-center justify-center'>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white m-2 w-4/5 font-bold py-4 px-4 rounded-3xl">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Footer


ABOUT
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

function About() {
  return (
    <div className='w-full h-4/5 flex bg-slate-100'>
        <div className='w-2/5 h-full flex-col items-center py-4'>
            <div className=' m-10 px-11 flex-col justify-center flex space-y-4'>
                <h1 className='text-5xl text-black font-bold'>Easy</h1>
                <h1 className='text-5xl text-blue-600 font-bold'>ahead</h1>
                <p className='text-lg text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam.</p>
            </div>
            <div className=' w-full flex items-center justify-center'>
                <button className='bg-black text-white w-48 h-16  border-2 rounded-xl flex items-center justify-evenly'>
                    <img className='w-1/3  h-full rounded-2xl '
                     src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg"/>
                    <div className='w-1/2 h-full flex flex-col items-center justify-center'>
                        <h3 className='text-xs '>Download on the</h3>
                        <h1 className='text-md font-semibold'>App Store</h1>
                    </div>
                </button>
                <button className='bg-black text-white w-48 h-16  border-2 rounded-xl flex items-center justify-evenly'>
                    <img className='w-1/3 h-full rounded-2xl '
                     src="https://i.pinimg.com/564x/df/f6/8e/dff68e89139c17011ed995cf857dff75.jpg"/>
                    <div className='w-1/2 h-full flex flex-col items-center justify-center'>
                        <h3 className='text-xs '>Download on the</h3>
                        <h1 className='text-md font-semibold'>Play Store</h1>
                    </div>
                </button>
            </div>
            <div className='w-full mt-10 flex items-center justify-center gap-x-4'>
                <a><FaTwitter className='text-2xl'/></a>
                <a><FaFacebookF className='text-2xl'/></a>
                <a><FaInstagram className='text-2xl'/></a>
                <a> <FaLinkedinIn className='text-2xl'/></a>
                <a><FiYoutube className='text-2xl'/></a>
            </div>
        </div>

        <div className='w-3/5 h-full  flex items-center gap-x-2'>
            <div className='h-full w-11/12  flex items-center justify-center space-y-6 flex-col'>
                <a className='text-xl font-extrabold'>About</a>
                <a className="cursor-pointer">About Calendly</a>
                <a className="cursor-pointer">Contact Sales</a>
                <a className="cursor-pointer">Newsroom</a>
                <a className="cursor-pointer">Carrers</a>
                <a className="cursor-pointer">Security</a>
                <a className='text-xl font-extrabold'>Support</a>
                <a className='cursor-pointer'>Help Centers</a>
                <a className="cursor-pointer">Video Tutorials</a>
            </div>
            <div className='h-full w-11/12  flex items-center justify-center space-y-6 flex-col'>
                <a className='text-xl font-extrabold'>Solutions</a>
                <a className="cursor-pointer">Customer Success</a>
                <a className="cursor-pointer">Sales</a>
                <a className="cursor-pointer">Recruting</a>
                <a className="cursor-pointer">Information Technology</a>
                <a className="cursor-pointer">marketing</a>
                <a className='text-xl font-extrabold'>Add-Ons</a>
                <a className="cursor-pointer">Download for Chrome</a>
                <a className="cursor-pointer">Download for Firefox</a>
            </div>
            <div className='h-full w-11/12  flex items-center justify-center space-y-6 flex-col'>
                <a className='text-xl font-extrabold'>Popular Features</a>
                <a className='cursor-pointer'>Embed Calendly</a>
                <a className='cursor-pointer'>Availability</a>
                <a className='cursor-pointer'>Sending Notifications</a>
                <a className='cursor-pointer'>Using Caledly Mobile</a>
                <a className='cursor-pointer'>Security</a>
                <a className='text-xl font-extrabold'>Developers</a>
                <a className='cursor-pointer'>Developer Tools</a>
                <a className='cursor-pointer'>Developer Tools</a>

            </div>
        </div>
    </div>
  )
}

export default About


TAG
import React from 'react'

function Tag({name,light,color}) {
  return (
    <a className={`cursor-pointer  m-1 text-base font-bold ${light ? 'font-normal' : ''}
    ${color ? "bg-blue-500 py-2 px-8 text-white  rounded-3xl" : ""}`}>
        {name}
    </a>
  )
}

export default Tag



SELECT
import React from 'react'

function Select({name,padding}) {
  return (
   <button className={`rounded-3xl ${padding ? "py-4 px-4":"py-3 px-5"} bg-white hover:bg-blue-600 
   hover:text-white border-2`}>{name}</button>
  )
}

export default Select



CARD
import React from 'react'
import Button from '../Button/Button'
import { FaArrowRight } from "react-icons/fa";


function Card({violet,sky,blue,font,clickOnRead,...text}) {
  return (
    <div className={`w-[420px] h-[500px] border-2 border-slate-100 rounded-xl m-4
    ${violet ? "bg-violet-500" : ""} ${sky ? "bg-blue-600" : ""} ${blue ? "bg-blue-800" : ""}
    ${font ? "text-white font-semibold" :""}`}>

       <Button {...text}/> 
       <h1 className='text-2xl m-4 px-3 font-bold'>Lorem ipsum dolor sit amet: consectetur adipisicing elit. Quaeedhy modi vero sint?</h1>
       <h3 className='m-4 px-3 font-normal'>READ TIME 6 MUNITES</h3>
       <p className='font-normal leading-8  text-xl mx-4 my-6 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium recusandae mollitia commodi minus!</p>
       <div className='flex  items-center gap-x-3 m-4 px-4'>
          <p className='text-md font-bold'>Read the article</p>
          <FaArrowRight className={`${clickOnRead?"bg-white text-black":"bg-slate-700 text-white"} cursor-pointer  w-9 h-9 p-3 rounded-full`}/>
        </div>
    </div>
  )
}

export default Card



BUTTON
import React from 'react'

function Button({text,violet,blue,white,sky}) {
  return (
    <button className={`py-2 px-6 border-white  border-2 
     rounded-2xl m-5
     ${violet ? "bg-violet-500 font-bold" :""}
     ${sky ? "bg-blue-600 font-bold" :""}
     ${blue ? "bg-blue-800 font-bold" :""}
     ${white ? "text-blue-500 border-blue-600 font-bold":""}`}>{text}</button>
  )
}

export default Button