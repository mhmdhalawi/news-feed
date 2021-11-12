import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { QueryClientProvide } from './React-Query';


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvide>
      <MantineProvider>
        <App />
      </MantineProvider>
    </QueryClientProvide>
  </React.StrictMode>,
  document.getElementById('root')
);
