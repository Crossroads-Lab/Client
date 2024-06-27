// Imports.
import head from './head.mjs';

// Helper function to add a meta tags in the document head.
export const addComment = (comment, node = head) => (
  comment && node instanceof Node && node.appendChild(document.createComment(`${comment}`)) || null
)

// Default export.
export default addComment;