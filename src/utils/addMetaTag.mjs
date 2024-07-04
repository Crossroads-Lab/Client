// Imports.
import head from './head.mjs';
import addElement from './addElement.mjs';

// Helper function to add a <meta> tag in the document head.
export const addMetaTag = props => {
  const {tag, tagName, parent, parentNode, ...other} = props || {};
  return addElement({ tag: 'meta', parent: head, ...other});
}

// Default export.
export default addMetaTag;