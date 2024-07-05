// Imports.
import head from './head.mjs';
import addElement from './addElement.mjs';

// Helper function to add a meta tags in the document head.
export const addStructuredData = props => {
  let {tag, tagName, parent, parentNode, type, data, comment, ...other} = props || {};
  return (data || (data = other)) && addElement({
    tag: 'script',
    parent: head,
    type: 'application/ld+json',
    comment,
    innerHTML: JSON.stringify(data),
  }) || null;
}

// Default export.
export default addStructuredData;