# Catálogo loce-ds → loce-ds2

Status do renascimento de cada componente do ds1 (e dos promovidos do uiLoce do ERP). Meta: catálogo completo, cada um redesenhado (visual, animação, acessibilidade), nada portado "como está".

Legenda: ✅ renasceu no ds2 · 🔨 em progresso · ⬜ pendente

## Fundamentos
| Componente | Status | Notas |
|---|---|---|
| Tokens (cores/superfícies/acento por plataforma) | ✅ | base neutra fria + surface-0..3 + data-platform |
| Ícones (Phosphor Fill, camada semântica) | ✅ | 70+ exports, troca de lib num arquivo |
| cn() | ✅ | |

## Shell
| Componente | Status | Notas |
|---|---|---|
| AppShell | ✅ | |
| PlatformRail | ✅ | logos reais das plataformas, glow, locked |
| SidebarNav | ✅ | hover com delay anti-flicker, accordion animado |
| HeaderBar | ✅ | slots |
| PageShell | ✅ | |
| ThemeToggle | ✅ | |
| CommandPalette | ⬜ | ERP ainda usa o próprio |

## Formulário
| Componente | Status | Notas |
|---|---|---|
| Button | ✅ | |
| Input | ✅ | |
| SearchInput | ✅ | |
| Select (dropdown do DS) | ✅ | + NativeSelect |
| Switch | ✅ | |
| Checkbox | ✅ | brand quando marcado, focus ring, label+descrição |
| Textarea / ExpandableTextarea | ✅ | autoResize, onSubmit com Enter, onChange(value) |
| MultiSelect | ✅ | chips com avatar, popover próprio |
| ComboBox | ✅ | busca digitável, opções com descrição/ícone, server-side (isLoading), teclado, flip-up, clear |
| DatePicker / TimeInput | ✅ | calendar react-day-picker tematizado, pt-BR |
| DateRangePicker | ✅ | período num popover só (estilo reserva): presets + calendário, primeiro clique marca o início, onChange só com range completo |
| SelectCard | ✅ | horizontal/vertical, seleção com ring brand |
| ImageUpload | ⬜ | |
| FileDropzone (uiLoce) | ⬜ | |
| InputMoneyOrPercent (uiLoce) | ⬜ | |
| TagsInput (ex InputArray_CTRL) | ✅ | chips horizontais, Enter/vírgula/colar |
| SwitchRow (ex ToggleRow) | ⬜ | |

## Dados e exibição
| Componente | Status | Notas |
|---|---|---|
| DataTable | ✅ | mesma API do ds1, drop-in |
| PaginationBar | ✅ | |
| Badge | ✅ | |
| Tooltip | ✅ | |
| LabelBadge | ⬜ | |
| Card (+Header/Content/Footer) | ✅ | |
| ConfigCard / SectionCard | ✅ | header com tile de ícone |
| MetricCard | ✅ | accent colorido por KPI |
| Timeline | ✅ | |
| EmptyState | ✅ | superfície própria com tile, descrição e ação |
| Skeleton (+Text/Table) | ✅ | shimmer próprio do pacote, SkeletonTable pra listagens |
| Avatar | ✅ | gradiente determinístico por nome + foto com fallback |
| Separator | ✅ | horizontal/vertical/label |
| StatusDot / ColorDot | ✅ | cores semânticas + pulse |
| TextCopy | ✅ | feedback de copiado inline |
| Tabs | ✅ | pill com count, ativo em brand |
| ScrollFade | ✅ | fade nas bordas via mask |
| ImageWithZoom | ✅ | lightbox com zoom/arraste |
| Text | ✅ | type scale utilitária (mesma API do ds1) |
| TableLoading | ✅ | esqueleto da tabela em toda carga/recarga de listagem; recebe `isLoading \|\| isPlaceholderData`, nunca `isFetching` |
| TableHeading | ✅ | título de tabela em uma linha: título + ⓘ com hint no tooltip + controle à direita, alinhado ao padding da DataTable |
| ErrorState | ✅ | erro de carregamento com tile de aviso e "Tentar de novo", mesma linguagem do EmptyState |
| StatStrip | ✅ | faixa de KPIs num card só (porte compacto); `loading`, `delta`, célula clicável com seta |
| WidgetCard | ✅ | casca de widget de dashboard: tile de ícone + título + `right`/`rightHint` |
| RankList | ✅ | ranking compacto (metade da altura do BarList), variantes `bar`/`background`, `split` em duas parcelas, share "<1%" |

### Padrões de listagem (painel, ERP e Talkbia)

Regras que os apps da suíte seguem e que estes componentes materializam:

- **Loading de lista é só o esqueleto da tabela** (`TableLoading`/`SkeletonTable`), na primeira carga e em cada busca, filtro ou página. Nunca spinner no campo de busca nem barra de progresso em cima da tabela. Com `keepPreviousData`, o sinal é `isPlaceholderData`, pra recarga em segundo plano não piscar.
- **Limpar busca é o X do `SearchInput`** (aparece com texto + `onClear`). Sem chip "Limpar".
- **Filtros aplicados usam `filterActive`** nos campos (ver "Filtros de listagem" no README).
- **Todo texto de UI começa com maiúscula**, inclusive depois do "·" ("773 pedidos · Ticket R$ 128").
- **Título de tabela é uma linha** (`TableHeading`): frase longa vai pro tooltip, não pra tela.
- **Dashboards compactos**: `StatStrip` pra KPIs, `WidgetCard` como casca, `RankList` pra rankings. Sem tabela com scroll horizontal dentro de card.

## Overlays
| Componente | Status | Notas |
|---|---|---|
| Dialog (primitiva) | ✅ | animação própria do pacote, teto 85vh |
| DropdownMenu (primitiva) | ✅ | + Label/Separator |
| SheetEntity (+ size wide) | ✅ | painel direito, stopPropagation, footer automático |
| ModalConfirm / ModalDelete | ✅ | delete com modes simple/checkbox/input |
| DropdownActions | ✅ | destructive com separador |
| Toaster/toast | ✅ | react-hot-toast com superfície ds2 |

## Gráficos e AI
| Componente | Status | Notas |
|---|---|---|
| charts/* (Recharts) | 🔨 | AreaChart ✅, BarChart ✅; Line/Donut/Sparkline pendentes |
| AIButton / AICard / AIIcon / SparklesText / TextType / TypingIndicator | ⬜ | CSS já migrado em animations.css |
| AudioPlayer | ⬜ | |
| EditorText (Quill, entry separado) | ⬜ | |
| Stepper (ex WidgetStep+TagStep) | ⬜ | |
| FloatingSaveButton | ⬜ | |
