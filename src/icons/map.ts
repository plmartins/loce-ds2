/*
 * ÚNICO arquivo que importa a biblioteca de ícones.
 * Trocar de família (ex.: Phosphor -> outra) = reescrever só este arquivo.
 *
 * Convenção de nomes:
 *  - Semânticos para domínio/navegação: IconProducts, IconSales, IconCashRegister...
 *  - Literais para ações genéricas: IconPlus, IconTrash, IconSearch...
 * Peso: "fill" como padrão da suíte; glifos de traço (plus, x, setas, busca) usam "bold".
 */
import {
    ArrowCircleDown,
    ArrowCircleUp,
    ArrowCounterClockwise,
    ArrowDown,
    ArrowDownLeft,
    ArrowFatDown,
    ArrowFatUp,
    ArrowLeft,
    ArrowRight,
    ArrowSquareOut,
    ArrowsClockwise,
    ArrowsLeftRight,
    ArrowUp,
    ArrowUpRight,
    ArrowUUpLeft,
    ArrowUUpRight,
    ArrowsOutCardinal,
    Barcode,
    Crop,
    Image,
    MagnifyingGlassPlus,
    BellRinging,
    BellSlash,
    Buildings,
    CalendarBlank,
    CaretDown,
    ClockCounterClockwise,
    Clock,
    Command,
    CurrencyDollar,
    CursorClick,
    DiceFive,
    DownloadSimple,
    FacebookLogo,
    FileArrowUp,
    FileMagnifyingGlass,
    Hand,
    HandGrabbing,
    Hash,
    Images,
    Lightning,
    ListChecks,
    MagicWand,
    Minus,
    MinusCircle,
    Mouse,
    Note,
    NotePencil,
    PaperPlaneTilt,
    PlusCircle,
    Plugs,
    Power,
    Question,
    Robot,
    Scales,
    SealCheck,
    ShieldSlash,
    ShieldWarning,
    Stack,
    Star,
    TestTube,
    TextAlignCenter,
    TextAlignLeft,
    TextAlignRight,
    Ticket,
    User,
    UserGear,
    UserMinus,
    CaretLeft,
    CaretRight,
    CaretUp,
    CaretUpDown,
    ChartBar,
    ChatCircleDots,
    Check,
    CheckCircle,
    ClipboardText,
    Coins,
    Copy,
    CreditCard,
    Cube,
    CurrencyCircleDollar,
    DotsThree,
    EnvelopeSimple,
    Eye,
    EyeSlash,
    FileText,
    FloppyDisk,
    Gauge,
    GearSix,
    Gift,
    Globe,
    HandCoins,
    Info,
    Key,
    LinkSimple,
    List,
    Lock,
    MagnifyingGlass,
    MapPin,
    Megaphone,
    Moon,
    Moped,
    PencilSimple,
    Percent,
    Phone,
    Plus,
    PushPin,
    PlugsConnected,
    Printer,
    Prohibit,
    QrCode,
    Receipt,
    SealPercent,
    ShieldCheck,
    ShoppingBag,
    ShoppingCart,
    SignOut,
    SlidersHorizontal,
    Sparkle,
    Spinner,
    StackPlus,
    SquaresFour,
    Storefront,
    Sun,
    TrendDown,
    TrendUp,
    Tag,
    Trash,
    Truck,
    UploadSimple,
    UserCircle,
    Users,
    Vault,
    Wallet,
    Warning,
    WarningCircle,
    X,
    XCircle,
    BracketsCurly, Broadcast, CalendarDots, Circle, CircleDashed, Clover, Crown, DeviceMobile, Fire, House, ImageBroken, Lightbulb, Monitor, MusicNote, PaintBrush, Palette, Pause, Play, Plug, Pulse, Rocket, ShareNetwork, Target, Timer, Trophy, UserPlus,
} from "@phosphor-icons/react";
import { createIcon } from "./create-icon";

/* ─── Navegação / menu ─── */
export const IconDashboard = /*#__PURE__*/ createIcon(Gauge);
export const IconCatalog = /*#__PURE__*/ createIcon(Cube);
export const IconSales = /*#__PURE__*/ createIcon(ShoppingBag);
export const IconLogistics = /*#__PURE__*/ createIcon(ArrowsLeftRight, "bold");
export const IconPeople = /*#__PURE__*/ createIcon(Users);
export const IconFinance = /*#__PURE__*/ createIcon(CurrencyCircleDollar);
export const IconTasks = /*#__PURE__*/ createIcon(ClipboardText);
export const IconIntegrations = /*#__PURE__*/ createIcon(PlugsConnected);
export const IconSettings = /*#__PURE__*/ createIcon(GearSix);

/* ─── Domínio ─── */
export const IconProducts = /*#__PURE__*/ createIcon(Cube);
export const IconClients = /*#__PURE__*/ createIcon(UserCircle);
export const IconSupplier = /*#__PURE__*/ createIcon(Truck);
export const IconCourier = /*#__PURE__*/ createIcon(Moped);
export const IconStore = /*#__PURE__*/ createIcon(Storefront);
export const IconCompany = /*#__PURE__*/ createIcon(Buildings);
export const IconWallet = /*#__PURE__*/ createIcon(Wallet);
export const IconMoney = /*#__PURE__*/ createIcon(Coins);
export const IconCard = /*#__PURE__*/ createIcon(CreditCard);
export const IconCommission = /*#__PURE__*/ createIcon(HandCoins);
export const IconVault = /*#__PURE__*/ createIcon(Vault);
export const IconTag = /*#__PURE__*/ createIcon(Tag);
export const IconPromotion = /*#__PURE__*/ createIcon(SealPercent);
export const IconInvoice = /*#__PURE__*/ createIcon(FileText);
export const IconReceipt = /*#__PURE__*/ createIcon(Receipt);
export const IconPrinter = /*#__PURE__*/ createIcon(Printer);
export const IconQrCode = /*#__PURE__*/ createIcon(QrCode);
export const IconCart = /*#__PURE__*/ createIcon(ShoppingCart);
export const IconAddress = /*#__PURE__*/ createIcon(MapPin);
export const IconGift = /*#__PURE__*/ createIcon(Gift);
export const IconNotification = /*#__PURE__*/ createIcon(BellRinging);
export const IconMail = /*#__PURE__*/ createIcon(EnvelopeSimple);
export const IconPhone = /*#__PURE__*/ createIcon(Phone);
export const IconLink = /*#__PURE__*/ createIcon(LinkSimple, "bold");
export const IconGlobe = /*#__PURE__*/ createIcon(Globe);
export const IconShield = /*#__PURE__*/ createIcon(ShieldCheck);
export const IconKey = /*#__PURE__*/ createIcon(Key);
export const IconLock = /*#__PURE__*/ createIcon(Lock);
export const IconAI = /*#__PURE__*/ createIcon(Sparkle);

/* ─── Ações ─── */
export const IconPlus = /*#__PURE__*/ createIcon(Plus, "bold");
export const IconClose = /*#__PURE__*/ createIcon(X, "bold");
export const IconTrash = /*#__PURE__*/ createIcon(Trash);
export const IconEdit = /*#__PURE__*/ createIcon(PencilSimple);
export const IconCheck = /*#__PURE__*/ createIcon(Check, "bold");
export const IconSearch = /*#__PURE__*/ createIcon(MagnifyingGlass, "bold");
export const IconCopy = /*#__PURE__*/ createIcon(Copy);
export const IconSave = /*#__PURE__*/ createIcon(FloppyDisk);
export const IconEye = /*#__PURE__*/ createIcon(Eye);
export const IconEyeOff = /*#__PURE__*/ createIcon(EyeSlash);
export const IconRefresh = /*#__PURE__*/ createIcon(ArrowsClockwise, "bold");
export const IconUpload = /*#__PURE__*/ createIcon(UploadSimple, "bold");
export const IconUndo = /*#__PURE__*/ createIcon(ArrowUUpLeft, "bold");
export const IconArrowLeft = /*#__PURE__*/ createIcon(ArrowLeft, "bold");
export const IconArrowRight = /*#__PURE__*/ createIcon(ArrowRight, "bold");
export const IconArrowUp = /*#__PURE__*/ createIcon(ArrowUp, "bold");
export const IconArrowDown = /*#__PURE__*/ createIcon(ArrowDown, "bold");
export const IconMinus = /*#__PURE__*/ createIcon(Minus, "bold");
export const IconDownload = /*#__PURE__*/ createIcon(DownloadSimple, "bold");
export const IconExternal = /*#__PURE__*/ createIcon(ArrowSquareOut, "bold");
export const IconFilters = /*#__PURE__*/ createIcon(SlidersHorizontal, "bold");
export const IconChevronDown = /*#__PURE__*/ createIcon(CaretDown, "bold");
export const IconSort = /*#__PURE__*/ createIcon(CaretUpDown, "bold");
export const IconMore = /*#__PURE__*/ createIcon(DotsThree, "bold");
export const IconChevronUp = /*#__PURE__*/ createIcon(CaretUp, "bold");
export const IconChevronLeft = /*#__PURE__*/ createIcon(CaretLeft, "bold");
export const IconChevronRight = /*#__PURE__*/ createIcon(CaretRight, "bold");

/* ─── Shell / suíte ─── */
export const IconApps = /*#__PURE__*/ createIcon(SquaresFour);
export const IconMarketing = /*#__PURE__*/ createIcon(Megaphone);
export const IconChat = /*#__PURE__*/ createIcon(ChatCircleDots);
export const IconPin = /*#__PURE__*/ createIcon(PushPin);
export const IconMenu = /*#__PURE__*/ createIcon(List, "bold");
export const IconMoon = /*#__PURE__*/ createIcon(Moon);
export const IconSun = /*#__PURE__*/ createIcon(Sun);
export const IconLogout = /*#__PURE__*/ createIcon(SignOut, "bold");

/* ─── Métricas e estoque ─── */
export const IconChart = /*#__PURE__*/ createIcon(ChartBar);
export const IconPercent = /*#__PURE__*/ createIcon(Percent, "bold");
export const IconTrendUp = /*#__PURE__*/ createIcon(TrendUp, "bold");
export const IconTrendDown = /*#__PURE__*/ createIcon(TrendDown, "bold");
export const IconStockAdd = /*#__PURE__*/ createIcon(StackPlus);
export const IconBalance = /*#__PURE__*/ createIcon(Scales);
export const IconCalendar = /*#__PURE__*/ createIcon(CalendarBlank);
export const IconBarcode = /*#__PURE__*/ createIcon(Barcode);
export const IconHistory = /*#__PURE__*/ createIcon(ClockCounterClockwise, "bold");
export const IconCursorClick = /*#__PURE__*/ createIcon(CursorClick);
export const IconMouse = /*#__PURE__*/ createIcon(Mouse);
export const IconHandGrab = /*#__PURE__*/ createIcon(HandGrabbing);

/* ─── Complementos da migração (nomes semânticos por uso no ERP) ─── */
export const IconClock = /*#__PURE__*/ createIcon(Clock);
export const IconStar = /*#__PURE__*/ createIcon(Star);
export const IconSend = /*#__PURE__*/ createIcon(PaperPlaneTilt);
export const IconPower = /*#__PURE__*/ createIcon(Power, "bold");
export const IconHelp = /*#__PURE__*/ createIcon(Question);
export const IconTicket = /*#__PURE__*/ createIcon(Ticket);
export const IconNote = /*#__PURE__*/ createIcon(Note);
export const IconNoteEdit = /*#__PURE__*/ createIcon(NotePencil);
export const IconHash = /*#__PURE__*/ createIcon(Hash, "bold");
export const IconZap = /*#__PURE__*/ createIcon(Lightning);
export const IconWand = /*#__PURE__*/ createIcon(MagicWand);
export const IconBot = /*#__PURE__*/ createIcon(Robot);
export const IconBellOff = /*#__PURE__*/ createIcon(BellSlash);
export const IconDice = /*#__PURE__*/ createIcon(DiceFive);
export const IconTestTube = /*#__PURE__*/ createIcon(TestTube);
export const IconFacebook = /*#__PURE__*/ createIcon(FacebookLogo);
export const IconImages = /*#__PURE__*/ createIcon(Images);
export const IconFileUp = /*#__PURE__*/ createIcon(FileArrowUp);
export const IconFileSearch = /*#__PURE__*/ createIcon(FileMagnifyingGlass);
export const IconVerified = /*#__PURE__*/ createIcon(SealCheck);
export const IconChecklist = /*#__PURE__*/ createIcon(ListChecks, "bold");
export const IconUserOff = /*#__PURE__*/ createIcon(UserMinus);
export const IconUserGear = /*#__PURE__*/ createIcon(UserGear);
export const IconUnplug = /*#__PURE__*/ createIcon(Plugs);
export const IconRotate = /*#__PURE__*/ createIcon(ArrowCounterClockwise, "bold");
export const IconRedo = /*#__PURE__*/ createIcon(ArrowUUpRight, "bold");
export const IconDollar = /*#__PURE__*/ createIcon(CurrencyDollar, "bold");
export const IconArrowUpRight = /*#__PURE__*/ createIcon(ArrowUpRight, "bold");
export const IconArrowDownLeft = /*#__PURE__*/ createIcon(ArrowDownLeft, "bold");
export const IconPriorityUp = /*#__PURE__*/ createIcon(ArrowFatUp);
export const IconPriorityDown = /*#__PURE__*/ createIcon(ArrowFatDown);
export const IconAlignLeft = /*#__PURE__*/ createIcon(TextAlignLeft, "bold");
export const IconAlignCenter = /*#__PURE__*/ createIcon(TextAlignCenter, "bold");
export const IconAlignRight = /*#__PURE__*/ createIcon(TextAlignRight, "bold");
export const IconMinusCircle = /*#__PURE__*/ createIcon(MinusCircle);
export const IconPlusCircle = /*#__PURE__*/ createIcon(PlusCircle);
export const IconArrowCircleUp = /*#__PURE__*/ createIcon(ArrowCircleUp);
export const IconArrowCircleDown = /*#__PURE__*/ createIcon(ArrowCircleDown);
export const IconShieldWarning = /*#__PURE__*/ createIcon(ShieldWarning);
export const IconShieldOff = /*#__PURE__*/ createIcon(ShieldSlash);
export const IconStack = /*#__PURE__*/ createIcon(Stack);
export const IconUser = /*#__PURE__*/ createIcon(User);
export const IconCommand = /*#__PURE__*/ createIcon(Command, "bold");
export const IconHand = /*#__PURE__*/ createIcon(Hand);
export const IconCrop = /*#__PURE__*/ createIcon(Crop, "bold");
export const IconMove = /*#__PURE__*/ createIcon(ArrowsOutCardinal, "bold");
export const IconZoomIn = /*#__PURE__*/ createIcon(MagnifyingGlassPlus, "bold");
export const IconImage = /*#__PURE__*/ createIcon(Image);

/* ─── Estados e feedback ─── */
export const IconSuccess = /*#__PURE__*/ createIcon(CheckCircle);
export const IconError = /*#__PURE__*/ createIcon(XCircle);
export const IconWarning = /*#__PURE__*/ createIcon(Warning);
export const IconAlert = /*#__PURE__*/ createIcon(WarningCircle);
export const IconInfo = /*#__PURE__*/ createIcon(Info);
export const IconBlocked = /*#__PURE__*/ createIcon(Prohibit);
/** Girar no consumidor com a classe animate-spin. */
export const IconSpinner = /*#__PURE__*/ createIcon(Spinner, "bold");

/* ─── Leva do painel do ecommerce (Fase 2): paridade com os usos do lucide ─── */
export const IconMobile = /*#__PURE__*/ createIcon(DeviceMobile);
export const IconClover = /*#__PURE__*/ createIcon(Clover);
export const IconCrown = /*#__PURE__*/ createIcon(Crown);
export const IconTrophy = /*#__PURE__*/ createIcon(Trophy);
export const IconTimer = /*#__PURE__*/ createIcon(Timer);
export const IconPalette = /*#__PURE__*/ createIcon(Palette);
export const IconMonitor = /*#__PURE__*/ createIcon(Monitor);
export const IconUserAdd = /*#__PURE__*/ createIcon(UserPlus);
export const IconSparkle = /*#__PURE__*/ createIcon(Sparkle);
export const IconShare = /*#__PURE__*/ createIcon(ShareNetwork);
export const IconRocket = /*#__PURE__*/ createIcon(Rocket);
export const IconBroadcast = /*#__PURE__*/ createIcon(Broadcast);
export const IconPlay = /*#__PURE__*/ createIcon(Play);
export const IconLightbulb = /*#__PURE__*/ createIcon(Lightbulb);
export const IconHome = /*#__PURE__*/ createIcon(House);
export const IconFire = /*#__PURE__*/ createIcon(Fire);
export const IconCircleDashed = /*#__PURE__*/ createIcon(CircleDashed);
export const IconBraces = /*#__PURE__*/ createIcon(BracketsCurly);
export const IconPulse = /*#__PURE__*/ createIcon(Pulse);
export const IconImageOff = /*#__PURE__*/ createIcon(ImageBroken);
export const IconCalendarClock = /*#__PURE__*/ createIcon(CalendarDots);
export const IconMusic = /*#__PURE__*/ createIcon(MusicNote);
export const IconHandCoins = /*#__PURE__*/ createIcon(HandCoins);
export const IconPaintbrush = /*#__PURE__*/ createIcon(PaintBrush);
export const IconListChecks = /*#__PURE__*/ createIcon(ListChecks);
export const IconPlug = /*#__PURE__*/ createIcon(Plug);
export const IconPause = /*#__PURE__*/ createIcon(Pause);
export const IconTarget = /*#__PURE__*/ createIcon(Target);
export const IconCircle = /*#__PURE__*/ createIcon(Circle);
