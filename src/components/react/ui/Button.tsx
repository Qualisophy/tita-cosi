// src/components/react/ui/Button.tsx
import React from "react";

type ButtonVariant =
  | "accent"
  | "primary"
  | "surface"
  | "success"
  | "danger"
  | "outline-accent"
  | "outline-primary"
  | "outline-white";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Base estricta de tu UI Kit: padding, bordes, fuente y la transición. Cero movimientos (sin translate-y).
  const baseClasses =
    "px-6 py-3 rounded-md font-bold tracking-wide transition-all focus:outline-none";

  const variants: Record<ButtonVariant, string> = {
    // ⚠️ Corregido para Tailwind v4: usamos /90 en lugar de bg-opacity-90
    accent:
      "bg-titacosi-accent text-white hover:bg-titacosi-accent/90 focus:ring-2 focus:ring-titacosi-accent focus:ring-offset-2",

    // El resto calcados de tu HTML
    primary: "bg-titacosi-primary text-white hover:bg-gray-800 italic",
    surface:
      "bg-titacosi-surface text-titacosi-primary hover:bg-titacosi-surface/80",
    success: "bg-green-700 text-white hover:bg-green-800",
    danger: "bg-red-800 text-white hover:bg-red-900",
    "outline-accent":
      "border-2 border-titacosi-accent text-titacosi-accent hover:bg-titacosi-accent hover:text-white",
    "outline-primary":
      "border-2 border-titacosi-primary text-titacosi-primary hover:bg-titacosi-primary hover:text-white italic",

    // Variante extra para el botón secundario del banner oscuro
    "outline-white":
      "border-2 border-white text-white hover:bg-white hover:text-titacosi-primary",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
