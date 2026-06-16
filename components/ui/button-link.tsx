import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-accent bg-accent text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lg dark:text-[#111111]",
  secondary:
    "border-line bg-surface text-foreground shadow-sm hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent",
  ghost: "border-transparent text-muted hover:text-foreground"
};

export function ButtonLink({ children, variant = "secondary", className = "", ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent/30 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
