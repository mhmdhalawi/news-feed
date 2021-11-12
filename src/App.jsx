import './App.css';
import { useDebouncedValue } from '@mantine/hooks';
import { useState } from 'react';
import { Loader } from '@mantine/core';

function App() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 300);
  console.log('debounced', debounced);
  return (
    <div className='App  h-screen flex flex-col justify-center items-center'>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        className='w-1/3 p-3 border border-blue-300 rounded mt-3'
      />
      <Loader className='my-3 fill-current text-pink-400' variant='dots' />
    </div>
  );
}

export default App;
