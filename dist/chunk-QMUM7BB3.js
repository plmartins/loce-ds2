import { createElement } from 'react';

// src/icons/create-icon.tsx
function createIcon(Base, defaultWeight = "fill") {
  function Icon({ size = 20, weight, ref, ...rest }) {
    return createElement(Base, { size, weight: weight ?? defaultWeight, ref, ...rest });
  }
  Icon.displayName = `LoceIcon(${Base.displayName ?? Base.name ?? "Icon"})`;
  return Icon;
}

export { createIcon };
//# sourceMappingURL=chunk-QMUM7BB3.js.map
//# sourceMappingURL=chunk-QMUM7BB3.js.map