import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement as h } from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';
import { AIButton, AICost, AIMediaPreview, AISurface } from '../dist/index.js';

test('missing price never becomes free or an actionable ready quote', () => {
    const cost = render(h(AICost, { state: 'ready' }));
    assert.match(cost, /Consultando custo/);
    assert.doesNotMatch(cost, /Grátis|0 créditos/);
    const button = render(h(AIButton, { costState: 'ready' }, 'Gerar'));
    assert.match(button, /<button[^>]*disabled/);
    assert.doesNotMatch(button, /data-beam=/);
});
test('loading blocks another action and keeps both labels reserved', () => {
    const button = render(h(AIButton, { loading: true, credits: 3 }, 'Regerar'));
    assert.match(button, /<button[^>]*disabled[^>]*aria-busy="true"/);
    assert.match(button, /Regerar/);
    assert.match(button, /Gerando…/);
    assert.match(button, /3 créditos/);
});
test('existing ready media does not mount an invisible animation or hide its result', () => {
    const html = render(h(AIMediaPreview, { state: 'ready' }, h('img', { src: '/result.png', alt: 'Arte' })));
    assert.doesNotMatch(html, /data-beam=|visibility:hidden|ds-ai-media-overlay/);
    assert.match(html, /alt="Arte"/);
});
test('a neutral composer surface keeps its content without an AI effect', () => {
    const html = render(h(AISurface, { effect: false }, h('textarea', { 'aria-label': 'Instrução' })));
    assert.doesNotMatch(html, /data-beam=/);
    assert.match(html, /aria-label="Instrução"/);
});
