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

  // Set inner html.
  attributes.innerHTML && (
    node.innerHTML = attributes.innerHTML,
    delete attributes.innerHTML
  );

  // Set style.
  let style;
  if (style = attributes.style) {
    if (typeof style === 'string') {
      node.style.cssText = (node.style.cssText || '') + style;
    } else if (typeof style === 'object') {
      for (const k in style) {
        node.style[k] = style[k];
      }
    }
    delete attributes.style;
  }

  // Set other element attributes.
  for (const k in attributes) {
    const attribute = attributes[k];
    (attribute || (attribute === 0) || (attribute === '')) && node.setAttribute(k, attribute);
  }

  return node;
}

// Default export.
export default createElement;