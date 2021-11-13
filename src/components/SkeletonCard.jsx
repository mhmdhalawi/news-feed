import React from 'react';
import { Skeleton } from '@mantine/core';
export const SkeletonCard = () => {
  return (
    <div className='card flex flex-col md:flex-row justify-center md:justify-start md:items-center md:w-1/2 '>
      <Skeleton className='md:w-24 w-full h-[200px] md:h-[70px] ' />

      <div className='ml-0 md:ml-5 p-4 md:p-0 w-full '>
        <Skeleton height={9} mb={6} width='50%' radius='xl' />
        <Skeleton height={8} mb={6} radius='xl' width='90%' />
        <Skeleton height={8} mb={6} radius='xl' width='90%' />
      </div>
    </div>
  );
};
