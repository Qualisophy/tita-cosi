// src/components/react/shared/Header.tsx
import { useState, useEffect } from "react";
import { ui, languages, defaultLang } from "../../../i18n/ui";

interface HeaderProps {
  currentLang: keyof typeof ui;
}

export default function Header({ currentLang }: HeaderProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = (key: keyof (typeof ui)["es"]) =>
    ui[currentLang][key] || ui[defaultLang][key];

  // Bloquear el scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed w-full top-0 z-40 bg-titacosi-base/90 backdrop-blur-md border-b border-titacosi-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 w-full">
            {/* LOGO - Izquierda */}
            <div className="flex-1 flex items-center">
              <a
                href={`/${currentLang}`}
                className="font-serif text-2xl font-bold text-titacosi-primary"
              >
                Tita Cosi
              </a>
            </div>

            {/* NAVEGACIÓN DESKTOP - Centro */}
            <nav className="hidden md:flex flex-none justify-center space-x-8">
              <a
                href={`/${currentLang}#inicio`}
                className="text-sm font-medium hover:text-titacosi-accent transition-colors"
              >
                {t("nav.inicio")}
              </a>
              {/* Eliminado "Quiénes Somos" como pediste */}
              <a
                href={`/${currentLang}/carta`}
                className="text-sm font-medium hover:text-titacosi-accent transition-colors"
              >
                {t("nav.carta")}
              </a>
              <a
                href={`/${currentLang}/contacto`}
                className="text-sm font-medium hover:text-titacosi-accent transition-colors"
              >
                {t("nav.contacto")}
              </a>
            </nav>

            {/* ACCIONES DESKTOP - Derecha */}
            <div className="flex-1 hidden md:flex justify-end items-center gap-6">
              {/* Botón Reserva (Ahora va primero) */}
              <a
                href={`/${currentLang}/reservas`}
                className="bg-titacosi-accent text-white px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-[#6b2c2c] transition-colors rounded-sm shadow-sm"
              >
                {t("nav.reservar")}
              </a>

              {/* Selector de Idioma (Totalmente a la derecha) */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center text-sm font-medium hover:text-titacosi-accent transition-colors"
                >
                  {languages[currentLang]}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-white border border-titacosi-surface rounded shadow-lg py-1">
                    {Object.entries(languages).map(
                      ([code, label]) =>
                        (code === "es" || code === "en") && (
                          <a
                            key={code}
                            href={`/${code}`}
                            className={`block px-4 py-2 text-sm hover:bg-titacosi-surface ${currentLang === code ? "font-bold text-titacosi-accent" : ""}`}
                            onClick={() => setIsLangOpen(false)}
                          >
                            {label}
                          </a>
                        ),
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* BOTÓN HAMBURGUESA - Móvil */}
            <div className="flex-1 flex justify-end md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-titacosi-primary hover:text-titacosi-accent transition-colors p-2"
                aria-label="Abrir menú"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SIDEBAR MÓVIL */}
      {/* Overlay oscuro de fondo */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Panel lateral derecho */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-titacosi-base z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6 border-b border-titacosi-surface">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-titacosi-primary hover:text-titacosi-accent p-2"
            aria-label="Cerrar menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6 overflow-y-auto">
          <a
            href={`/${currentLang}#inicio`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-titacosi-primary hover:text-titacosi-accent"
          >
            {t("nav.inicio")}
          </a>
          <a
            href={`/${currentLang}/carta`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-titacosi-primary hover:text-titacosi-accent"
          >
            {t("nav.carta")}
          </a>
          <a
            href={`/${currentLang}/contacto`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-titacosi-primary hover:text-titacosi-accent"
          >
            {t("nav.contacto")}
          </a>

          <hr className="border-titacosi-surface" />

          {/* Selector de idioma en móvil */}
          <div className="flex gap-4">
            {Object.entries(languages).map(
              ([code, label]) =>
                (code === "es" || code === "en") && (
                  <a
                    key={code}
                    href={`/${code}`}
                    className={`text-sm ${currentLang === code ? "font-bold text-titacosi-accent underline" : "text-titacosi-primary"}`}
                  >
                    {label}
                  </a>
                ),
            )}
          </div>

          <a
            href={`/${currentLang}/reservas`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-titacosi-accent text-white text-center px-6 py-3 text-sm font-medium tracking-wide rounded-sm shadow-sm mt-4"
          >
            {t("nav.reservar")}
          </a>
        </div>
      </div>
    </>
  );
}
