import React from 'react';
import Button from '../Button/Button';
import { FaArrowRight } from 'react-icons/fa';

function Card({ violet, sky, blue, font, clickOnRead, ...text }) {
  return (
    <div className={`w-full sm:w-[420px] h-auto sm:h-[500px] border-2 border-slate-100 rounded-xl m-4
      ${violet ? 'bg-violet-500' : ''} ${sky ? 'bg-blue-600' : ''} ${blue ? 'bg-blue-800' : ''}
      ${font ? 'text-white font-semibold' : ''}`}
    >
      <Button {...text} />
      <h1 className='text-xl sm:text-2xl m-4 px-3 font-bold'>Lorem ipsum dolor sit amet: consectetur adipisicing elit. Quaeedhy modi vero sint?</h1>
      <h3 className='m-4 px-3 font-normal'>READ TIME 6 MINUTES</h3>
      <p className='font-normal leading-8 text-base sm:text-xl mx-4 my-6 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium recusandae mollitia commodi minus!</p>
      <div className='flex items-center gap-x-3 m-4 px-4'>
        <p className='text-sm sm:text-md font-bold'>Read the article</p>
        <FaArrowRight className={`${clickOnRead ? 'bg-white text-black' : 'bg-slate-700 text-white'} cursor-pointer w-9 h-9 p-3 rounded-full`} />
      </div>
    </div>
  );
}

export default Card;
