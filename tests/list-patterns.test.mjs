import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SearchInput, TableLoading, TableHeading, StatStrip, WidgetCard, RankList, ErrorState, formatShare } from '../dist/index.js';

const noop = () => {};
const render = (type, props, ...children) => renderToStaticMarkup(createElement(type, props, ...children));

test('SearchInput: X de limpar aparece com texto + onClear, nunca o chip "Limpar"', () => {
    const empty = render(SearchInput, { value: '', onChange: noop, onClear: noop });
    const filled = render(SearchInput, { value: 'Maria', onChange: noop, onClear: noop });
    const noClear = render(SearchInput, { value: 'Maria', onChange: noop });
    const forced = render(SearchInput, { value: '', onChange: noop, onClear: noop, showClear: true });
    assert.doesNotMatch(empty, /<button/);
    assert.match(filled, /<button[^>]*aria-label="Limpar busca"/);
    assert.doesNotMatch(filled, />Limpar</, 'sem chip de texto');
    assert.doesNotMatch(noClear, /<button/);
    assert.match(forced, /<button/);
});

test('TableLoading: esqueleto enquanto carrega, filhos depois', () => {
    const loading = render(TableLoading, { loading: true, rows: 3 }, createElement('table', null));
    const ready = render(TableLoading, { loading: false }, createElement('table', null));
    assert.match(loading, /ds-skeleton/);
    assert.doesNotMatch(loading, /<table/);
    assert.match(ready, /<table/);
    assert.doesNotMatch(ready, /ds-skeleton/);
});

test('TableHeading: título e controle; hint vai pro tooltip, não pro texto', () => {
    const html = render(TableHeading, { title: 'Produtos', hint: 'Explicação longa', right: createElement('b', null, 'ctrl') });
    assert.match(html, />Produtos</);
    assert.match(html, /<b>ctrl<\/b>/);
    assert.doesNotMatch(html, />Explicação longa</);
});

test('StatStrip: célula com onClick vira botão; loading troca o valor por esqueleto', () => {
    const items = [
        { key: 'a', label: 'Receita', value: 'R$ 1.000', onClick: noop },
        { key: 'b', label: 'Pedidos', value: '12', delta: { label: '+3%', tone: 'positive' } },
    ];
    const html = render(StatStrip, { items, columns: 4 });
    assert.equal((html.match(/<button/g) ?? []).length, 1);
    assert.match(html, /\+3%/);
    const loading = render(StatStrip, { items, loading: true });
    assert.match(loading, /ds-skeleton/);
    assert.doesNotMatch(loading, /R\$ 1\.000/);
});

test('WidgetCard: right em string vira número do período', () => {
    const html = render(WidgetCard, { title: 'Canais', right: 'R$ 50', rightHint: 'No período' }, 'corpo');
    assert.match(html, /<h3[^>]*>Canais<\/h3>/);
    assert.match(html, /R\$ 50/);
    assert.match(html, /No período/);
});

test('RankList: share abaixo de 1% vira "<1%"; split desenha dois segmentos e os chips', () => {
    assert.equal(formatShare(0.004), '<1%');
    assert.equal(formatShare(0.42), '42%');
    assert.equal(formatShare(0), '0%');
    const items = [
        { key: 'a', label: 'Loja', value: 'R$ 100', ratio: 1, share: 0.5, split: { primary: 90, secondary: 10, primaryLabel: 'Produtos R$ 90', secondaryLabel: 'Frete R$ 10' } },
        { key: 'b', label: 'App', value: 'R$ 50', ratio: 0.5, share: 0.004 },
    ];
    const html = render(RankList, { items, showRank: true });
    assert.match(html, /Produtos R\$ 90/);
    assert.match(html, /\+ Frete R\$ 10/);
    assert.match(html, /bg-teal-500/);
    assert.match(html, /&lt;1%/);
    const empty = render(RankList, { items: [], emptyText: 'Nada' });
    assert.match(empty, />Nada</);
});

test('ErrorState: botão de tentar de novo só com onRetry', () => {
    assert.doesNotMatch(render(ErrorState, {}), /<button/);
    assert.match(render(ErrorState, { onRetry: noop }), /Tentar de novo/);
});
