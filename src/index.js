// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line
import './index.css';
// eslint-disable-next-line
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line
import App from './App';
// eslint-disable-next-line
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <App />
   </BrowserRouter>

  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
