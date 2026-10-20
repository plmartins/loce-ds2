export { cn } from "./lib/utils";
export { AIIcon, type AIIconProps } from "./components/AIIcon";
export { AICard, type AICardProps } from "./components/AICard";
export * from "./shell";

export { Button, buttonVariants, type ButtonProps } from "./components/Button";
export { Input, fieldClass, type InputProps } from "./components/Input";
export { SearchInput, type SearchInputProps } from "./components/SearchInput";
export { Select, NativeSelect, type SelectProps, type NativeSelectProps, type SelectOption } from "./components/Select";
export { Switch, type SwitchProps } from "./components/Switch";
export { Badge, badgeVariants, type BadgeProps } from "./components/Badge";
export { DataTable, type DataTableProps, type Column, type Action, type SortState } from "./components/DataTable";
export { PaginationBar, type PaginationBarProps } from "./components/PaginationBar";
export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "./primitives/dropdown-menu";
export {
    Dialog,
    DialogTrigger,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogBody,
    DialogFooter,
} from "./primitives/dialog";
export { Tooltip, type TooltipProps } from "./components/Tooltip";
export { Avatar, type AvatarProps } from "./components/Avatar";
export { FaceAvatar, type FaceAvatarProps } from "./components/FaceAvatar";
export { IconTile, type IconTileProps, type IconTileTone } from "./components/IconTile";
export { SplashScreen, type SplashScreenProps } from "./components/SplashScreen";
export { Skeleton, SkeletonText, SkeletonCard, SkeletonTable, type SkeletonProps } from "./components/Skeleton";
export { SkeletonForm } from "./components/SkeletonForm";
export { TagsInput, type TagsInputProps } from "./components/TagsInput";
export { MetricCard, type MetricCardProps, type MetricDeltaTone, type MetricAccent } from "./components/MetricCard";
export { SegmentedControl, type SegmentedControlProps, type SegmentedControlOption } from "./components/SegmentedControl";
export { BarList, type BarListProps, type BarListItem } from "./components/BarList";
export { EmptyState, type EmptyStateProps } from "./components/EmptyState";
export { ComboBox, type ComboBoxProps, type ComboBoxOption } from "./components/ComboBox";
export { Text, textVariantMap, type TextProps, type TextVariant } from "./components/Text";
export { Tabs, type TabsProps, type Tab } from "./components/Tabs";
export { StatusDot, type StatusDotProps } from "./components/StatusDot";
export { Checkbox, type CheckboxProps } from "./components/Checkbox";
export { Textarea, type TextareaProps } from "./components/Textarea";
export { Timeline, type TimelineProps, type TimelineItem } from "./components/Timeline";
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/Card";
export { Separator, type SeparatorProps } from "./components/Separator";
export { TextCopy, type TextCopyProps } from "./components/TextCopy";
export { DropdownActions, type DropdownActionsProps, type DropdownAction } from "./components/DropdownActions";
export { SelectCard, type SelectCardProps, type SelectCardOption } from "./components/SelectCard";
export { ConfigCard, type ConfigCardProps } from "./components/ConfigCard";
export { ModalConfirm, type ModalConfirmProps } from "./components/ModalConfirm";
export { ModalDelete, type ModalDeleteProps } from "./components/ModalDelete";
export { SheetEntity, type SheetEntityProps } from "./components/SheetEntity";
export { ScrollFade, type ScrollFadeProps } from "./components/ScrollFade";
export { MultiSelect, type MultiSelectProps, type MultiSelectOption } from "./components/MultiSelect";
export { TimeInput, type TimeInputProps } from "./components/TimeInput";
export { ImageWithZoom, type ImageWithZoomProps } from "./components/ImageWithZoom";
export { ImageUpload, type ImageUploadProps } from "./components/ImageUpload";
export { DatePicker, type DatePickerProps } from "./components/DatePicker";
export { DateRangePicker, type DateRangePickerProps, type DateRangePreset, type DateRange } from "./components/DateRangePicker";
export { Calendar } from "./primitives/calendar";
export { Toaster } from "./components/Toaster";
export { toast } from "react-hot-toast";
export type { Toast, ToasterProps, ToastOptions, ToastPosition } from "react-hot-toast";

export { isFilterActive, type FilterStateProps } from "./lib/filter";

// Padrões de listagem e dashboard da suíte (painel, ERP, Talkbia).
export { TableLoading, type TableLoadingProps } from "./components/TableLoading";
export { TableHeading, type TableHeadingProps } from "./components/TableHeading";
export { ErrorState, type ErrorStateProps } from "./components/ErrorState";
export { StatStrip, type StatStripProps, type StatStripItem } from "./components/StatStrip";
export { WidgetCard, type WidgetCardProps } from "./components/WidgetCard";
export { RankList, formatShare, type RankListProps, type RankListItem, type RankListSplit } from "./components/RankList";
export { ACCENT_TILE, ACCENT_GLOW, ACCENT_TEXT, type WidgetAccent } from "./lib/accents";

export { AIButton, AISendButton, AICost, type AIButtonProps, type AISendButtonProps, type AICostProps } from './components/AIButton';
export { AISurface, AIWidget, type AISurfaceProps, type AIWidgetProps } from './components/AISurface';
export { AIActivity, type AIActivityProps } from './components/AIActivity';
export { AIComposer, AIComposerInput, AIComposerRegion, type AIComposerProps, type AIComposerInputProps } from './components/AIComposer';
export { AIMediaPreview, type AIMediaPreviewProps } from './components/AIMediaPreview';
export { AIActionDialog, type AIActionDialogProps } from './components/AIActionDialog';
export { AISpectrum, type AISpectrumProps } from './components/AISpectrum';
export { AISplitButton, type AISplitButtonProps } from './components/AISplitButton';
export { EmojiPicker, type EmojiPickerProps } from './components/EmojiPicker';
