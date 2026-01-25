import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: uncomment to animate only once
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,           // trigger when ~15% visible
        rootMargin: '0px 0px -10% 0px' // start a bit earlier
      }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}