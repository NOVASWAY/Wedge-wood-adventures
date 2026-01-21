export default function imageLoader({ src, width, quality }) {
  const basePath = '/Wedge-wood-adventures';
  // If src already starts with basePath, return as is
  if (src.startsWith(basePath)) {
    return src;
  }
  // Otherwise, add basePath prefix
  return `${basePath}${src}`;
}

