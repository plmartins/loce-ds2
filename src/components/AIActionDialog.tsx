import type { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../primitives/dialog';
import { AISurface } from './AISurface';
import { AIIcon } from './AIIcon';
export type AIActionDialogProps = { open: boolean; onOpenChange: (open: boolean) => void; title: ReactNode; description?: ReactNode; children: ReactNode; loading?: boolean; className?: string };
export function AIActionDialog({ open, onOpenChange, title, description, loading, children, className }: AIActionDialogProps) {
    return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className={`ds-ai-dialog ${className ?? ''}`}>
        <AISurface loading={loading} borderRadius={24}><header className="ds-ai-dialog-header"><AIIcon size={28} /><DialogTitle>{title}</DialogTitle>{description && <DialogDescription>{description}</DialogDescription>}</header>{children}</AISurface>
    </DialogContent></Dialog>;
}
