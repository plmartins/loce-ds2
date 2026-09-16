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

### Filtros de listagem

`Input`, `SearchInput`, `Select`, `NativeSelect`, `ComboBox`, `DatePicker` e
`DateRangePicker` aceitam `filterActive?: boolean`. O estado aplicado muda o
próprio campo: borda uniforme, fundo suave e identificação acessível. Não cria
faixa, chips externos nem altera a altura do campo. Os tokens respeitam a marca
ativa e o modo escuro. Erros de validação têm prioridade sobre o destaque.

```tsx
import { SearchInput, Select, isFilterActive } from "loce-ds2";

<SearchInput value={draft} onChange={onDraftChange}
  filterActive={!!filters.search} showClear={!!filters.search} onClear={clearSearch} />
<Select options={statusOptions} value={filters.status} onChange={setStatus}
  filterActive={isFilterActive(filters.status)} />
```

A tela informa o estado **aplicado**, não o texto ainda não submetido. Ordenação,
paginação, escopo de acesso e valores de formulários não ativam esse estado.
`isFilterActive` considera `undefined`, `null`, `""` e `"all"` neutros; `false`
e `0` podem ser restrições válidas. Quando o domínio usa outro valor neutro,
passe a expressão correspondente (por exemplo `filterActive={overdueOnly}`).

O `Select` oferece “Limpar filtro” quando existe opção vazia/`all`. Para um valor
neutro próprio, use `onClearFilter`. No calendário, o preset `all` vira “Limpar
filtro · Todo período”. Controles usados em cadastros continuam iguais quando
`filterActive` não é informado. Adapters legados podem usar
`data-filter-active="true"` no campo real para herdar a mesma aparência.

Validação: `npm run build && node --test tests/filter-state.test.mjs`.
