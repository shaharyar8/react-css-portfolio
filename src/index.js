import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PageTitleProvider } from './context/PageTitleContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageTitleProvider>
      <App />
    </PageTitleProvider>
  </React.StrictMode>
);
reportWebVitals();