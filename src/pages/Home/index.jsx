import React, { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';

import { useFetchNews } from '../../hooks/useFetchNews';

export default function Home() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 300);
  const { data, loading } = useFetchNews({ q: 'react' });
  console.log('data', data);
  return (
    <div className=' flex flex-col justify-center items-center'>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        className='w-1/3 p-3 border border-blue-300 rounded mt-3'
      />
    </div>
  );
}
