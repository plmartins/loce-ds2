import { useState } from "react";
import {
    AppShell,
    HeaderBar,
    PageShell,
    PlatformRail,
    SidebarNav,
    ThemeToggle,
    cn,
    type SidebarNavGroup,
} from "loce-ds2";
import {
    IconCatalog,
    IconChevronDown,
    IconDashboard,
    IconFinance,
    IconIntegrations,
    IconLogistics,
    IconPeople,
    IconPlus,
    IconSales,
    IconSearch,
    IconSettings,
    IconStore,
    IconTasks,
} from "loce-ds2/icons";

const MENU: SidebarNavGroup[] = [
    { icon: IconDashboard, label: "Dashboard", subItems: [{ label: "Visão geral", endPoint: "/app/dashboard" }, { label: "Comissões", endPoint: "/app/comissoes" }] },
    { icon: IconCatalog, label: "Catálogo", subItems: [{ label: "Produtos", endPoint: "/app/produtos" }, { label: "Categorias", endPoint: "/app/categorias" }, { label: "Marcas", endPoint: "/app/marcas" }, { label: "Tabela de preços", endPoint: "/app/tabela-de-precos" }, { label: "Notas de entrada", endPoint: "/app/notas-de-entrada" }, { label: "Etiquetas", endPoint: "/app/etiquetas" }] },
    { icon: IconSales, label: "Vendas", subItems: [{ label: "Vendas", endPoint: "/app/vendas" }, { label: "Agenda de promoção", endPoint: "/app/promocoes" }, { label: "Comunicados", endPoint: "/app/comunicados" }] },
    { icon: IconLogistics, label: "Logística", subItems: [{ label: "Transferências entre lojas", endPoint: "/app/transferencia" }, { label: "Métodos de envio", endPoint: "/app/metodos-de-envio" }] },
    { icon: IconPeople, label: "Pessoas", subItems: [{ label: "Clientes", endPoint: "/app/clientes" }, { label: "Fornecedores", endPoint: "/app/fornecedores" }, { label: "Usuários", endPoint: "/app/usuarios" }] },
    { icon: IconFinance, label: "Financeiro", subItems: [{ label: "Caixas", endPoint: "/app/caixas" }, { label: "Contas a Pagar", endPoint: "/app/contas-a-pagar" }, { label: "Contas a Receber", endPoint: "/app/contas-a-receber" }, { label: "Formas de pagamento", endPoint: "/app/formas-de-pagamento" }] },
    { icon: IconTasks, label: "Tarefas", subItems: [{ label: "Minhas tarefas", endPoint: "/app/tarefas" }] },
    { icon: IconIntegrations, label: "Integrações", subItems: [{ label: "Todas as integrações", endPoint: "/app/integracoes-pagamento" }] },
    { icon: IconSettings, label: "Configurações", subItems: [{ label: "Empresa", endPoint: "/app/empresa" }, { label: "Natureza de Operação", endPoint: "/app/natureza-operacao" }, { label: "Estações de PDV", endPoint: "/app/estacoes" }] },
];

export function ShellDemo() {
    const [path, setPath] = useState("/app/produtos");
    const page = MENU.flatMap((g) => g.subItems).find((s) => path.startsWith(s.endPoint));

    return (
        <div className="h-screen">
            <AppShell
                rail={
                    <PlatformRail
                        platforms={[
                            { id: "erp", active: true, available: true },
                            { id: "ecommerce", available: true, href: "#" },
                            { id: "marketing" },
                            { id: "talkbia" },
                        ]}
                        footer={<ThemeToggle />}
                    />
                }
                sidebar={<SidebarNav items={MENU} activePath={path} onNavigate={setPath} storageKey="ds2-showcase-pinned" />}
                mobileSidebar={<SidebarNav items={MENU} activePath={path} onNavigate={setPath} expanded storageKey="ds2-showcase-pinned" />}
                header={
                    <HeaderBar
                        left={
                            <button className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 text-[13px] font-semibold hover:bg-foreground/[0.04]">
                                <IconStore size={16} className="text-brand" />
                                Loja Centro
                                <IconChevronDown size={12} className="text-muted-foreground" />
                            </button>
                        }
                        right={
                            <>
                                <button className="hidden h-8 cursor-pointer items-center gap-2 rounded-lg border border-border px-3 text-[13px] text-muted-foreground hover:bg-foreground/[0.03] md:flex">
                                    <IconSearch size={14} />
                                    Buscar
                                    <kbd className="rounded bg-surface-2 px-1.5 py-0.5 text-[10px] font-semibold">⌘K</kbd>
                                </button>
                                <span className="flex size-8 items-center justify-center rounded-full bg-brand/15 text-[12px] font-bold text-brand">PM</span>
                            </>
                        }
                    />
                }
            >
                <PageShell
                    title={page?.label ?? "Página"}
                    description={`Preview do shell navegando em ${path}`}
                    actions={
                        <button className="flex h-9 cursor-pointer items-center gap-1.5 rounded-xl bg-brand px-4 text-[13px] font-semibold text-white hover:opacity-90">
                            <IconPlus size={15} />
                            Novo
                        </button>
                    }
                >
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {["Hoje", "Últimos 7 dias", "Este mês"].map((label, i) => (
                            <div key={label} className="rounded-2xl border border-border bg-card p-4">
                                <p className="text-[12px] font-medium text-muted-foreground">{label}</p>
                                <p className="mt-1 text-xl font-bold">{["R$ 4.231", "R$ 28.940", "R$ 103.220"][i]}</p>
                                <p className="mt-0.5 text-[12px] font-semibold text-success">+{[8, 12, 23][i]}% vs anterior</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 rounded-2xl border border-border bg-card p-4">
                        <div className="mb-3 flex items-center justify-between">
                            <p className="text-[13px] font-semibold">Conteúdo da página</p>
                            <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-muted-foreground">placeholder</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className={cn("h-9 rounded-lg", i % 2 === 0 ? "bg-surface-2/70" : "bg-surface-2/30")} />
                            ))}
                        </div>
                    </div>
                </PageShell>
            </AppShell>
        </div>
    );
}
