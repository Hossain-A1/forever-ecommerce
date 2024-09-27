import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-gray-500'>
        {title} <span className='text-gray-700 font-medium'>{subtitle}</span>
      </p>
      <p className='h-[1px] sm:h-0.5 w-8 sm:w-12 bg-gray-700'></p>
    </div>
  );
};

export default SectionTitle;
