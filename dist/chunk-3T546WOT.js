import { Toaster as Toaster$1 } from 'react-hot-toast';
import { jsx } from 'react/jsx-runtime';

// src/components/Toaster.tsx
function Toaster(props) {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      position: "bottom-center",
      gutter: 8,
      toastOptions: {
        duration: 3500,
        style: {
          background: "var(--card)",
          color: "var(--foreground)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          boxShadow: "0 12px 32px -8px rgb(0 0 0 / 0.18)",
          fontSize: "13px",
          fontWeight: 600,
          padding: "10px 14px"
        },
        success: {
          iconTheme: { primary: "var(--success)", secondary: "white" }
        },
        error: {
          iconTheme: { primary: "var(--destructive)", secondary: "white" }
        }
      },
      ...props
    }
  );
}

export { Toaster };
//# sourceMappingURL=chunk-3T546WOT.js.map
//# sourceMappingURL=chunk-3T546WOT.js.map