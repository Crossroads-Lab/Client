// Helper function to get a script node.
export const getScriptNode = src => {
  if (!src) {
    return document.currentScript;
  }

  const scripts = document.getElementsByTagName('script');
  for (let i = 0, l = scripts.length, s, h; i !== l; ++i) {
    h = (s = scripts[i]).getAttribute('src') || s.src;
    console.log(h, src, s);
    if (src === h) return s;
  }

  return null;
}

// Default export.
export default getScriptNode;