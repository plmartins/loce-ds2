import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Input, SearchInput, Select, NativeSelect, ComboBox, DatePicker, DateRangePicker, isFilterActive } from '../dist/index.js';

const date = new Date(2026, 8, 16);
const noop = () => {};
const cases = [
    ['Input', Input, { value: '1234', onChange: noop }],
    ['SearchInput', SearchInput, { value: 'Maria', onChange: noop, placeholder: 'Cliente' }],
    ['Select', Select, { value: 'active', options: [{ value: 'all', label: 'Todos' }, { value: 'active', label: 'Ativos' }] }],
    ['NativeSelect', NativeSelect, { value: 'active', onChange: noop, options: [{ value: 'active', label: 'Ativos' }] }],
    ['ComboBox', ComboBox, { value: { value: '1', label: 'Maria' }, options: [], onChange: noop }],
    ['DatePicker', DatePicker, { value: date }],
    ['DateRangePicker', DateRangePicker, { value: { from: date, to: date }, displayLabel: 'Hoje' }],
];
for (const [name, Component, props] of cases) {
    test(`${name}: filled form fields stay neutral; opt-in marks the control itself`, () => {
        const plain = renderToStaticMarkup(createElement(Component, props));
        const active = renderToStaticMarkup(createElement(Component, { ...props, filterActive: true }));
        assert.doesNotMatch(plain, /data-filter-active/);
        assert.match(active, /<(?:input|select|button)[^>]*data-filter-active="true"/);
        assert.doesNotMatch(active, /filterActive=/, 'does not leak React-only props to DOM');
        assert.equal((plain.match(/<input|<select|<button/g) ?? []).length, (active.match(/<input|<select|<button/g) ?? []).length, 'does not add a toolbar or extra control');
    });
}
test('neutral values are distinct from boolean false and numeric zero', () => {
    for (const value of [undefined, null, '', 'all']) assert.equal(isFilterActive(value), false);
    for (const value of [false, 0, 'false', 'active', 'Maria']) assert.equal(isFilterActive(value), true);
});
test('search and date filters announce applied state without relying on color', () => {
    assert.match(renderToStaticMarkup(createElement(SearchInput, { filterActive: true, placeholder: 'Cliente' })), /aria-label="Cliente — filtro ativo"/);
    assert.match(renderToStaticMarkup(createElement(DateRangePicker, { filterActive: true, value: { from: date, to: date }, displayLabel: 'Hoje' })), /aria-label="Período: Hoje — filtro ativo"/);
});
test('filter styling does not mask validation errors', () => {
    assert.match(renderToStaticMarkup(createElement(Input, { filterActive: true, error: 'Inválido' })), /aria-invalid="true"/);
});
