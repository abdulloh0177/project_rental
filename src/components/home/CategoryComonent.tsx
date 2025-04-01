import React from 'react'
import CategoryCarusel from '../ui/CategoryCarusel';

const CategoryComonent = ({title,description}:{title:string,description:string}) => {
  return (
    <div className="mt-[96px] mb-[96px]">
      <div data-aos="zoom-in-up">
        <h2 className="text-[#0D263B] font-[600] text-center text-[28px]">
          {title}
        </h2>
        <p className="text-[#696969] max-sm:mx-[20px] mt-2 text-center text-sm">
          {description}
        </p>
      </div>
      <div className="mt-[32px]">
        <CategoryCarusel />
      </div>
    </div>
  );
}

export default CategoryComonent