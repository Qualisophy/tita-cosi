// src/components/react/ui/Toast.tsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type ToastType = "success" | "error" | "info";

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
}

export default function Toast({
  message,
  type = "success",
  duration = 3000,
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeño delay para la animación de entrada
    const enterTimeout = setTimeout(() => setIsVisible(true), 10);

    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
      // Esperamos a que termine la animación de salida antes de desmontar
      setTimeout(onClose, 300);
    }, duration);

    return () => {
      clearTimeout(enterTimeout);
      clearTimeout(hideTimeout);
    };
  }, [duration, onClose]);

  const styles = {
    success: {
      bg: "bg-green-50 border-green-200",
      icon: "text-green-600",
      text: "text-green-800",
    },
    error: {
      bg: "bg-red-50 border-red-200",
      icon: "text-red-600",
      text: "text-red-800",
    },
    info: {
      bg: "bg-titacosi-surface border-titacosi-primary/20",
      icon: "text-titacosi-primary",
      text: "text-titacosi-primary",
    },
  };

  const Icon = () => {
    if (type === "success") {
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      );
    }
    if (type === "error") {
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      );
    }
    return (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    );
  };

  // Usamos un Portal para asegurar que el Toast se renderice al final del DOM
  // y no se quede atrapado por z-index o contenedores con overflow: hidden
  const toastContent = (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
      <div
        className={`flex items-center gap-3 px-4 py-3 border rounded-md shadow-lg pointer-events-auto transform transition-all duration-300 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        } ${styles[type].bg}`}
      >
        <div className={styles[type].icon}>
          <Icon />
        </div>
        <p className={`text-sm font-medium pr-4 ${styles[type].text}`}>
          {message}
        </p>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className={`ml-auto opacity-60 hover:opacity-100 transition-opacity ${styles[type].text}`}
          aria-label="Cerrar"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );

  // Aseguramos que solo se renderice en el cliente, ya que SSR no tiene `document`
  if (typeof document === "undefined") return null;
  return createPortal(toastContent, document.body);
}
