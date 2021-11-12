import React, { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';

import { useFetchNews } from '../../hooks/useFetchNews';

import { NewsCard } from '../../components/NewsCard';
import imageDefault from '../../assets/ArticleDefault.jpg';
import { image_url } from '../../constants';

export default function Home() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 300);
  const { data, loading } = useFetchNews({ q: 'react' });
  console.log('data', data);
  return (
    <div className=' flex flex-col justify-center items-center mx-3 md:mx-0'>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        className='w-full md:w-1/3 p-3 border border-blue-300 rounded mt-3 '
      />
      {data &&
        data.pages[0].docs.map((item) => {
          let image =
            item.multimedia.length > 0 ? image_url + item.multimedia[0].url : imageDefault;
          return (
            <NewsCard
              key={item._id}
              title={item.headline.main}
              summary={item.snippet}
              image={image}
            />
          );
        })}
    </div>
  );
}
