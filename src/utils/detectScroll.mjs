// Imports.
import { throttle } from 'https://crossroads-lab.github.io/Utils/src/index.mjs';

// Helper function to detect scroll on an.
export const detectScroll = (elmt = document.body) => {
  elmt && elmt.addEventListener('scroll', throttle(() => {
    elmt && (elmt.dataset.scrolling = elmt.scrollTop > 0 || elmt.scrollLeft > 0);
  }), { passive: true });
}

// Default export.
export default detectScroll;