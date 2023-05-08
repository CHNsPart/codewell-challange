import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="mx-5 md:mx-20">
      {children}
    </div>
  );
}

export const ContainerInner = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start gap-5 md:gap-10 lg:gap-20 py-10 md:py-20 px-5 md:px-20">
      {children}
    </div>
  );
}

export const ContainerFooter = ({ children }) => {
  return (
    <div className="flex flex-row justify-between items-center gap-5 w-full md:gap-10 lg:gap-20 py-5 md:py-10 px-5 md:px-20">
      {children}
    </div>
  );
}

export const ContainerHeader = ({ title, paragraph }) => {
  return (
    <div className='flex flex-col w-full pt-10'>
      <div className='flex flex-col justify-start items-start max-w-md gap-2 h-fit'>
        <h1 className="text-4xl flex-grow font-bold">{title}</h1>
        <p className='text-white/60 max-w-[32rem] text-sm'>{paragraph}</p>
      </div>
    </div>
  );
}

