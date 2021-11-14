import React, { useState, useEffect } from 'react';
import { useDebouncedValue } from '@mantine/hooks';

import { useFetchNews } from '../../hooks/useFetchNews';

import { NewsCard } from '../../components/NewsCard';
import imageDefault from '../../assets/ArticleDefault.jpg';
import { image_url } from '../../constants';

import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from '@mantine/core';
import { useQueryClient } from 'react-query';

import SkeletonList from '../../components/SkeletonList';

import { useStore } from '../../store';

export default function Home() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 300);
  const { data, fetchNextPage, hasNextPage, refetch, isLoading } = useFetchNews({
    q: debounced || 'react',
  });

  let queryClient = useQueryClient();
  useEffect(() => {
    queryClient.removeQueries('news');
    refetch({ refetchPage: (page, index) => index === 0 });
  }, [debounced]);
  const setArticles = useStore((state) => state.setArticles);
  useEffect(() => {
    if (data?.pages?.length === 1) {
      setArticles(data?.pages[0]?.docs);
    } else {
      setArticles(data?.pages?.reduce((acc, page) => [...acc, ...page.docs], []));
    }
  }, [data?.pages?.length]);
  return (
    <div className=' flex flex-col justify-center items-center mx-3 md:mx-0'>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        className='w-full md:w-1/3 p-2 text-sm my-4 pl-5 border border-blue-400 rounded-[25px]  focus:outline-none'
        placeholder='Search for news'
      />

      <div id='scrollableDiv' className='w-full'>
        {isLoading ? (
          <SkeletonList />
        ) : (
          <InfiniteScroll
            dataLength={data?.pages?.length}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<Loader variant='dots' className='my-5 mx-auto' />}
          >
            {data.pages.map((page) => {
              return page.docs.map((item) => {
                let image =
                  item.multimedia.length > 0 ? image_url + item.multimedia[0].url : imageDefault;
                return (
                  <NewsCard
                    key={item._id}
                    id={item._id}
                    title={item.headline.main}
                    summary={item.abstract}
                    image={image}
                  />
                );
              });
            })}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}
