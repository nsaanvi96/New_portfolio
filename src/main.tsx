import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Add this AFTER ReactDOM.createRoot(...).render(...)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing after animation runs once
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15, // trigger when 15% of element is visible
    rootMargin: '0px 0px -10% 0px', // trigger a bit earlier
  }
);

// Observe all elements with .animate-on-scroll
document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});
// src/hooks/useScrollReveal.ts
import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
