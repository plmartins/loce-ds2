import { Toaster as HotToaster, type ToasterProps } from "react-hot-toast";

/**
 * Toaster da suíte: react-hot-toast com a superfície do ds2.
 * Montar uma vez no root do app; disparar com `toast` (re-export do índice).
 */
export function Toaster(props: ToasterProps) {
    return (
        <HotToaster
            position="bottom-center"
            gutter={8}
            toastOptions={{
                duration: 3500,
                style: {
                    background: "var(--card)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    boxShadow: "0 12px 32px -8px rgb(0 0 0 / 0.18)",
                    fontSize: "13px",
                    fontWeight: 600,
                    padding: "10px 14px",
                },
                success: {
                    iconTheme: { primary: "var(--success)", secondary: "white" },
                },
                error: {
                    iconTheme: { primary: "var(--destructive)", secondary: "white" },
                },
            }}
            {...props}
        />
    );
}
