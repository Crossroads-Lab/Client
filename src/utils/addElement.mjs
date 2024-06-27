// Imports.
import addComment from './addComment.mjs';
import createElement from './createElement.mjs';

// Helper function to add a meta tags in the document head.
export const addElement = props => {
  // Normalize input.
  let {
    comment,
    parentNode,
    parent = parentNode,
    ...other
  } = props || {};

  let output, node;
  parent instanceof Node && (
    // Add comment.
    output = addComment(comment, parent),
    // Add element.
    (node = createElement(other)) && (output = parent.appendChild(node))
  );

  return output || null;
}

// Default export.
export default addElement;