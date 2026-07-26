import { useState, type ReactNode } from "react";
import { ShellContext } from "./shell-context";
import { cn } from "../lib/utils";

export type AppShellProps = {
    /** PlatformRail (coluna de plataformas). Escondido no mobile. */
    rail?: ReactNode;
    /** SidebarNav. No mobile vira overlay controlado pelo botão do HeaderBar. */
    sidebar?: ReactNode;
    /** Versão do sidebar renderizada no overlay mobile (normalmente com expanded). */
    mobileSidebar?: ReactNode;
    header?: ReactNode;
    children: ReactNode;
    className?: string;
};

export function AppShell({ rail, sidebar, mobileSidebar, header, children, className }: AppShellProps) {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <ShellContext.Provider value={{ mobileSidebarOpen, setMobileSidebarOpen }}>
            <div className={cn("flex h-screen overflow-hidden bg-background text-foreground", className)}>
                {rail && <div className="hidden md:flex shrink-0">{rail}</div>}
                {sidebar && <div className="hidden md:flex shrink-0 min-h-0">{sidebar}</div>}

                {mobileSidebarOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] md:hidden"
                            onClick={() => setMobileSidebarOpen(false)}
                        />
                        <div className="fixed left-0 top-0 bottom-0 z-50 flex md:hidden bg-background shadow-2xl">
                            {mobileSidebar ?? sidebar}
                        </div>
                    </>
                )}

                <div className="flex flex-1 min-w-0 flex-col min-h-0">
                    {header}
                    <main className="flex-1 min-w-0 min-h-0 flex flex-col overflow-auto">{children}</main>
                </div>
            </div>
        </ShellContext.Provider>
    );
}
