// src/components/react/ui/DynamicLink.tsx
import React from "react";

type LinkVariant = "accent" | "primary" | "danger";

interface DynamicLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
}

export default function DynamicLink({
  variant = "accent",
  className = "",
  children,
  ...props
}: DynamicLinkProps) {
  const baseClasses = "transition-all pb-1 border-b-2";

  const variants: Record<LinkVariant, string> = {
    accent:
      "text-titacosi-accent font-bold border-transparent hover:border-titacosi-accent",
    primary:
      "text-titacosi-primary font-semibold border-titacosi-surface hover:border-titacosi-primary italic",
    danger: "text-red-800 font-bold border-red-200 hover:border-red-800",
  };

  return (
    <a
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
