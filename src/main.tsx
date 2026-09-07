import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Register Service Worker for PWA compliance
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        console.log('Vaishali Pharmaceutical PWA ServiceWorker registered with scope: ', reg.scope);
      })
      .catch((err) => {
        console.warn('PWA ServiceWorker registration notice: ', err);
      });
  });
} else if ('serviceWorker' in navigator) {
  // In development / preview, also register safely
  navigator.serviceWorker
    .register('/sw.js')
    .then((reg) => {
      console.log('Vaishali Pharmaceutical PWA ServiceWorker active (Dev/Preview): ', reg.scope);
    })
    .catch((err) => {
      console.warn('PWA ServiceWorker registration dev notice: ', err);
    });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
