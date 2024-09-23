import React from 'react';
import CategoryCharts from './category-chart';
import SelledCharts from './selled-chart';

export default function SecondLine() {
  return (
    <div className='grid gap-4 mt-[16px] lg:mt-[24px] lg:grid-cols-[30%_70%]'>
      {/* CategoryCharts: Chiếm 30% chiều rộng */}
      <div className='w-full h-[300px] lg:h-[400px]'>
        <CategoryCharts />
      </div>

      {/* SelledCharts: Chiếm 70% chiều rộng */}
      <div className='w-full h-[300px] lg:h-[400px]'>
        <SelledCharts />
      </div>
    </div>
  );
}
