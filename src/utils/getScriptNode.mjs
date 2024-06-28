// Helper function to get a script node.
export const getScriptNode = src => {
  if (!src) {
    return document.currentScript;
  }

  if (src instanceof HTMLScriptElement) return src;
  if (typeof src !== 'string') return null;

  const scripts = document.getElementsByTagName('script');
  for (let i = 0, l = scripts.length, s, h; i !== l; ++i) {
    h = (s = scripts[i]).getAttribute('src') || s.src;
    if (h.includes(src) || src.includes(h)) return s;
  }

  return null;
}

// Default export.
export default getScriptNode;