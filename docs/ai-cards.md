# Cards de IA

`AICard` é uma superfície reutilizável, com Beam na borda do card inteiro.
Não contém preços, rotas ou lógica de billing. `AIIcon` é o ícone decorativo
com degradê da plataforma, disponível separadamente.

```tsx
import { AICard } from 'loce-ds2';

<AICard as="section" aria-label="Saldo de créditos" tone="dark">
  <h2>Saldo disponível</h2>
  <strong>2.046</strong>
</AICard>
```

- `tone`: `default` (superfície da plataforma) ou `dark` (superfície neutra do preview original).
- `beamColor`: paleta nativa do Beam (`colorful` por padrão; `ocean`, `mono`, etc.).
- `beamTheme`: override opcional do preset. Sem override, acompanha a classe `.dark` da página; `tone="dark"` usa o preset escuro.
- `animated`: padrão `true`; `false` não monta o Beam.
- `as`: `article` por padrão, ou `section`.
- `className` e `style`: wrapper; `surfaceClassName`: conteúdo e padding.
- Atributos semânticos e `ref` são encaminhados ao article/section.

A faísca do `AIIcon` puxa pra cor da plataforma (`data-platform` no html): ERP,
Talkbia e dev no espectro da Loce (rosa, violeta e azul no corpo), E-commerce do
índigo ao verde-limão, Agency do laranja ao índigo. As nove paradas ficam em
`--ai-icon-1..9` (ai.css) e o `AISpectrum` usa as mesmas. Em fundo preenchido a
faísca é lisa e herda a cor do texto: o `AIButton variant="gradient"` já faz isso,
e num `Button` primário use `IconSparkle` em vez de `AIIcon`. A superfície escura
é neutra.

[BorderBeam](https://libraries.dev/beam) 1.4.1 usa o preset `md` original:
movimento de 1,96s, brilho radial, borda de 1px e variação de matiz nativa.
Nenhuma camada, opacidade ou gradiente do efeito é substituído pelo DS.
A única folha de ajuste desliga a animação para `prefers-reduced-motion`.
O brilho não captura cliques e a biblioteca pausa o efeito fora da viewport.
O tema acompanha a página em tempo real, ou o tom escuro explícito do card; o raio de 24px acompanha o layout do card.

Validação: `npm run typecheck && npm run build && node --test tests/ai-card.test.mjs`.
Prévia local: `vendor/loce-ds2-0.30.0-ai.9.tgz` no Agency; substituir pela tag
oficial quando a versão do DS for publicada.

O host do Beam é a única superfície pintada. O conteúdo semântico é transparente, sem borda ou sombra própria; apenas o modo estático recebe uma borda comum.

## Padronização em revisão

O [inventário de padrões de IA](./ai-patterns-inventory.md) reúne os consumidores atuais do Agency, widgets, ações e estados para preparar a bancada de refinamento do DS. Os contratos ali propostos ainda não são componentes publicados.
