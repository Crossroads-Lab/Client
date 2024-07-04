// Imports.
import head from './head.mjs';
import addElement from './addElement.mjs';

// Helper function to add a <link> in the document head.
export const addLink = props => {
  const {tag, tagName, parent, parentNode, ...other} = props || {};
  return addElement({ tag: 'link', parent: head, ...other});
}

// Default export.
export default addLink;