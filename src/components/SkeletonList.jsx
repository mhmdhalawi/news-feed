import React from 'react';
import { SkeletonCard } from './SkeletonCard';

export default function SkeletonList() {
  return (
    <div className='w-full'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
