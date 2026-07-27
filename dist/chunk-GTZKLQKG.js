import { Gauge, Cube, ShoppingBag, ArrowsLeftRight, Users, CurrencyCircleDollar, ClipboardText, PlugsConnected, GearSix, UserCircle, Truck, Moped, Storefront, Buildings, Wallet, Coins, CreditCard, HandCoins, Vault, Tag, SealPercent, FileText, Receipt, Printer, QrCode, ShoppingCart, MapPin, Gift, BellRinging, EnvelopeSimple, Phone, LinkSimple, Globe, ShieldCheck, Key, Lock, Sparkle, Plus, X, Trash, PencilSimple, Check, MagnifyingGlass, Copy, FloppyDisk, Eye, EyeSlash, ArrowsClockwise, UploadSimple, ArrowUUpLeft, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Minus, DownloadSimple, ArrowSquareOut, SlidersHorizontal, CaretDown, CaretUpDown, DotsThree, CaretUp, CaretLeft, CaretRight, SquaresFour, Megaphone, ChatCircleDots, PushPin, List, Moon, Sun, SignOut, ChartBar, Percent, TrendUp, TrendDown, StackPlus, Scales, CalendarBlank, Barcode, ClockCounterClockwise, CheckCircle, XCircle, Warning, WarningCircle, Info, Prohibit, Spinner } from '@phosphor-icons/react';
import { createElement } from 'react';

// src/icons/map.ts
function createIcon(Base, defaultWeight = "fill") {
  function Icon({ size = 20, className, weight }) {
    return createElement(Base, { size, className, weight: weight ?? defaultWeight });
  }
  Icon.displayName = `LoceIcon(${Base.displayName ?? Base.name ?? "Icon"})`;
  return Icon;
}

// src/icons/map.ts
var IconDashboard = /* @__PURE__ */ createIcon(Gauge);
var IconCatalog = /* @__PURE__ */ createIcon(Cube);
var IconSales = /* @__PURE__ */ createIcon(ShoppingBag);
var IconLogistics = /* @__PURE__ */ createIcon(ArrowsLeftRight, "bold");
var IconPeople = /* @__PURE__ */ createIcon(Users);
var IconFinance = /* @__PURE__ */ createIcon(CurrencyCircleDollar);
var IconTasks = /* @__PURE__ */ createIcon(ClipboardText);
var IconIntegrations = /* @__PURE__ */ createIcon(PlugsConnected);
var IconSettings = /* @__PURE__ */ createIcon(GearSix);
var IconProducts = /* @__PURE__ */ createIcon(Cube);
var IconClients = /* @__PURE__ */ createIcon(UserCircle);
var IconSupplier = /* @__PURE__ */ createIcon(Truck);
var IconCourier = /* @__PURE__ */ createIcon(Moped);
var IconStore = /* @__PURE__ */ createIcon(Storefront);
var IconCompany = /* @__PURE__ */ createIcon(Buildings);
var IconWallet = /* @__PURE__ */ createIcon(Wallet);
var IconMoney = /* @__PURE__ */ createIcon(Coins);
var IconCard = /* @__PURE__ */ createIcon(CreditCard);
var IconCommission = /* @__PURE__ */ createIcon(HandCoins);
var IconVault = /* @__PURE__ */ createIcon(Vault);
var IconTag = /* @__PURE__ */ createIcon(Tag);
var IconPromotion = /* @__PURE__ */ createIcon(SealPercent);
var IconInvoice = /* @__PURE__ */ createIcon(FileText);
var IconReceipt = /* @__PURE__ */ createIcon(Receipt);
var IconPrinter = /* @__PURE__ */ createIcon(Printer);
var IconQrCode = /* @__PURE__ */ createIcon(QrCode);
var IconCart = /* @__PURE__ */ createIcon(ShoppingCart);
var IconAddress = /* @__PURE__ */ createIcon(MapPin);
var IconGift = /* @__PURE__ */ createIcon(Gift);
var IconNotification = /* @__PURE__ */ createIcon(BellRinging);
var IconMail = /* @__PURE__ */ createIcon(EnvelopeSimple);
var IconPhone = /* @__PURE__ */ createIcon(Phone);
var IconLink = /* @__PURE__ */ createIcon(LinkSimple, "bold");
var IconGlobe = /* @__PURE__ */ createIcon(Globe);
var IconShield = /* @__PURE__ */ createIcon(ShieldCheck);
var IconKey = /* @__PURE__ */ createIcon(Key);
var IconLock = /* @__PURE__ */ createIcon(Lock);
var IconAI = /* @__PURE__ */ createIcon(Sparkle);
var IconPlus = /* @__PURE__ */ createIcon(Plus, "bold");
var IconClose = /* @__PURE__ */ createIcon(X, "bold");
var IconTrash = /* @__PURE__ */ createIcon(Trash);
var IconEdit = /* @__PURE__ */ createIcon(PencilSimple);
var IconCheck = /* @__PURE__ */ createIcon(Check, "bold");
var IconSearch = /* @__PURE__ */ createIcon(MagnifyingGlass, "bold");
var IconCopy = /* @__PURE__ */ createIcon(Copy);
var IconSave = /* @__PURE__ */ createIcon(FloppyDisk);
var IconEye = /* @__PURE__ */ createIcon(Eye);
var IconEyeOff = /* @__PURE__ */ createIcon(EyeSlash);
var IconRefresh = /* @__PURE__ */ createIcon(ArrowsClockwise, "bold");
var IconUpload = /* @__PURE__ */ createIcon(UploadSimple, "bold");
var IconUndo = /* @__PURE__ */ createIcon(ArrowUUpLeft, "bold");
var IconArrowLeft = /* @__PURE__ */ createIcon(ArrowLeft, "bold");
var IconArrowRight = /* @__PURE__ */ createIcon(ArrowRight, "bold");
var IconArrowUp = /* @__PURE__ */ createIcon(ArrowUp, "bold");
var IconArrowDown = /* @__PURE__ */ createIcon(ArrowDown, "bold");
var IconMinus = /* @__PURE__ */ createIcon(Minus, "bold");
var IconDownload = /* @__PURE__ */ createIcon(DownloadSimple, "bold");
var IconExternal = /* @__PURE__ */ createIcon(ArrowSquareOut, "bold");
var IconFilters = /* @__PURE__ */ createIcon(SlidersHorizontal, "bold");
var IconChevronDown = /* @__PURE__ */ createIcon(CaretDown, "bold");
var IconSort = /* @__PURE__ */ createIcon(CaretUpDown, "bold");
var IconMore = /* @__PURE__ */ createIcon(DotsThree, "bold");
var IconChevronUp = /* @__PURE__ */ createIcon(CaretUp, "bold");
var IconChevronLeft = /* @__PURE__ */ createIcon(CaretLeft, "bold");
var IconChevronRight = /* @__PURE__ */ createIcon(CaretRight, "bold");
var IconApps = /* @__PURE__ */ createIcon(SquaresFour);
var IconMarketing = /* @__PURE__ */ createIcon(Megaphone);
var IconChat = /* @__PURE__ */ createIcon(ChatCircleDots);
var IconPin = /* @__PURE__ */ createIcon(PushPin);
var IconMenu = /* @__PURE__ */ createIcon(List, "bold");
var IconMoon = /* @__PURE__ */ createIcon(Moon);
var IconSun = /* @__PURE__ */ createIcon(Sun);
var IconLogout = /* @__PURE__ */ createIcon(SignOut, "bold");
var IconChart = /* @__PURE__ */ createIcon(ChartBar);
var IconPercent = /* @__PURE__ */ createIcon(Percent, "bold");
var IconTrendUp = /* @__PURE__ */ createIcon(TrendUp, "bold");
var IconTrendDown = /* @__PURE__ */ createIcon(TrendDown, "bold");
var IconStockAdd = /* @__PURE__ */ createIcon(StackPlus);
var IconBalance = /* @__PURE__ */ createIcon(Scales);
var IconCalendar = /* @__PURE__ */ createIcon(CalendarBlank);
var IconBarcode = /* @__PURE__ */ createIcon(Barcode);
var IconHistory = /* @__PURE__ */ createIcon(ClockCounterClockwise, "bold");
var IconSuccess = /* @__PURE__ */ createIcon(CheckCircle);
var IconError = /* @__PURE__ */ createIcon(XCircle);
var IconWarning = /* @__PURE__ */ createIcon(Warning);
var IconAlert = /* @__PURE__ */ createIcon(WarningCircle);
var IconInfo = /* @__PURE__ */ createIcon(Info);
var IconBlocked = /* @__PURE__ */ createIcon(Prohibit);
var IconSpinner = /* @__PURE__ */ createIcon(Spinner, "bold");

export { IconAI, IconAddress, IconAlert, IconApps, IconArrowDown, IconArrowLeft, IconArrowRight, IconArrowUp, IconBalance, IconBarcode, IconBlocked, IconCalendar, IconCard, IconCart, IconCatalog, IconChart, IconChat, IconCheck, IconChevronDown, IconChevronLeft, IconChevronRight, IconChevronUp, IconClients, IconClose, IconCommission, IconCompany, IconCopy, IconCourier, IconDashboard, IconDownload, IconEdit, IconError, IconExternal, IconEye, IconEyeOff, IconFilters, IconFinance, IconGift, IconGlobe, IconHistory, IconInfo, IconIntegrations, IconInvoice, IconKey, IconLink, IconLock, IconLogistics, IconLogout, IconMail, IconMarketing, IconMenu, IconMinus, IconMoney, IconMoon, IconMore, IconNotification, IconPeople, IconPercent, IconPhone, IconPin, IconPlus, IconPrinter, IconProducts, IconPromotion, IconQrCode, IconReceipt, IconRefresh, IconSales, IconSave, IconSearch, IconSettings, IconShield, IconSort, IconSpinner, IconStockAdd, IconStore, IconSuccess, IconSun, IconSupplier, IconTag, IconTasks, IconTrash, IconTrendDown, IconTrendUp, IconUndo, IconUpload, IconVault, IconWallet, IconWarning };
//# sourceMappingURL=chunk-GTZKLQKG.js.map
//# sourceMappingURL=chunk-GTZKLQKG.js.map