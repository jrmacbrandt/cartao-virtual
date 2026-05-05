import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fix for "Cannot set property fetch of #<Window> which has only a getter"
// Some libraries/polyfills try to overwrite window.fetch in environments where it's read-only.
try {
  if (typeof window !== 'undefined' && window.fetch) {
    const originalFetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      get() { return originalFetch; },
      set() { console.warn('Attempted to overwrite protected window.fetch - ignored.'); },
      configurable: true,
    });
  }
} catch (e) {
  // If we can't define it, it's likely already protected or we can't change it.
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
