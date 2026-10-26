import { cn } from './chunk-OLJVOECQ.js';
import { IconSun } from './chunk-OXYQLY4R.js';
import { IconMoon } from './chunk-NSN44NSO.js';
import { useState, useEffect } from 'react';
import { jsx } from 'react/jsx-runtime';

function ThemeToggle({ storageKey = "theme", className }) {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem(storageKey, dark ? "dark" : "light");
    } catch {
    }
  }, [dark, storageKey]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => setDark((prev) => !prev),
      className: cn(
        "flex size-9 cursor-pointer items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-foreground/[0.05] hover:text-foreground",
        className
      ),
      "aria-label": dark ? "Mudar para modo claro" : "Mudar para modo escuro",
      title: dark ? "Modo claro" : "Modo escuro",
      children: dark ? /* @__PURE__ */ jsx(IconMoon, { size: 18 }) : /* @__PURE__ */ jsx(IconSun, { size: 18 })
    }
  );
}

export { ThemeToggle };
//# sourceMappingURL=chunk-APO4FA54.js.map
//# sourceMappingURL=chunk-APO4FA54.js.map