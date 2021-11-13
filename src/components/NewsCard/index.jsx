import React from 'react';
import { Link } from 'react-router-dom';

export const NewsCard = ({ title, summary, image, id }) => {
  let newId = id.split('/').pop();
  return (
    <Link
      to={`article/${newId}`}
      className='card flex flex-col md:flex-row justify-center md:justify-start md:items-center md:w-1/2 '
    >
      <img className='md:w-24 w-full ' src={image} />

      <div className='ml-0 md:ml-5 p-4 md:p-0 '>
        <h1 className='font-bold my-3 md:my-0'>{title}</h1>
        <p>{summary}</p>
      </div>
    </Link>
  );
};
