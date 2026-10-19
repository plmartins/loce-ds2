# IA no Loce DS2 — inventário e proposta de padrões

Status: preparado para revisão visual com Paulo. Os nomes e as regras propostos abaixo ainda não são uma API publicada. A missão de telas do Agency está pausada; este levantamento não migra os consumidores nem altera a cobrança.

Objetivo: refinar uma família de componentes no DS e refletir os ajustes em todos os produtos. Cada exemplo deve mostrar quando usar, estados e composição, além da aparência.

## Bancada visual local

Abra o showcase em `/#ia` (portal Maestri **Loce DS2 — IA**). A bancada mostra um componente por vez: `AIButton`, `AIComposer`, `AIWidget`, `AIMediaPreview`, `AIActivity`, `AIActionDialog` e `AISearch`. Cada um tem apenas os controles relevantes, nome proposto para o DS, uso e composição. Tema claro e escuro continuam disponíveis. As composições ficam em `showcase/src/AILab.tsx` e ainda não são exports públicos do pacote. Todas as ações são simuladas.

## O que existe no DS hoje

- `AIIcon`: ícone com degradê baseado nos tokens de marca.
- `AICard`: superfície com Beam, tema, raio e presets configuráveis.
- `Button`, `Textarea`, `Dialog`, `Skeleton`, `Timeline` e demais primitivas gerais.
- Ações, preços, widgets de conversa e geração ainda são composições locais do Agency. Não há um `AIButton` compartilhado.

A mesma ação hoje aparece como botão com degradê, botão ghost com ícone, botão com fundo suave e preço em uma cápsula, ou `Button` dentro de `AICard`. Essa liberdade de montagem é a origem da inconsistência.

## Catálogo completo a preparar no showcase

Os nomes abaixo são famílias propostas. Uma família pode ser composição de primitivas; não precisa virar mais um componente público só porque existe no inventário.

| Família | Exemplos que já temos | Padrão proposto / quando usar |
| --- | --- | --- |
| Identidade de IA | Sparkle, varinha, ícone com degradê, avatar Luce | `AIIcon` para identificar uma ação; avatar para a assistente. Tokens únicos de cor, tamanho e espaçamento. |
| Ação de IA | Gerar, Melhorar, Nova legenda, Criar nova versão da imagem, Analisar, Preencher com IA | `AIButton`: um único visual com beam, em tamanhos padrão e compacto. Custo e loading fazem parte do contrato. |
| Ação em menu | Reanalisar Instagram, Gerar identidade visual | `AIActionItem`: mesma linguagem do botão, adaptada à linha de menu; rótulo e custo alinhados. |
| Preço da ação | Custo no composer, legenda, imagem, vídeo, identidade | `AICost`: preço numérico, grátis, consultando e indisponível. Separado do saldo. |
| Campo e composer | Brief de criação, chat da Luce, edição de vídeo, instrução de ajuste, legenda | `AIComposer` para enviar pedidos; campo normal com `AIButton` para texto editável assistido. Anexos, opções e envio são slots da composição. |
| Convite à IA | Ajuda para descrever a marca, pedir ideia, entrada de criação | `AIAssistCard`: ícone/assistente, título, descrição curta e ação. Uma hierarquia comum nos formatos horizontal e vertical. |
| Atividade em texto | Luce pensando, digitando, analisando; ferramenta em execução | `AIActivity`: compacto para conversa; expandido quando há etapas relevantes. |
| Geração de mídia | Imagem, vídeo e carrossel em geração na lista, detalhe e conversa | `AIGenerationPreview`: proporção reservada, efeito de geração, beam e transição para resultado. |
| Widget de resultado | Post pronto na conversa, prévia de imagem/vídeo, carrossel | `AIResultCard`: cabeçalho, conteúdo, status e ações. O produto fornece os dados e as ações específicas. |
| Sugestões e escolhas | Ideias, opções de copy, variações de arte, referências e frames | `AIChoiceGroup`: seleção, recomendação opcional e confirmação explícita. Subtipos de texto e mídia. |
| Revisão e ajuste | Confirmação da copy, edição de campos, comandos de refino, regeneração com instrução opcional | `AIReviewPanel` / `AIActionDialog`: composição consistente para revisar ou pedir uma mudança antes de executar. |
| Crédito e recuperação | Saldo, recarga, pacotes, bônus, falta de saldo e falha de geração | Superfícies compartilhadas de custo/saldo, aviso e recuperação. Regras de cobrança e checkout continuam nos produtos. |

## Mapa dos consumidores atuais

Caminhos relativos a `loce-agency/loce-marketing-frontend/src/`.

| Área | Componentes / telas para revisão |
| --- | --- |
| Criação direta | `features/posts/components/DirectComposer.tsx`, `PostCreationComposer.tsx`, `ComposerChips.tsx`, `ComposerMenuControls.tsx`, `VideoComposerChips.tsx`, `VideoFramesPicker.tsx`, `ImageSourcePicker.tsx`, `OutputKindToggle.tsx` |
| Upload manual | `features/posts/manual/ManualPostWizard.tsx`: geração/melhoria de legenda com custo. Campo de legenda deve continuar um campo editável comum. |
| Edição e regeneração | `pages/app/posts/[id].tsx`, `features/posts/components/VideoPostEditor.tsx`, `PostEditorSections.tsx` |
| Geração e resultado | `features/posts/components/PostCard.tsx`, `GalleryCard.tsx`, `PostStateCover.tsx`, `GeneratingArtPlaceholder.tsx`, `CarouselViewer.tsx`, `PostFailureNotice.tsx` |
| Histórico e escolhas de mídia | `features/posts/components/ChooseVariationView.tsx`, `DirectCarouselChoice.tsx`, `VersionList.tsx`, `ReferencesUsed.tsx`, `PostActivityTimeline.tsx` |
| Entrada e conversa | `features/luce/components/ChatInput.tsx`, `ChatAttachmentThumbs.tsx`, `MessageBubble.tsx`, `LuceAvatar.tsx`, `NewPostButton.tsx`, `components/ui/TypingIndicator.tsx` |
| Widgets da Luce | `features/luce/components/AskPromptCard.tsx`, `ChooseVariationPromptCard.tsx`, `CopyVariantsWidget.tsx`, `IdeasList.tsx`, `ToolCallCard.tsx`, `PostWidget.tsx`, `PostPreviewModal.tsx` |
| Revisão de copy | `features/luce/components/copy-confirmation/CopyConfirmationCard.tsx`, `CopyConfirmationModal.tsx`, `CopyFieldEditor.tsx`, `SingleCopyEditor.tsx`, `RefineCommandPalette.tsx` |
| Referências e qualidade | `features/luce/components/ReferenceSelector.tsx`, `ImageQualitySelector.tsx` |
| Marca e onboarding | `pages/app/configuracoes/marca/index.tsx`, `features/onboarding/components/Step01QuickAnalysis.tsx`, `Step02Analyzing.tsx`, `Step03ReviewIdentity.tsx`, `Step04Curation.tsx`, `ProgressBar.tsx` |
| Preço e saldo | `features/subscription/components/CreditCost.tsx`, `CreditBalanceCard.tsx`, `CreditsBadge.tsx`, `CreditCycleRing.tsx`, `CreditRenewalHint.tsx` |
| Recarga e acesso | `features/subscription/components/RechargeCreditsModal.tsx`, `CreditRecharge.tsx`, `PaywallInChatCard.tsx`, `PaywallModal.tsx` |

O widget de créditos retirado da sidebar permanece fora das aplicações ativas. Sua existência no código não é motivo para trazê-lo de volta.

## Estados para alternar na bancada

Evitar um único booleano `loading` para fases com comportamentos diferentes.

| Estado | O que a pessoa vê | Comportamento |
| --- | --- | --- |
| Disponível | Ação, ícone e custo | Clique habilitado conforme os requisitos do formulário. |
| Hover / foco / pressionado | Realce consistente | Foco de teclado visível; beam não substitui o foco. |
| Desabilitado | Ação legível, menos destaque | Sem clique nem movimento de atividade; causa acessível quando necessária. |
| Consultando preço | Área do custo reservada | Não mostrar `0` nem “Grátis” enquanto o preço é desconhecido. |
| Preço indisponível | Possibilidade de consultar novamente | Não executar uma ação cobrada sem preço conhecido. |
| Verificando saldo | Feedback no mesmo botão | Impede clique duplicado e preserva largura e altura. |
| Na fila | Atividade aguardando execução | Não simular porcentagem nem tempo restante. |
| Analisando / gerando / refinando | Movimento e etapa adequada ao contexto | `aria-busy`; progresso numérico somente se for real. |
| Aguardando escolha | Opções e ação de continuar | Não aparentar que a IA continua trabalhando. |
| Sucesso | Resultado e ação seguinte | Efeito de atividade termina; transição sem salto de layout. |
| Falha | Explicação curta e recuperação | Preservar entrada/resultado anterior; tentar novamente quando disponível. |
| Sem saldo, após tentativa | Recarga com custo e saldo | Não antecipar aviso de saldo insuficiente no composer. Não limpar o rascunho. |
| Cancelado / interrompido | Interrupção explícita quando suportada | Só oferecer cancelar quando a operação permitir. Fechar modal não significa cancelar um job. |

Na bancada, botão, composer, atividade e modal mostram disponível/gerando; o widget de saldo é informativo; geração de mídia também mostra concluído/falhou. Sucesso de uma ação aparece no resultado e falhas ficam no contexto do produto, sem transformar todo botão em um check ou aviso. Nem todo componente terá todos os estados. O showcase deve marcar os estados aplicáveis a cada família e permitir acioná-los manualmente, sem chamadas pagas.

## Decisões já dadas por Paulo

- Composer permite desligar o efeito de IA da superfície (`effect={false}` na proposta) independentemente do botão e do estado de geração. Preservar texto, borda neutra, altura automática, transições e scroll.
- Campo de legenda com borda comum; beam no botão de gerar/melhorar.
- Botão com borda neutra (`--border`), aprovada no lugar da borda tingida de rosa; sempre visível durante a animação.
- Ao gerar, fazer transição suave do contorno para o brilho interno; retornar suavemente ao terminar. Preservar a largura do botão e respeitar movimento reduzido.
- Loading do botão mantém o ícone de IA neutro, com pulsação suave; sem spinner genérico.
- Texto, preço e ícone inicial do botão neutros. O ícone junto ao custo e o beam mantêm a cor.
- Removida a variante de botão de IA com fundo em degradê; criar e confirmar usam a mesma família com beam.
- Preço da ação junto ao botão.
- Regeneração de imagem em uma entrada, com instrução opcional.
- Widget: saldo de créditos como exemplo principal, com valor demonstrativo; convite, escolha e resultado como variações.
- Modal de ajuste com beam na superfície e transição suave para `pulse-inner` ao gerar.
- Texto de atividade avulso (`AIActivity`), com um rainbow contínuo desde o ícone até o texto. Disponível: degradê estático. Gerando: ícone pulsa e um reflexo percorre ícone e texto na mesma faixa de cores. Sem animação, preservar o degradê.
- Geração usa `pulse-inner`. Manter o renderer montado, carregar e decodificar a imagem antes do reveal; ao terminar, revelar o resultado e retirar suavemente o beam. Em vídeo, revelar o poster antes de entregar o player.
- Card de geração com beam, sem a cápsula redundante “Gerando imagem…”. Manter identificação acessível do estado.
- Composer reaproveita o comportamento do DirectComposer de Posts: medição de texto fora do fluxo, altura com transição de 180 ms, regiões de anexos/controles medidas com ResizeObserver e transição de 200 ms; barra em fluxo, scroll interno após o limite de altura, espaço estável da scrollbar e contenção da rolagem; acompanhar o cursor apenas ao editar no fim, sem forçar a posição durante revisão; teclado Enter/Shift+Enter, bloqueio durante envio e movimento reduzido.
- Widgets e loadings devem preservar a estrutura e não fazer o layout pular.
- Mostrar falta de saldo depois de a pessoa tentar executar.
- Bônus do pacote flutuando no canto superior direito, fora do fluxo de conteúdo.
- Textos de título e descrição próximos, sem gaps exagerados.
- Usar “Versão 1”, “Versão 2” quando a versão for útil; evitar `v1`/`v2` sem contexto.

## Regras propostas para refinar

### Botões

- Hierarquia muda pela importância na tela, não pelo verbo da ação.
- Gerar e Melhorar usam o mesmo componente e a mesma anatomia.
- Três tamanhos no máximo, herdados do botão do DS; nenhum padding especial por tela.
- Ícone, rótulo e custo têm posições constantes. Variação compacta precisa de nome acessível.
- Definir no DS como beam, borda e superfície convivem. O consumidor não deve precisar envolver o botão em um card nem remover bordas com seletores locais.
- Custo é um dado recebido. O componente não busca catálogo, saldo ou checkout.

### Beam e movimento

- Separar identidade de IA disponível de atividade em execução. Precisamos conseguir reconhecer os dois estados sem depender só da cor.
- Definir presets semânticos: ação, convite, composer e geração. Evitar escolher `md`, `pulse-inner`, raio e halo em cada produto.
- Superfícies e botões podem compartilhar a identidade de IA quando solicitado (por exemplo, no modal de ajuste). Manter os efeitos discretos e sincronizados; campos editáveis comuns não recebem beam.
- Borda base sempre legível; efeito não recorta conteúdo nem invade o alvo vizinho.
- `prefers-reduced-motion` preserva borda, contraste e feedback, com alternativa estática.
- Pausar efeitos fora da viewport/aba quando aplicável. Uma lista com muitos jobs não deve multiplicar efeitos pesados desnecessariamente.

### Loading

- Skeleton indica busca de conteúdo já existente; atividade de IA indica uma operação em andamento.
- O loading do calendário e listas comuns usa o padrão geral de skeleton do DS. Não ganha identidade de IA só por conter posts gerados.
- Reservar proporção da mídia e espaço de ações antes do resultado.
- Não colocar skeletons dentro de uma lista rolável que gere scroll falso.
- Manter texto digitado e resultado anterior durante refino, sempre que possível.
- Não usar um percentual ou uma contagem regressiva inventada para transmitir velocidade.

### Widgets

- Anatomia comum: identificação → título/descrição → conteúdo → feedback → ações.
- Combinações previstas: texto, mídia, opções, revisão, atividade e resultado.
- Opções e estados antigos da conversa precisam distinguir histórico de ação ainda disponível.
- Mostrar custo na ação que efetivamente dispara a geração; clicar em uma opção não deve esconder uma cobrança implícita.
- Cabeçalho e rodapé compartilhados; o conteúdo específico entra por composição.
- Luce é conteúdo/identidade do produto recebido por slot, não imagem fixa dentro de todo componente do DS.

### Créditos

- Distinguir preço, saldo e pacote de compra visualmente e no contrato.
- Estados de preço: pago, grátis, carregando e indisponível. Ausência de valor não significa grátis.
- Catálogo canônico, cálculo, débito, estorno e permissões ficam no host.
- Valores no showcase são demonstrativos. Uma ação custar 3 créditos hoje não torna `3` um default do DS.
- Falha de geração não deve prometer estorno se o produto não confirmou essa política/operação.

## Roteiro da bancada visual

1. **AIButton:** padrão e compacto, custo e estados.
2. **AIComposer:** pedido, referências e envio.
3. **AIWidget:** saldo de créditos; variações de convite, escolha e resultado.
4. **AIMediaPreview:** geração com `pulse-inner`, reveal real do img-fx e resultado, sem mudar proporção.
5. **AIActivity:** texto avulso animado para etapas de IA.
6. **AIActionDialog:** instrução opcional, confirmação e beam na superfície.

Exibir apenas a seleção atual, com controles de estado e tema. O inventário completo acima serve para a migração futura e não deve se transformar em uma parede de exemplos na bancada. Cenários e preços são simulados localmente.

## Critério para levar aos produtos

- Aparência refinada na bancada, incluindo estados intermediários.
- Contrato e nomes definidos, com exemplos de composição.
- Sem overrides locais de borda, gradiente, halo ou padding para obter o padrão.
- Teclado, nome acessível, contraste e motion reduzido verificados.
- Loading sem deslocamento e nenhuma chamada paga no showcase.
- Publicação/versionamento do DS separada da migração dos consumidores.
- Migração por família, substituindo variações antigas; não manter um segundo padrão improvisado em paralelo.

## Paleta compartilhada de IA

O preset `colorful` da versão instalada de `border-beam` é a fonte das cores. `scripts/sync-ai-palette.mjs` extrai seus stops para `src/styles/ai-palette.css` durante o build do DS; não editar o arquivo gerado manualmente. Mudanças na estrutura da dependência exigem revisão explícita do adaptador.

O beam mantém o material nativo (brilho, saturação, opacidade e variação de matiz). `AIActivity` deriva os tokens `--ai-text-*` dessa mesma base: mistura com preto no tema claro e com branco no dark para legibilidade. Ícone e texto usam a mesma faixa; os valores não são uma segunda paleta independente.

### Busca com IA (proposta visual)

`AISearch`: campo de busca por intenção com o preset nativo `line` em repouso e transição para `pulse-inner` durante a consulta. Campo acessível, Enter, botão de busca e limpar. O host fornece busca e resultados; a bancada simula somente a interação. Busca literal/filtro comum continua usando o componente padrão sem efeito de IA.

### Explorações compactas

As variantes ghost foram retiradas da bancada a pedido de Paulo. AIButton mantém apenas Padrão e Compacto, ambos com borda neutra e beam. A exploração de ghost fica suspensa. AISearch mostra um reflexo neutro no placeholder vazio, sem afetar o texto digitado e respeitando movimento reduzido.

## Primeira integração local no Agency (25/09/2026)

O pacote `0.30.0-ai.19` exporta `AIButton`, `AICost`, `AISurface`, `AIWidget`, `AIActivity`, `AIComposer`, `AIComposerInput`, `AIComposerRegion`, `AIActionDialog` e `AIMediaPreview`. A bancada usa os mesmos componentes nas ações, campos, superfícies, atividade e mídia. `AISearch` continua como proposta visual, sem alterar filtros literais do produto.

O Agency consome o tarball local, sem publicação no registry. Migração aplicada aos composers de Posts/Luce, legenda do upload e edição, regeração de imagem, ajustes de copy, ações de Marca, widget de créditos e previews de geração nos cards. Preço, saldo, permissões, envio e acompanhamento de jobs continuam nos hooks do produto.

`AIMediaPreview` deve permanecer montado durante `generating → ready`; `src` recebe imagem ou poster, nunca MP4. Conteúdo pronto entra como `children`. Sem poster, falha ao carregar ou movimento reduzido: liberar o resultado sem esperar o shader. Fora da viewport, pausar e iniciar o reveal quando voltar a ficar visível. Há saída de segurança se o renderizador não concluir em 10 segundos visíveis.

`AIComposerInput` oferece autoaltura limitada e scroll interno; `AIComposerRegion` acomoda mudanças de anexos/controles. O host organiza os slots conforme o fluxo. `effect={false}` em `AISurface`/`AIComposer` permite campo neutro dentro de um modal que já tem beam.

`AIButton` tem apenas `default` e `compact`. `loading`, `loadingLabel`, `credits` e `costState` descrevem a ação. Custo ausente não vira grátis; consultar bloqueia envio, indisponível permite ao host oferecer nova consulta. Nunca usar valores ilustrativos do showcase nas chamadas do produto.

## Ações principais dos composers

A pedido de Paulo, o gradiente volta para o envio e para a geração principal com preço, como formatos reutilizáveis do DS:
- `AISendButton`: circular, seta para cima, nome acessível e loading; usado no chat da Luce.
- `AIButton variant="gradient" layout="icon-cost"`: ação principal com apenas ícone e total de créditos; usado no composer de Posts.
- `AIButton` com beam: ações assistidas como Melhorar e Criar nova versão.

O gradiente usa `--gradient-loce` do host, com fallback nos tokens do DS. Custo e bloqueio de envio continuam vindo do produto. A superfície do composer mantém a borda sutil durante foco, sem adicionar um segundo contorno cinza.

## Intensidade compartilhada do Beam

A intensidade pertence ao `AICard`, base dos componentes de IA. No claro: brilho interno 2,4, borda 2,5 e halo 1,4. No escuro: brilho interno 1,7, borda 1,8 e halo 1,4. O tema segue o efeito, incluindo overrides explícitos. Cores, movimento e transições permanecem nativos. Consumidores não precisam de classes de intensidade próprias.
