import React from 'react';
import Select from '../Select/Select';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

function Slider() {
  return (
    <div className='w-full h-auto flex-wrap flex items-center justify-center gap-x-2 md:gap-x-6 my-4 overflow-x-auto'>
      <Select name={<MdKeyboardDoubleArrowLeft />} padding={true} />
      <Select name={<IoIosArrowBack />} padding={true} />
      <Select name="1" />
      <Select name="2" />
      <Select name="3" />
      <Select name="4" />
      <Select name={<IoIosArrowForward />} padding={true} />
      <Select name={<MdKeyboardDoubleArrowRight />} padding={true} />
    </div>
  );
}

export default Slider;
