import { createContext, useContext } from "react";

export type ShellContextValue = {
    mobileSidebarOpen: boolean;
    setMobileSidebarOpen: (open: boolean) => void;
};

export const ShellContext = createContext<ShellContextValue>({
    mobileSidebarOpen: false,
    setMobileSidebarOpen: () => {},
});

export const useShell = () => useContext(ShellContext);
