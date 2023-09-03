import React from 'react'
import {createRoot} from 'react-dom/client'

import App from './b-App.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <div>
      <App />
    </div>
  );
})

