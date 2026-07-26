import { useState } from "react";
import { cn } from "loce-ds2";
import * as Icons from "loce-ds2/icons";
import type { IconProps } from "loce-ds2/icons";

const PLATFORMS = [
    { id: "erp", label: "ERP" },
    { id: "ecommerce", label: "Ecommerce" },
    { id: "marketing", label: "Marketing" },
    { id: "talkbia", label: "Talkbia" },
] as const;

const SWATCHES: [string, string][] = [
    ["background", "bg-background"],
    ["card", "bg-card"],
    ["surface-1", "bg-surface-1"],
    ["surface-2", "bg-surface-2"],
    ["surface-3", "bg-surface-3"],
    ["muted", "bg-muted"],
    ["border", "bg-border"],
    ["brand", "bg-brand"],
    ["destructive", "bg-destructive"],
    ["success", "bg-success"],
    ["warning", "bg-warning"],
    ["info", "bg-info"],
];

export default function App() {
    const [platform, setPlatform] = useState("erp");
    const [dark, setDark] = useState(true);

    const setTheme = (p: string, d: boolean) => {
        document.documentElement.dataset.platform = p;
        document.documentElement.classList.toggle("dark", d);
        setPlatform(p);
        setDark(d);
    };

    const iconEntries = Object.entries(Icons).filter(
        (entry): entry is [string, (props: IconProps) => React.ReactNode] => entry[0].startsWith("Icon")
    );

    return (
        <div className="min-h-screen bg-background text-foreground font-dm p-8">
            <div className="mx-auto max-w-4xl flex flex-col gap-10">
                <header className="flex flex-wrap items-center gap-3">
                    <h1 className="text-xl font-bold mr-auto">loce-ds2</h1>
                    <div className="flex gap-1 rounded-lg border border-border p-1">
                        {PLATFORMS.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => setTheme(p.id, dark)}
                                className={cn(
                                    "px-3 py-1 rounded-md text-sm cursor-pointer",
                                    platform === p.id ? "bg-brand text-white font-semibold" : "text-muted-foreground hover:bg-surface-2"
                                )}
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setTheme(platform, !dark)}
                        className="px-3 py-1 rounded-md border border-border text-sm cursor-pointer hover:bg-surface-2"
                    >
                        {dark ? "Light" : "Dark"}
                    </button>
                </header>

                <section className="flex flex-col gap-3">
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Tokens</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {SWATCHES.map(([name, bgClass]) => (
                            <div key={name} className="flex flex-col gap-1">
                                <div className={cn("h-12 rounded-lg border border-border", bgClass)} />
                                <span className="text-[11px] text-muted-foreground">{name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                        <span className="size-3 rounded-full bg-brand" />
                        <p className="text-sm">
                            Acento ativo da plataforma <b className="text-brand">{platform}</b>, com o secundário em{" "}
                            <b className="text-brand-sec">brand-sec</b>.
                        </p>
                        <button className="ml-auto rounded-lg bg-brand px-4 py-1.5 text-sm font-semibold text-white cursor-pointer hover:opacity-90">
                            Botão
                        </button>
                    </div>
                </section>

                <section className="flex flex-col gap-3">
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        Ícones ({iconEntries.length}) · Phosphor Fill
                    </h2>
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                        {iconEntries.map(([name, Icon]) => (
                            <div
                                key={name}
                                title={name}
                                className="flex flex-col items-center gap-1.5 rounded-lg border border-border bg-card p-3"
                            >
                                <Icon size={22} className={name === "IconSpinner" ? "animate-spin" : undefined} />
                                <span className="w-full truncate text-center text-[10px] text-muted-foreground">
                                    {name.replace(/^Icon/, "")}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col gap-3">
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Rail (preview)</h2>
                    <div className="flex gap-2">
                        {PLATFORMS.map((p) => (
                            <div
                                key={p.id}
                                className={cn(
                                    "flex size-11 items-center justify-center rounded-xl border",
                                    platform === p.id ? "border-brand bg-brand/15 text-brand" : "border-border bg-card text-muted-foreground",
                                    (p.id === "marketing" || p.id === "talkbia") && "opacity-40"
                                )}
                                title={p.id === "marketing" || p.id === "talkbia" ? `${p.label} (em breve)` : p.label}
                            >
                                {p.id === "erp" && <Icons.IconDashboard size={20} className="text-platform-erp" />}
                                {p.id === "ecommerce" && <Icons.IconCart size={20} className="text-platform-ecommerce" />}
                                {p.id === "marketing" && <Icons.IconLock size={20} />}
                                {p.id === "talkbia" && <Icons.IconLock size={20} />}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
