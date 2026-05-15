// src/components/react/ui/Input.tsx
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  state?: "default" | "success" | "error";
  icon?: React.ReactNode;
}

export default function Input({
  label,
  state = "default",
  icon,
  className = "",
  ...props
}: InputProps) {
  const stateClasses = {
    default: "border-transparent focus:ring-2 focus:ring-titacosi-accent",
    success: "border-green-600 focus:ring-2 focus:ring-green-600",
    error: "border-red-600 focus:ring-2 focus:ring-red-600",
  };

  const stateTextColors = {
    default: "text-titacosi-primary",
    success: "text-green-600",
    error: "text-red-600",
  };

  return (
    <div className={`flex flex-col gap-2 relative ${className}`}>
      <label className="text-sm font-bold opacity-70 italic font-serif">
        {label}
      </label>
      <div className="relative">
        <input
          className={`w-full bg-titacosi-surface border px-4 py-3 rounded-md focus:outline-none transition-all ${stateClasses[state]} ${icon ? (props.type === "search" ? "pl-10 pr-4" : "pr-10") : ""}`}
          {...props}
        />
        {icon && (
          <div
            className={`absolute top-3.5 ${props.type === "search" ? "left-3 opacity-50" : `right-3 ${stateTextColors[state]}`}`}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
