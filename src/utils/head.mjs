// Create head node if needed.
export const head = document.head || (document.appendChild(document.createElement('head')));
head.innerHTML || (head.innerHTML = '');
export default head;