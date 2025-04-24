
import { useEffect } from 'react';

export function useImageOptimization() {
  useEffect(() => {
    // Create intersection observer to load images as they come into view
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const dataSrc = img.getAttribute('data-src');
          
          if (dataSrc) {
            img.src = dataSrc;
            img.removeAttribute('data-src');
          }
          
          img.classList.add('loaded');
          imgObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '100px' // Start loading images when they're 100px from viewport
    });

    // Observe all images with 'data-src' attribute or that aren't loaded yet
    const images = document.querySelectorAll('img:not(.loaded)');
    images.forEach(img => imgObserver.observe(img));

    return () => {
      images.forEach(img => imgObserver.unobserve(img));
    };
  }, []);
}

export default useImageOptimization;
