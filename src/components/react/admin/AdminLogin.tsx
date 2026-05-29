// src/components/react/admin/AdminLogin.tsx
import React, { useState } from "react";

interface AdminLoginProps {
  lang: string;
}

export default function AdminLogin({ lang }: AdminLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // [SOLUCIÓN RED]: Forzamos 127.0.0.1 como fallback para evitar conflictos DNS con IPv6 local
  const API_URL = import.meta.env.PUBLIC_API_URL || "http://127.0.0.1:3000/api";

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError(null);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Credenciales inválidas");
      }

      // Si es correcto, redirigimos limpiamente a la ruta del CRM
      window.location.href = `/${lang}/admin`;
    } catch (error: any) {
      // Manejo de errores de red o CORS a nivel de cliente
      const errorMessage =
        error.message === "Failed to fetch"
          ? "Error de conexión con el servidor"
          : error.message;

      setLoginError(errorMessage);
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 font-sans">
      <div className="w-full max-w-md bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-xl border border-outline-variant/30 relative overflow-hidden">
        {/* Decoración superior granate */}
        <div className="absolute top-0 left-0 w-full h-2 bg-titacosi-accent"></div>

        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl text-primary mb-2">Tita Cosi</h1>
          <p className="text-on-surface-variant font-sans text-sm font-bold tracking-widest uppercase">
            Portal de Gestión
          </p>
        </div>

        {loginError && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-4 rounded-xl mb-6 flex items-start gap-2">
            <span className="material-symbols-outlined text-[20px]">error</span>
            <p className="font-bold">{loginError}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="font-bold text-xs uppercase text-on-surface-variant block">
              Email Administrador
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              className="w-full bg-surface-container border border-outline-variant focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all"
              placeholder="admin@titacosi.com"
            />
          </div>
          <div className="space-y-2">
            <label className="font-bold text-xs uppercase text-on-surface-variant block">
              Contraseña
            </label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full bg-surface-container border border-outline-variant focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full bg-titacosi-accent text-white rounded-xl py-4 font-bold text-sm uppercase shadow-md hover:bg-opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {isLoggingIn ? (
              <>
                <span className="material-symbols-outlined text-[18px] animate-spin">
                  sync
                </span>{" "}
                Entrando...
              </>
            ) : (
              "Acceder al CRM"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
