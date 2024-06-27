// Imports.
import head from './head.mjs';
import addElement from './addElement.mjs';

// Helper function to add a meta tags in the document head.
export const addTitle = props => {
  if (typeof props === 'string') {
    return addElement({ tag: 'title', parent: head, innerHTML: props});
  }
  const {
    tag,
    tagName,
    parent,
    parentNode,
    title, value = title,
    innerHTML = value,
    ...other
  } = props || {};
  return addElement({ tag: 'title', parent: head, innerHTML, ...other});
}

// Default export.
export default addTitle;