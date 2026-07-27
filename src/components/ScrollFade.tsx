import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

export type ScrollFadeProps = {
    children: React.ReactNode;
    className?: string;
    fadeHeight?: number;
    position?: "bottom" | "top" | "both";
};

/** Contêiner rolável com fade nas bordas indicando conteúdo além da dobra. */
export function ScrollFade({ children, className, fadeHeight = 60, position = "bottom" }: ScrollFadeProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [showTop, setShowTop] = useState(false);
    const [showBottom, setShowBottom] = useState(false);

    const check = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        const { scrollTop, scrollHeight, clientHeight } = el;
        setShowTop(scrollTop > 10);
        setShowBottom(scrollHeight - scrollTop - clientHeight > 10);
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        check();
        el.addEventListener("scroll", check, { passive: true });
        const observer = new ResizeObserver(check);
        observer.observe(el);
        return () => {
            el.removeEventListener("scroll", check);
            observer.disconnect();
        };
    }, [check]);

    const showTopFade = (position === "top" || position === "both") && showTop;
    const showBottomFade = (position === "bottom" || position === "both") && showBottom;

    const fadeStyle = (direction: "top" | "bottom") => ({
        height: fadeHeight,
        background: `linear-gradient(to ${direction === "top" ? "bottom" : "top"}, var(--card), transparent)`,
        mask: `linear-gradient(to ${direction === "top" ? "bottom" : "top"}, black, transparent)`,
        WebkitMask: `linear-gradient(to ${direction === "top" ? "bottom" : "top"}, black, transparent)`,
    });

    return (
        <div className="relative min-h-0 flex-1">
            {showTopFade && <div className="pointer-events-none absolute left-0 right-0 top-0 z-10" style={fadeStyle("top")} />}
            <div ref={ref} className={cn("h-full overflow-y-auto", className)}>
                {children}
            </div>
            {showBottomFade && <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10" style={fadeStyle("bottom")} />}
        </div>
    );
}
