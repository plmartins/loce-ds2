import { useState } from "react";
import {
    AppShell,
    Badge,
    Button,
    DataTable,
    HeaderBar,
    PageShell,
    PaginationBar,
    PlatformRail,
    SearchInput,
    Select,
    SidebarNav,
    Switch,
    ThemeToggle,
    type SidebarNavGroup,
} from "loce-ds2";
import {
    IconCatalog,
    IconChevronDown,
    IconDashboard,
    IconEdit,
    IconFinance,
    IconIntegrations,
    IconLogistics,
    IconPeople,
    IconPlus,
    IconPrinter,
    IconProducts,
    IconSales,
    IconSearch,
    IconSettings,
    IconStore,
    IconTasks,
    IconTrash,
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

type DemoProduct = {
    id: number;
    name: string;
    sku: string;
    stock: number;
    price: string;
    reviewed: boolean;
    active: boolean;
};

const DEMO_PRODUCTS: DemoProduct[] = [
    { id: 1, name: "Postiça Infantil Real Love 03 12 unidades", sku: "820589", stock: 0, price: "R$ 10,00", reviewed: true, active: true },
    { id: 2, name: "Esmalte em Gel Dafu M062 10ml", sku: "7806808080625", stock: 0, price: "R$ 14,00", reviewed: false, active: true },
    { id: 3, name: "Top Coat Real Love linha Light 8ml", sku: "0602883749399", stock: 71, price: "R$ 19,90", reviewed: true, active: true },
    { id: 4, name: "Lixa Banana Honey 100/180 Red", sku: "15445", stock: 111, price: "R$ 5,00", reviewed: true, active: false },
    { id: 5, name: "Esfoliante BioSoft Morango 180g", sku: "7896115145537", stock: 8, price: "R$ 26,90", reviewed: false, active: true },
];

function DemoProductsTable() {
    const [rows, setRows] = useState(DEMO_PRODUCTS);
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("newest");
    const [limit, setLimit] = useState("20");

    const toggle = (id: number, key: "reviewed" | "active") =>
        setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [key]: !r[key] } : r)));

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <SearchInput
                    className="max-w-md"
                    placeholder="Nome, SKU, GTIN..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    showClear={!!search}
                    onClear={() => setSearch("")}
                />
                <Select
                    className="w-36 shrink-0"
                    options={[
                        { value: "newest", label: "Mais recente" },
                        { value: "oldest", label: "Mais antigo" },
                    ]}
                    value={order}
                    onChange={setOrder}
                />
                <Select
                    className="w-36 shrink-0"
                    options={[
                        { value: "20", label: "20 por página" },
                        { value: "50", label: "50 por página" },
                    ]}
                    value={limit}
                    onChange={setLimit}
                />
            </div>
            <DataTable
                data={rows}
                rowKey={(row) => row.id}
                onRowClick={() => {}}
                columns={[
                    {
                        header: "", accessor: "id", className: "w-12 pr-0", sortable: false,
                        render: () => (
                            <span className="flex size-[34px] items-center justify-center rounded-lg bg-surface-2 ring-1 ring-border text-muted-foreground">
                                <IconProducts size={16} />
                            </span>
                        ),
                    },
                    { header: "Nome", accessor: "name", render: (v) => <span className="font-semibold">{v}</span> },
                    { header: "1° SKU", accessor: "sku", className: "w-44", render: (v) => <span className="text-muted-foreground tabular-nums">{v}</span> },
                    {
                        header: "Estoque", accessor: "stock", className: "w-28",
                        render: (v) => <Badge variant={v > 0 ? "success" : "destructive"}>{v > 0 ? `${v} disp.` : "Sem estoque"}</Badge>,
                    },
                    { header: "Preço", accessor: "price", className: "w-28", render: (v) => <span className="font-semibold tabular-nums">{v}</span> },
                    {
                        header: "Revisado", accessor: "reviewed", className: "w-24", sortable: false,
                        render: (v, row) => (
                            <span onClick={(e) => e.stopPropagation()} className="inline-flex">
                                <Switch checked={v} onCheckedChange={() => toggle(row.id, "reviewed")} />
                            </span>
                        ),
                    },
                    {
                        header: "Ativo", accessor: "active", className: "w-20", sortable: false,
                        render: (v, row) => (
                            <span onClick={(e) => e.stopPropagation()} className="inline-flex">
                                <Switch checked={v} onCheckedChange={() => toggle(row.id, "active")} />
                            </span>
                        ),
                    },
                ]}
                mainActions={[
                    { label: "Imprimir etiqueta", icon: <IconPrinter size={16} />, onClick: () => {} },
                    { label: "Editar", icon: <IconEdit size={16} />, onClick: () => {} },
                ]}
                actions={[
                    { label: "Editar", icon: <IconEdit size={15} />, onClick: () => {} },
                    { label: "Excluir", icon: <IconTrash size={15} />, onClick: () => {}, color: "text-destructive" },
                ]}
            />
            <PaginationBar currentPage={1} perPage={20} totalResults={87} totalPages={5} action={() => {}} />
        </div>
    );
}

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
                            { id: "tickets", available: true, href: "#" },
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
                        <>
                            <Button variant="secondary">Atualizar fiscais por NCM</Button>
                            <Button>
                                <IconPlus size={15} />
                                Criar
                            </Button>
                        </>
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
                    <DemoProductsTable />
                </PageShell>
            </AppShell>
        </div>
    );
}
