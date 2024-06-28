// Imports.
import { throttle } from 'https://crossroads-lab.github.io/Utils/src/index.mjs';

// Helper function to detect scroll on an element.
const cb = throttle(event => (
  event.target.dataset.scrolling = event.target.scrollTop > 0 || event.target.scrollLeft > 0
));

export const detectScroll = (elmt = document.body, options = { passive: true }) => {
  elmt && (
    elmt.removeEventListener('scroll', cb, options),
    elmt.addEventListener('scroll', cb, options)
  )
}

// Default export.
export default detectScroll;