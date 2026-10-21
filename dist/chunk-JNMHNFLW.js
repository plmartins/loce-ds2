import { useState, useRef, useEffect } from 'react';

// src/components/use-avatar-image.ts
var revealed = /* @__PURE__ */ new Set();
function useAvatarImage(src) {
  const [imgError, setImgError] = useState(false);
  const [loaded, setLoaded] = useState(() => !!src && revealed.has(src));
  const imgRef = useRef(null);
  useEffect(() => {
    setImgError(false);
    const img = imgRef.current;
    const done = !!src && revealed.has(src) || !!(img && img.complete && img.naturalWidth > 0);
    if (done && src) revealed.add(src);
    setLoaded(done);
  }, [src]);
  const onLoad = () => {
    if (src) revealed.add(src);
    setLoaded(true);
  };
  const onError = () => setImgError(true);
  return { imgRef, imgError, ready: loaded, onLoad, onError };
}

export { useAvatarImage };
//# sourceMappingURL=chunk-JNMHNFLW.js.map
//# sourceMappingURL=chunk-JNMHNFLW.js.map