// Helper function to get a script node.
export const getScriptNode = src => {
  if (!src) {
    try {
      src = import.meta.url;
      console.log('src:', src);
    } catch {
      console.log('document.currentScript:', document.currentScript);
      return document.currentScript;
    }
  }

  const scripts = document.getElementsByTagName('script');
  for (let i = 0, l = scripts.length, s; i !== l; ++i) {
    if (src === (s = scripts[i]).src || s.getAttribute('src')) return s;
  }

  return null;
}

// Default export.
export default getScriptNode;