import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { AICard, AIIcon } from '../dist/index.js';

test('card keeps its accessible content and action; the effect is decorative', () => {
    const html = renderToStaticMarkup(h(AICard, {
        tone: 'dark', 'aria-label': 'Saldo',
    }, h('strong', null, '3.000 créditos'), h('button', { disabled: true }, 'Comprar')));
    assert.match(html, /<article[^>]*aria-label="Saldo"/);
    assert.match(html, /data-tone="dark"/);
    assert.match(html, /3.000 créditos/);
    assert.match(html, /<button disabled="">Comprar<\/button>/);
    assert.equal((html.match(/<button/g) ?? []).length, 1);
    assert.match(html, /<div[^>]*data-beam=/);
    assert.doesNotMatch(html, /<article[^>]*aria-hidden/);
    assert.match(html, /prefers-reduced-motion: reduce/);
});

test('static card does not mount any beam or animation stylesheet', () => {
    const html = renderToStaticMarkup(h(AICard, { as: 'section', animated: false, 'aria-label': 'Saldo' }, h('span', null, 'AI')));
    assert.doesNotMatch(html, /data-beam=|<style/);
    assert.match(html, /<section[^>]*aria-label="Saldo"/);
});

test('AI glyphs have distinct gradient IDs and inherit the host palette', () => {
    const html = renderToStaticMarkup(h('div', null, h(AIIcon), h(AIIcon)));
    const ids = [...html.matchAll(/<linearGradient id="([^"]+)"/g)].map(match => match[1]);
    assert.equal(ids.length, 2);
    assert.notEqual(ids[0], ids[1]);
    for (const id of ids) assert.ok(html.includes(`url(#${id})`));
    // Cores por plataforma: as nove paradas vêm de --ai-icon-1..9 (ai.css).
    assert.match(html, /stop-color="var\(--ai-icon-1\)"/);
    assert.match(html, /stop-color="var\(--ai-icon-9\)"/);
});

// Preserve the material from the creator preview; a generic conic background
// destroys its localized radial lights even when the spin animation still runs.
test('uses the native glow layers, rotation speed and hairline border', () => {
    const html = renderToStaticMarkup(h(AICard, { tone: 'dark' }, 'Saldo'));
    assert.match(html, /radial-gradient/);
    assert.match(html, /1\.96s linear infinite/);
    assert.match(html, /padding: 1px/);
    assert.doesNotMatch(html, /padding: 2px/);
    assert.doesNotMatch(html, /background: conic-gradient\(from var\(--beam-angle/);
});
