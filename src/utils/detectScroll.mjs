// Imports.
import { throttle } from 'https://crossroads-lab.github.io/Utils/src/index.js';

// Helper function to detect scroll on an element.
const cb = throttle(event => (
  (event.target === window && document.body || event.target).dataset.scrolling = event.target.scrollTop > 0 || event.target.scrollLeft > 0
));

export const detectScroll = (elmt = document.body, handler = cb, options = { passive: true }) => {
  elmt && (
    elmt.removeEventListener('scroll', handler, options),
    elmt.addEventListener('scroll', handler, options)
  )
}

// Default export.
export default detectScroll;