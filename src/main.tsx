import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from '@/App.jsx';
import './index.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error("Element root not found!")
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
