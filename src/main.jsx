import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { QueryClientProvider } from './React-Query';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
