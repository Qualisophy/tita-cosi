// src/components/react/shared/Header.tsx
import { useState, useEffect } from "react";
import { ui, languages, defaultLang } from "../../../i18n/ui";
import Button from "../ui/Button";
import type { ImageMetadata } from "astro";

interface HeaderProps {
  currentLang: keyof typeof ui;
  logo: ImageMetadata;
  currentPath: string;
}

export default function Header({
  currentLang,
  logo,
  currentPath,
}: HeaderProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = (key: keyof (typeof ui)["es"]) =>
    ui[currentLang][key] || ui[defaultLang][key];

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

  const getRedirectPath = (newLangCode: string) => {
    if (
      currentPath === `/${currentLang}` ||
      currentPath === `/${currentLang}/`
    ) {
      return `/${newLangCode}`;
    }
    return currentPath.replace(`/${currentLang}`, `/${newLangCode}`);
  };

  const isActive = (targetPath: string) => {
    const normalizedCurrent = currentPath.replace(/\/$/, "") || "/";
    const normalizedTarget = targetPath.replace(/\/$/, "") || "/";
    return normalizedCurrent === normalizedTarget;
  };

  // Ajuste para igualar la línea de la imagen usando border-bottom en lugar de underline
  const getNavClasses = (path: string) => {
    const baseClasses =
      "uppercase text-[13px] tracking-[0.15em] transition-colors duration-300 pb-1";

    return isActive(path)
      ? `${baseClasses} text-titacosi-accent font-bold border-b-2 border-titacosi-accent`
      : `${baseClasses} text-titacosi-primary/60 font-medium hover:text-titacosi-accent`;
  };

  return (
    <>
      <header className="fixed w-full top-0 z-40 bg-titacosi-base shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 w-full">
            {/* LOGO - Izquierda */}
            <div className={`flex items-center ${isMobileMenuOpen ? "invisible" : "visible"}`}>
              <a
                href={`/${currentLang}`}
                className="block transition-opacity hover:opacity-80"
              >
                <img
                  src={logo.src}
                  alt="Tita Cosi Logo"
                  className="h-10 w-auto object-contain"
                  loading="eager"
                />
              </a>
            </div>

            {/* ELEMENTOS DERECHA - Desktop (Navegación + Botón + Idioma) */}
            <div className="hidden md:flex items-center gap-8">
              {/* Navegación */}
              <nav className="flex space-x-8 items-center mt-1">
                <a
                  href={`/${currentLang}`}
                  className={getNavClasses(`/${currentLang}`)}
                >
                  {t("nav.inicio")}
                </a>
                <a
                  href={`/${currentLang}/carta`}
                  className={getNavClasses(`/${currentLang}/carta`)}
                >
                  {t("nav.carta")}
                </a>
                <a
                  href={`/${currentLang}/contacto`}
                  className={getNavClasses(`/${currentLang}/contacto`)}
                >
                  {t("nav.contacto")}
                </a>
              </nav>

              {/* Botón CTA */}
              <Button
                variant="accent"
                onClick={() =>
                  (window.location.href = `/${currentLang}/reservas`)
                }
                className="text-sm font-medium !px-6 !py-2.5 rounded-md shadow-none hover:bg-titacosi-accent/90 transition-colors"
              >
                {t("nav.reservar")}
              </Button>

              {/* Selector de Idioma */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center text-[13px] tracking-wider text-titacosi-primary/70 hover:text-titacosi-accent transition-colors"
                >
                  {currentLang.toUpperCase()}
                  <svg
                    className="w-4 h-4 ml-1 opacity-70"
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
                  <div className="absolute right-0 mt-2 w-24 bg-white border border-titacosi-surface rounded-md shadow-lg py-1">
                    {Object.entries(languages).map(
                      ([code, label]) =>
                        ["es", "en", "fr", "de"].includes(code) && (
                          <a
                            key={code}
                            href={getRedirectPath(code)}
                            className={`block px-4 py-2 text-sm hover:bg-titacosi-surface ${currentLang === code ? "font-bold text-titacosi-accent" : "text-titacosi-primary"}`}
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
            <div className={`flex justify-end md:hidden ${isMobileMenuOpen ? "invisible" : "visible"}`}>
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

      {/* SIDEBAR MÓVIL (Mantenido intacto) */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-titacosi-base z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-titacosi-surface">
          <img
            src={logo.src}
            alt="Tita Cosi Logo"
            className="h-8 w-auto object-contain"
            loading="eager"
          />
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
            href={`/${currentLang}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className={getNavClasses(`/${currentLang}`)}
          >
            {t("nav.inicio")}
          </a>
          <a
            href={`/${currentLang}/carta`}
            onClick={() => setIsMobileMenuOpen(false)}
            className={getNavClasses(`/${currentLang}/carta`)}
          >
            {t("nav.carta")}
          </a>
          <a
            href={`/${currentLang}/contacto`}
            onClick={() => setIsMobileMenuOpen(false)}
            className={getNavClasses(`/${currentLang}/contacto`)}
          >
            {t("nav.contacto")}
          </a>

          <hr className="border-titacosi-surface" />

          {/* Selector de Idioma MÓVIL */}
          <div className="flex gap-4">
            {Object.entries(languages).map(
              ([code, label]) =>
                ["es", "en", "fr", "de"].includes(code) && (
                  <a
                    key={code}
                    href={getRedirectPath(code)}
                    className={`text-sm ${currentLang === code ? "font-bold text-titacosi-accent underline" : "text-titacosi-primary/70"}`}
                  >
                    {label}
                  </a>
                ),
            )}
          </div>

          <Button
            variant="accent"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.location.href = `/${currentLang}/reservas`;
            }}
            className="w-full mt-4 text-sm shadow-sm"
          >
            {t("nav.reservar")}
          </Button>
        </div>
      </div>
    </>
  );
}