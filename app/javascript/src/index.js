import React from 'react';
import ReactDOM from 'react-dom/client';
import App from"./components/App.js"
// import './index.css'
import { BrowserRouter } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  ReactDOM.createRoot(container).render (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
})
