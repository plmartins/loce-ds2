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
| Checkbox | ⬜ | |
| Textarea / ExpandableTextarea | ⬜ | |
| MultiSelect | ⬜ | |
| ComboBox | ⬜ | |
| DatePicker / TimeInput | ⬜ | |
| SelectCard | ⬜ | |
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
| Card (+Header/Content/Footer) | ⬜ | |
| ConfigCard / SectionCard | ⬜ | |
| MetricCard | ⬜ | |
| Timeline | ⬜ | |
| EmptyState | ✅ | superfície própria com tile, descrição e ação |
| Skeleton (+Text/Table) | ✅ | shimmer próprio do pacote, SkeletonTable pra listagens |
| Avatar | ✅ | gradiente determinístico por nome + foto com fallback |
| Separator | ⬜ | |
| StatusDot / ColorDot | ⬜ | |
| TextCopy | ⬜ | |
| Tabs | ⬜ | |
| ScrollFade | ⬜ | |
| ImageWithZoom | ⬜ | |
| Text | ⬜ | avaliar se sobrevive ou vira type scale |

## Overlays
| Componente | Status | Notas |
|---|---|---|
| Dialog (primitiva) | ✅ | animação própria do pacote, teto 85vh |
| DropdownMenu (primitiva) | ✅ | + Label/Separator |
| SheetEntity (+ size wide) | ⬜ | |
| ModalConfirm / ModalDelete | ⬜ | |
| DropdownActions | ⬜ | |
| Toaster/toast | ⬜ | avaliar sonner vs react-hot-toast |

## Gráficos e AI
| Componente | Status | Notas |
|---|---|---|
| charts/* (Recharts: Bar, Line, Area, Donut, Sparkline, StatCard) | ⬜ | P1, entra com o dashboard novo |
| AIButton / AICard / AIIcon / SparklesText / TextType / TypingIndicator | ⬜ | CSS já migrado em animations.css |
| AudioPlayer | ⬜ | |
| EditorText (Quill, entry separado) | ⬜ | |
| Stepper (ex WidgetStep+TagStep) | ⬜ | |
| FloatingSaveButton | ⬜ | |
