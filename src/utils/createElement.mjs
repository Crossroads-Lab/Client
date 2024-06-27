// Helper function to add a meta tags in the document head.
export const createElement = (tag, attributes, node) => {
  // Normalize input.
  typeof tag === 'object' && (
    attributes = tag,
    tag = tag.tag || tag.tagName,
    delete attributes.tag,
    delete attributes.tagName
  );
  attributes || (attributes = {});
  node || (attributes instanceof Element && (node = attributes))
  || ((node = attributes.node || attributes.childNode) && (
    delete attributes.node,
    delete attributes.childNode
  ));

  // Create element.
  node instanceof Element || (tag && (node = document.createElement(`${tag}`)));

  if (!(node instanceof Element)) return null;

  // Set attributes.
  for (const k in attributes) {
    node.setAttribute(k, attributes[k]);
  }

  return node;
}

// Default export.
export default createElement;