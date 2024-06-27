// Imports.
import head from './head.mjs';
import addElement from './addElement.mjs';

// Helper function to add a meta tags in the document head.
export const addTitle= props => {
  const {tag, tagName, parent, parentNode, ...other} = props || {};
  return addElement({ tag: 'title', parent: head, ...other});
}

// Default export.
export default addTitle;