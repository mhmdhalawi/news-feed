import React from 'react';

export const NewsCard = ({ title, summary, image }) => {
  return (
    <div className='my-3 py-2 md:py-3 px-0 md:px-4 shadow-md rounded flex flex-col md:flex-row justify-center md:justify-start md:items-center  w-full  '>
      <img className='md:w-24 w-full ' src={image} />

      <div className='ml-0 md:ml-5 p-4 md:p-0 '>
        <h1 className='font-bold my-3 md:my-0'>{title}</h1>
        <p>{summary}</p>
      </div>
    </div>
  );
};
