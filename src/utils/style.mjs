import head from './head.mjs';
import addComment from './addComment.mjs';

// Create head node if needed.
export const style = (head.getElementsByTagName('style') || [])[0]
  || (
    addComment('Styles'),
    head.appendChild(document.createElement('style'))
  );
style.innerHTML || (style.innerHTML = '');
export default style;