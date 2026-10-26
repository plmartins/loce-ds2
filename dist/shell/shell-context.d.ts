import * as react from 'react';

type ShellContextValue = {
    mobileSidebarOpen: boolean;
    setMobileSidebarOpen: (open: boolean) => void;
};
declare const ShellContext: react.Context<ShellContextValue>;
declare const useShell: () => ShellContextValue;

export { ShellContext, type ShellContextValue, useShell };
