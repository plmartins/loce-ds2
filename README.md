# loce-ds2

Design system da suíte Loce (v2): tokens, componentes, shell unificado (PlatformRail, Sidebar, Header) e ícones.

## Consumo (via GitHub, sem npm publish)

```jsonc
// package.json do app
"dependencies": {
    "loce-ds2": "github:plmartins/loce-ds2#v0.1.0"
}
```

```css
/* CSS global do app */
@import "tailwindcss";
@import "loce-ds2/styles.css";
```

```html
<!-- o app declara a plataforma; isso define a cor de acento -->
<html data-platform="erp">
```

```tsx
import { cn } from "loce-ds2";
import { IconProducts, IconPlus } from "loce-ds2/icons";
```

Plataformas: `erp` (azul), `ecommerce` (verde), `marketing` (rosa), `talkbia` (roxo). Sem `data-platform`, o acento cai no roxo Loce de propósito, pra denunciar a ausência.

## Release

```bash
./scripts/release.sh v0.1.0
```

A `main` fica sem `dist/`. O script builda, commita o `dist/` num commit detached, tagueia e pusha só a tag. O lockfile do consumidor pina o SHA da tag, então o build (Vercel incluso) é determinístico e sem credencial.

## Dev local (link com um app)

No app, temporariamente:

```jsonc
"loce-ds2": "file:../../Labs/loce-ds2"
```

E aqui: `npm run dev` (tsup em watch). No `vite.config.ts` do app, adicionar `resolve: { dedupe: ["react", "react-dom"] }` pra evitar React duplicado via symlink. **Nunca commitar o `file:`.**

## Ícones

Phosphor (`@phosphor-icons/react`) com peso `fill` como padrão da suíte (decisão de 25/07/2026). `src/icons/map.ts` é o único arquivo que conhece a lib: trocar de família depois é reescrever só ele. Exports semânticos (`IconProducts`, `IconSales`) pra domínio e literais (`IconPlus`, `IconTrash`) pra ações. A lib é peerDependency: o app instala `@phosphor-icons/react` direto.

## Estrutura

```
src/
  styles/     tokens.css (base neutra + acento por plataforma), animations.css, base.css
  icons/      map.ts (única fronteira com a lib de ícones), create-icon.tsx
  lib/        cn()
  components/ (M2)
  shell/      (M2: AppShell, PlatformRail, Sidebar, Header, CommandPalette, PageShell)
  charts/     (P1: wrappers Recharts)
showcase/     playground Vite local
```
