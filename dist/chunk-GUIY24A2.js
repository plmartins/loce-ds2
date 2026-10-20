import { createContext, useContext } from 'react';

// src/shell/shell-context.tsx
var ShellContext = createContext({
  mobileSidebarOpen: false,
  setMobileSidebarOpen: () => {
  }
});
var useShell = () => useContext(ShellContext);

export { ShellContext, useShell };
//# sourceMappingURL=chunk-GUIY24A2.js.map
//# sourceMappingURL=chunk-GUIY24A2.js.map