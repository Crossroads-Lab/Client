// Import.
import getScriptNode from './getScriptNode.mjs';

// Helper fcuntion to remove script node.
export const removeScriptNode = src => (
  (src = getScriptNode(src)) && (
    src.remove(),
    src
  )
);

// Default export.
export default removeScriptNode;