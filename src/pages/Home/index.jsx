import React, { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';

import { useFetchNews } from '../../hooks/useFetchNews';

import { NewsCard } from '../../components/NewsCard';
import imageDefault from '../../assets/ArticleDefault.jpg';
import { image_url } from '../../constants';

import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from '@mantine/core';

export default function Home() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 300);
  const { data, fetchNextPage, hasNextPage } = useFetchNews({ q: 'react' });
  console.log('data', data);
  return (
    <div className=' flex flex-col justify-center items-center mx-3 md:mx-0'>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        className='w-full md:w-1/3 p-3 border border-blue-300 rounded mt-3 '
      />
      <div id='scrollableDiv' className='md:w-1/2'>
        {data && (
          <InfiniteScroll
            dataLength={data.pages.length}
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
