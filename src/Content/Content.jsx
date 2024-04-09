import React from 'react';
import Card from '../Card/Card';

function Content() {
  return (
    <div className='w-full h-auto flex-wrap'>
      <p className='px-8 md:px-12 text-black text-xl font-semibold'>Most popular</p>
        <div className=' flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pl-2 pr-2'>
          <Card violet text="WHAT'S NEW" font clickOnRead />
          <Card sky text="PRODUCTIVITY" font clickOnRead />
          <Card blue text="WHAT'S NEW" font clickOnRead />
          <Card white text="WHAT'S NEW" />
          <Card white text="WHAT'S NEW" />
          <Card white text="WHAT'S NEW" />
          <Card white text="PRODUCTIVITY" />
          <Card white text="PRODUCTIVITY" />
          <Card white text="WHAT'S NEW" />
          <Card white text="PRODUCTIVITY" />
          <Card white text="PRODUCTIVITY" />
          <Card white text="WHAT'S NEW" />
          <Card white text="SALES" />
          <Card white text="PRODUCTIVITY" />
          <Card white text="WHAT'S NEW" />
          <Card white text="PRODUCTIVITY" />
          <Card white text="PRODUCTIVITY" />
          <Card white text="WHAT'S NEW" />
        </div>
      
    </div>
  );
}

export default Content;
