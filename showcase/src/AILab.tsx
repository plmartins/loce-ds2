import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { AICard, AIIcon, AIButton, AISendButton, AISurface, AIActivity, AIComposerInput, AIComposerRegion as ComposerRegion, AIMediaPreview, AIActionDialog, Button, Textarea, cn } from 'loce-ds2';
import { IconSparkle, IconCheck, IconRefresh, IconPlus, IconAlert, IconSearch, IconClose } from 'loce-ds2/icons';
import './ai-lab.css';
import type { ImageGenerationPreset } from 'img-fx';

type State = 'idle' | 'loading' | 'success' | 'error';
type Price = 'paid' | 'free' | 'pending' | 'unavailable';
type ActionKind = 'default' | 'compact' | 'gradient' | 'send';
type Beam = 'md' | 'pulse-inner' | 'pulse-outside';
const states: [State, string][] = [['idle', 'Disponível'], ['loading', 'Gerando'], ['success', 'Concluído'], ['error', 'Falhou']];

const LabContext = createContext<{state: State; price: Price; beam: Beam; animated: boolean; run: () => void}>({state:'idle', price:'paid', beam:'md', animated:true, run:()=>{}});

const Action = ({ children = 'Gerar com IA', amount = 3, kind = 'default', disabled = false, onClick }: { children?: ReactNode; amount?: number; kind?: ActionKind; disabled?: boolean; onClick?: () => void }) => {
    const { state, price, animated, run } = useContext(LabContext);
    if (kind === 'send') return <AISendButton loading={state === 'loading' && !disabled} disabled={disabled} onClick={onClick ?? run} />;
    return <AIButton size={kind === 'gradient' ? 'default' : kind} variant={kind === 'gradient' ? 'gradient' : 'beam'} layout={kind === 'gradient' ? 'icon-cost' : 'label'} credits={price === 'paid' ? amount : price === 'free' ? 0 : undefined} costState={price === 'paid' || price === 'free' ? 'ready' : price} loading={state === 'loading' && !disabled} disabled={disabled} animated={animated} onClick={onClick ?? run}>{children}</AIButton>;
};
const Frame = ({ children, effect = true }: { children: ReactNode; effect?: boolean }) => {
    const { animated, state } = useContext(LabContext);
    return <AISurface className="lab-frame" contentClassName="lab-frame-content" loading={state === 'loading'} animated={animated} effect={effect}>{children}</AISurface>;
};
function Activity({ state, text, idleText = 'Pronta para ajudar' }: { state: State; text: string; idleText?: string }) {
    const { animated } = useContext(LabContext);
    return <AIActivity loading={state === 'loading'} animated={animated}>{state === 'loading' ? text : idleText}</AIActivity>;
}

function Composer({ value, onChange, effect = true }: { value: string; onChange: (value: string) => void; effect?: boolean }) {
    const { state, price, run } = useContext(LabContext);
    const [mode, setMode] = useState('image');
    const [references, setReferences] = useState<number[]>([]);
    const nextReference = useRef(0);
    const locked = state === 'loading';
    const canSubmit = !locked && !!value.trim() && price !== 'pending' && price !== 'unavailable';
    return <div className="lab-composer"><Frame effect={effect}><section aria-label="Pedido para criar com IA" aria-busy={locked}>
        <ComposerRegion><div className={cn('lab-composer-media', (references.length > 0 || mode === 'video') && 'has-media')}>
            {mode === 'video' && <div className="lab-composer-frames"><button disabled={locked} onClick={() => setReferences(items => [...items, nextReference.current++])}>Frame inicial <IconPlus size={12} /></button><span aria-hidden="true">→</span><button disabled={locked} onClick={() => setReferences(items => [...items, nextReference.current++])}>Frame final <IconPlus size={12} /></button></div>}
            {references.map((id, index) => <div key={id} className="lab-composer-thumb"><img src="/ai-preview.svg" alt={`Referência de exemplo ${index + 1}`} /><button disabled={locked} aria-label={`Remover referência ${index + 1}`} onClick={() => setReferences(items => items.filter(item => item !== id))}>×</button></div>)}
        </div></ComposerRegion>
        <AIComposerInput aria-label="Pedido para a IA" value={value} onChange={onChange} onSubmit={run} canSubmit={canSubmit} disabled={locked} minTextHeight={64} maxTextHeight={176} placeholder="O que vamos criar para sua marca?" />
        <ComposerRegion><div className="lab-composer-toolbar"><div className="lab-composer-controls">
            <button className="lab-chip" disabled={locked || references.length >= 4} onClick={() => setReferences(items => [...items, nextReference.current++])}><IconPlus size={14} />Referência</button>
            <div className="lab-composer-modes" role="group" aria-label="Tipo de criação"><button aria-pressed={mode === 'image'} disabled={locked} onClick={() => setMode('image')}>Imagem</button><button aria-pressed={mode === 'video'} disabled={locked} onClick={() => setMode('video')}>Vídeo</button></div>
            <select className="lab-composer-format" aria-label="Formato" disabled={locked}><option>Feed</option><option>Story</option></select>
        </div><Action kind="gradient" amount={mode === 'video' ? 700 : 70} disabled={!value.trim()}>Gerar</Action></div></ComposerRegion>
    </section></Frame></div>;
}

function Search() {
    const { state, animated, run } = useContext(LabContext);
    const [query, setQuery] = useState('');
    const field = useRef<HTMLInputElement>(null);
    const busy = state === 'loading';
    return <form className="lab-search" role="search" aria-label="Busca com IA" aria-busy={busy} data-busy={busy} onSubmit={event => { event.preventDefault(); if (query.trim() && !busy) run(); }}>
        {animated && <div className="lab-search-effects" aria-hidden="true">
            <AICard beamType="line" beamGlowSize={1.8} borderRadius={999} className="lab-search-beam lab-search-beam-idle" surfaceClassName="!p-0 h-full"><span /></AICard>
            <AICard beamType="pulse-inner" borderRadius={999} className="lab-search-beam lab-search-beam-busy" surfaceClassName="!p-0 h-full"><span /></AICard>
        </div>}
        <div className="lab-search-content">
            <button type="submit" aria-label="Buscar com IA" disabled={busy || !query.trim()}>{busy ? <IconSparkle className="lab-ai-working" size={21} /> : <IconSearch size={21} />}</button>
            <div className="lab-search-field"><input ref={field} type="search" aria-label="O que você quer encontrar?" placeholder="O que você quer encontrar?" value={query} onChange={event => setQuery(event.target.value)} disabled={busy} />{!query && <span className="lab-search-placeholder" aria-hidden="true">O que você quer encontrar?</span>}</div>
            <button type="button" className="lab-search-clear" style={{ visibility: query ? 'visible' : 'hidden' }} aria-label="Limpar busca" disabled={busy} onClick={() => { setQuery(''); field.current?.focus(); }}><IconClose size={15} /></button>
        </div>
    </form>;
}

const components = [
    { id: 'button', name: 'AIButton', label: 'Botão de IA', description: 'Gerar, melhorar e refazer. Um visual único, com custo e estados.', use: 'Ações de IA em formulários, cabeçalhos e widgets.', includes: 'Assistido · compacto · gradiente com custo · envio com seta · estados' },
    { id: 'composer', name: 'AIComposer', label: 'Entrada de pedido', description: 'Campo que cresce com o pedido, referências e controles que se acomodam suavemente.', use: 'Criação de conteúdo e mensagens para a assistente.', includes: 'Altura automática · entrada de referências · controles em fluxo · beam entre estados' },
    { id: 'widget', name: 'AIWidget', label: 'Widget de IA', description: 'Uma superfície compartilhada, com o saldo de créditos como exemplo principal.', use: 'Saldo de créditos, ajuda contextual e respostas da assistente.', includes: 'Ícone avulso · título · conteúdo · ações' },
    { id: 'media', name: 'AIMediaPreview', label: 'Geração de mídia', description: 'O efeito de geração, o estado de erro e a apresentação do resultado.', use: 'Prévia de imagem, vídeo e carrossel em criação.', includes: 'Efeito real · reveal ao concluir · beam · proporção fixa' },
    { id: 'activity', name: 'AIActivity', label: 'Texto de atividade', description: 'Texto avulso em rainbow. As cores ganham movimento enquanto a IA trabalha.', use: 'Conversa, análises e etapas de geração sem um card próprio.', includes: 'Rainbow estático · animação ao gerar · estados · movimento reduzido' },
    { id: 'dialog', name: 'AIActionDialog', label: 'Modal de ajuste', description: 'Pedir uma mudança ou gerar outra versão, com instrução opcional.', use: 'Regeneração e ajustes que precisam de contexto.', includes: 'Instrução · custo · confirmação · estados da ação' },
    { id: 'search', name: 'AISearch', label: 'Busca com IA', description: 'Busca por intenção, com um brilho discreto na borda inferior.', use: 'Buscas que interpretam uma intenção ou encontram resultados com IA.', includes: 'Beam line · pulse-inner ao buscar · limpar · Enter para buscar' },
] as const;
type ComponentId = typeof components[number]['id'];

export function AILab() {
    const [active, setActive] = useState<ComponentId>('button');
    const [state, setState] = useState<State>('idle');
    const [price, setPrice] = useState<Price>('paid');
    const [animated, setAnimated] = useState(true);
    const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
    const [buttonKind, setButtonKind] = useState<ActionKind>('default');
    const [composerEffect, setComposerEffect] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [imagePreset, setImagePreset] = useState<ImageGenerationPreset>('pixels-organic');
    const [widgetKind, setWidgetKind] = useState('balance');
    const [activityText, setActivityText] = useState('Pensando…');
    const [choice, setChoice] = useState(0);
    const [prompt, setPrompt] = useState('');
    const [instruction, setInstruction] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [notice, setNotice] = useState('');
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const availableStates = active === 'media' ? states : active === 'widget' && widgetKind === 'balance' ? states.slice(0, 1) : states.slice(0, 2);
    const current = components.find(component => component.id === active)!;
    useEffect(() => {
        document.documentElement.dataset.platform = 'marketing';
        document.documentElement.classList.toggle('dark', dark);
        document.title = 'Componentes de IA · Loce DS2';
    }, [dark]);
    useEffect(() => () => clearTimeout(timer.current), []);
    const selectState = (next: State) => { clearTimeout(timer.current); setState(next); setNotice(''); };
    const selectComponent = (id: ComponentId) => {
        setActive(id); setDisabled(false); setNotice('');
        selectState(id === 'media' || id === 'activity' ? 'loading' : 'idle');
    };
    const run = () => {
        if (active !== 'search' && (price === 'pending' || price === 'unavailable')) { setNotice('Preço indisponível para esta simulação.'); return; }
        clearTimeout(timer.current); setState('loading'); setNotice('');
        timer.current = setTimeout(() => { setState(active === 'media' ? 'success' : 'idle'); setNotice('Simulação concluída.'); }, 2200);
    };
    const dialogBody = <Frame><div className="lab-dialog-copy">
        <AIIcon size={28} />
        <h3>Vamos criar uma nova versão?</h3>
        <p>Conte o que quer mudar ou deixe em branco para uma nova ideia.</p>
        <Textarea aria-label="Instrução para nova versão" value={instruction} onChange={setInstruction} rows={4} placeholder="Ex.: destacar mais o produto…" />
        <div className="lab-widget-footer"><Button variant="secondary" onClick={() => { setModalOpen(false); selectState('idle'); }}>Cancelar</Button><Action amount={15}>Criar nova versão</Action></div>
    </div></Frame>;
    return <LabContext.Provider value={{ state, price, animated, beam: 'md', run }}>
        <div className={cn('ai-lab', !animated && 'lab-no-motion')}>
            <aside className="lab-sidebar">
                <a className="lab-brand" href="#ia"><AIIcon size={27} /><div>loce<span>Design system</span></div></a>
                <div className="lab-nav-caption">COMPONENTES DE IA</div>
                <nav aria-label="Componentes propostos para o DS">
                    {components.map(component => <button key={component.id} aria-current={active === component.id ? 'page' : undefined} onClick={() => selectComponent(component.id)}><span>{component.label}</span><code>{component.name}</code></button>)}
                </nav>
                <div className="lab-sidebar-foot"><span>Base já existente</span><div><code>AIIcon</code><code>AICard</code></div><p>Custo compartilhado: <code>AICost</code></p></div>
            </aside>
            <main className="lab-main">
                <header className="lab-topbar"><span>Loce DS2 <span>/</span> IA</span><button className="lab-theme" aria-pressed={dark} onClick={() => setDark(!dark)}>{dark ? '☀ Tema claro' : '☾ Tema dark'}</button></header>
                <div className="lab-heading"><div><span className="lab-eyebrow">{active === 'search' ? 'PROPOSTA PARA O DS' : 'COMPONENTE DO DS'}</span><h1>{current.name}</h1><p>{current.description}</p></div><span className="lab-tag">{components.findIndex(c => c.id === active) + 1} / {components.length}</span></div>
                <section className="lab-workbench" aria-label={`Prévia de ${current.name}`}>
                    <div className="lab-controls"><div className="lab-segments" role="group" aria-label="Estado do componente">{availableStates.map(([id, label]) => <button key={id} aria-pressed={state === id} onClick={() => selectState(id)}>{label}</button>)}</div><label className="lab-motion"><input type="checkbox" checked={animated} onChange={e => setAnimated(e.target.checked)} />Animação</label></div>
                    <div className={cn('lab-stage', active === 'media' && 'lab-stage-media')}>
                        {active === 'button' && <Action kind={buttonKind} amount={buttonKind === 'gradient' ? 70 : 3} disabled={disabled}>{buttonKind === 'gradient' ? 'Gerar' : buttonKind === 'default' ? 'Gerar com IA' : 'Criar nova versão'}</Action>}
                        {active === 'composer' && <Composer value={prompt} onChange={setPrompt} effect={composerEffect} />}
                        {active === 'widget' && <div className="lab-widget"><Frame>
                            {widgetKind === 'balance' && <div className="lab-balance"><div className="lab-balance-heading"><AIIcon size={28} /><h3>Seus créditos de IA</h3></div><p>Disponíveis para suas próximas criações</p><div className="lab-balance-value"><strong>491</strong><span>créditos</span></div><div className="lab-balance-footer"><span>Saldo ilustrativo</span><Button variant="secondary" onClick={() => setNotice('A recarga é aberta pelo produto. Aqui, o saldo é uma demonstração.')}>Adicionar créditos</Button></div></div>}
                            {widgetKind === 'invite' && <div className="lab-assist"><AIIcon size={28} className="lab-assist-icon" /><div className="lab-assist-copy"><h3>Precisa de ajuda para descrever sua marca?</h3><p>Conte o que você faz. A IA prepara uma sugestão para você revisar.</p><div className="lab-widget-footer"><Action>Preencher com IA</Action></div></div></div>}
                            {widgetKind === 'choices' && <><div className="lab-widget-title"><AIIcon size={23} /><h3>Qual ideia combina com sua marca?</h3></div>{['Mostre o produto em ação', 'Conte a história da marca', 'Responda uma dúvida dos clientes'].map((text, i) => <button key={text} className={cn('lab-choice', choice === i && 'selected')} aria-pressed={choice === i} onClick={() => setChoice(i)}>{text}{choice === i && <IconCheck size={15} />}</button>)}<div className="lab-widget-footer"><Action amount={70}>Usar esta ideia</Action></div></>}
                            {widgetKind === 'result' && <><div className="lab-widget-title"><AIIcon size={23} /><h3>Sua legenda está pronta</h3></div><p className="lab-result-copy">Seu próximo favorito está aqui. Conheça os detalhes da nossa nova coleção e escolha o que combina com você.</p><div className="lab-widget-footer"><Action>Melhorar com IA</Action></div></>}
                        </Frame></div>}
                        {active === 'media' && <div className="lab-media-wrapper">
                            <div className="lab-media-frame">
                                <AIMediaPreview state={state === 'loading' ? 'generating' : state === 'error' ? 'failed' : 'ready'} animated={animated} theme={dark ? 'dark' : 'light'} preset={imagePreset} src="/ai-preview.svg" borderRadius={20}>
                                    {state === 'error' ? <div className="lab-media-message"><IconAlert size={26} /><strong>Vamos tentar de novo?</strong><p>Sua ideia está salva.</p><Button variant="secondary" onClick={run}><IconRefresh size={14} />Tentar novamente</Button></div> : state === 'idle' ? <div className="lab-media-message"><AIIcon size={32} /><strong>Sua próxima criação</strong></div> : <img src="/ai-preview.svg" alt="Resultado da geração" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                                </AIMediaPreview>
                            </div>
                        </div>}
                        {active === 'search' && <Search />}
                        {active === 'activity' && <Activity state={state} text={activityText} />}
                        {active === 'dialog' && <div className="lab-dialog-preview">{dialogBody}</div>}
                    </div>
                    <div className="lab-settings">
                        {active === 'composer' && <label className="lab-checkbox"><input type="checkbox" checked={composerEffect} onChange={e => setComposerEffect(e.target.checked)} />Efeito de IA no campo</label>}
                        {active === 'button' && <><label>Visual<select value={buttonKind} onChange={e => setButtonKind(e.target.value as ActionKind)}><option value="default">Padrão</option><option value="compact">Compacto</option><option value="gradient">Gerar com preço</option><option value="send">Enviar · seta</option></select></label><label className="lab-checkbox"><input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} />Desabilitado</label></>}
                        {!(active === 'button' && buttonKind === 'send') && active !== 'media' && active !== 'activity' && active !== 'search' && !(active === 'widget' && widgetKind === 'balance') && <label>Custo<select value={price} onChange={e => setPrice(e.target.value as Price)}><option value="paid">Com créditos</option><option value="free">Grátis</option><option value="pending">Consultando</option><option value="unavailable">Indisponível</option></select></label>}
                        {active === 'widget' && <label>Conteúdo<select value={widgetKind} onChange={e => { setWidgetKind(e.target.value); selectState('idle'); }}><option value="balance">Saldo de créditos</option><option value="invite">Convite</option><option value="choices">Escolha</option><option value="result">Resultado</option></select></label>}
                        {active === 'media' && <><Button variant="secondary" onClick={() => selectState(state === 'loading' ? 'success' : 'loading')}>{state === 'loading' ? 'Concluir e revelar' : 'Criar nova versão'}</Button><label>Efeito<select value={imagePreset} onChange={e => setImagePreset(e.target.value as ImageGenerationPreset)}><option value="pixels-organic">Pixels orgânicos</option><option value="pixels-mechanic">Pixels mecânicos</option><option value="sweep-gradient">Varredura em degradê</option></select></label></>}
                        {active === 'activity' && <label>Texto<select value={activityText} onChange={e => setActivityText(e.target.value)}><option>Pensando…</option><option>Analisando sua marca…</option><option>Criando sua imagem…</option><option>Preparando sua legenda…</option></select></label>}
                        {active === 'dialog' && <Button variant="secondary" onClick={() => setModalOpen(true)}>Testar como modal</Button>}
                        <span className="lab-feedback" role="status">{notice}</span>
                    </div>
                </section>
                <div className="lab-component-notes"><div><span>QUANDO USAR</span><p>{current.use}</p></div><div><span>O QUE ENTRA NO COMPONENTE</span><p>{current.includes}</p></div></div>
                <footer className="lab-page-footer">Componentes compartilhados com o Agency. Busca com IA em estudo. Ações simuladas, sem cobrança.</footer>
            </main>
            <AIActionDialog open={modalOpen} onOpenChange={setModalOpen} loading={state === 'loading'} title="Vamos criar uma nova versão?" description="Conte o que quer mudar ou deixe em branco para uma nova ideia.">
                <Textarea aria-label="Instrução para nova versão" value={instruction} onChange={setInstruction} rows={4} placeholder="Ex.: destacar mais o produto…" />
                <div className="lab-widget-footer"><Button variant="secondary" onClick={() => setModalOpen(false)}>Cancelar</Button><Action amount={15}>Criar nova versão</Action></div>
            </AIActionDialog>
        </div>
    </LabContext.Provider>;
}
