
import { useEffect } from 'react';

export function useImageOptimization() {
  useEffect(() => {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          // Pre-load the image
          if (img.dataset.src) {
            const preloadImg = new Image();
            preloadImg.src = img.dataset.src;
            preloadImg.onload = () => {
              img.src = img.dataset.src!;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
            };
          }
          imgObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imgObserver.observe(img));

    return () => {
      images.forEach(img => imgObserver.unobserve(img));
    };
  }, []);
}

export default useImageOptimization;
