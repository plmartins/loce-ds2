import * as react from 'react';
import { FilterStateProps } from '../lib/filter.js';
import { DateRange } from 'react-day-picker';
export { DateRange } from 'react-day-picker';

/** Atalho de período exibido dentro do popover, acima do calendário. */
type DateRangePreset = {
    key: string;
    label: string;
};
type DateRangePickerProps = FilterStateProps & {
    label?: string;
    /** Intervalo completo (from e to). Parciais nunca vazam pelo onChange. */
    value?: DateRange;
    onChange?: (range: DateRange | undefined) => void;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    clearable?: boolean;
    className?: string;
    minDate?: Date;
    maxDate?: Date;
    /** Meses lado a lado no popover (2 = estilo reserva de hotel, padrão). */
    numberOfMonths?: 1 | 2;
    /** Abre o calendário já na montagem (ex.: logo após escolher "Personalizado"). */
    defaultOpen?: boolean;
    /**
     * Atalhos de período no popover (Hoje, Últimos 7 dias...). Quem resolve o
     * range do atalho é o consumidor, no onPresetSelect; o popover só fecha.
     * Com presets, o controle vira o filtro de período completo da tela: um
     * botão só, sem reflow na barra de filtros.
     */
    presets?: DateRangePreset[];
    /** Atalho ativo (pinta o chip). Ignorado sem `presets`. */
    activePresetKey?: string;
    /** Texto do gatilho quando um atalho está ativo (ex.: "Hoje"). */
    displayLabel?: string;
    onPresetSelect?: (preset: DateRangePreset) => void;
};
/**
 * Seletor de período num único controle: abre um calendário só, o primeiro
 * clique marca o início e o segundo o fim (clicar duas vezes no mesmo dia =
 * período de um dia). Enquanto o intervalo não fecha, a seleção fica interna;
 * o onChange só dispara com o período completo, e fechar no meio do caminho
 * reverte para o valor anterior.
 */
declare function DateRangePicker({ label, value, onChange, placeholder, error, disabled, clearable, className, filterActive, minDate, maxDate, numberOfMonths, defaultOpen, presets, activePresetKey, displayLabel, onPresetSelect, }: DateRangePickerProps): react.JSX.Element;

export { DateRangePicker, type DateRangePickerProps, type DateRangePreset };
