 import { useRef, useState, useEffect } from "react";

interface ScrollSliderProps {
  children: React.ReactNode;
}

export default function ScrollSlider({ children }: ScrollSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Verifica si el contenedor tiene scroll disponible a izquierda o derecha
  const checkScrollLimits = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      // Margen de 2px para evitar fallos de redondeo en pantallas retina
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Manejo de eventos del teclado (flechas)
  const handleKeyDown = (e: KeyboardEvent) => {
    if (wrapperRef.current && wrapperRef.current.contains(document.activeElement)) {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleScroll("right");
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleScroll("left");
      }
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      checkScrollLimits();
      slider.addEventListener("scroll", checkScrollLimits);
      window.addEventListener("resize", checkScrollLimits);
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      slider?.removeEventListener("scroll", checkScrollLimits);
      window.removeEventListener("resize", checkScrollLimits);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [children]);

  return (
    <div 
      ref={wrapperRef}
      className="relative w-full flex items-center group/slider"
      tabIndex={0}
      role="region"
      aria-label="Filtros desplazables"
    >
      {/* Flecha Izquierda */}
      {canScrollLeft && (
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 z-10 p-2 md:p-2 bg-linear-to-r from-titacosi-base via-titacosi-base/95 to-transparent rounded-r-lg shadow-md border border-titacosi-surface text-titacosi-primary hover:bg-titacosi-accent hover:text-white transition-all backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover/slider:opacity-100 flex"
          aria-label="Desplazar izquierda"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Contenedor del contenido - ahora con mejor padding para móvil */}
      <div
        ref={sliderRef}
        className="w-full overflow-x-auto scroll-smooth flex gap-3 py-2 px-2 sm:px-0 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-titacosi-surface/20 [&::-webkit-scrollbar-thumb]:bg-titacosi-accent/40 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-titacosi-accent/60 [-ms-overflow-style:none] scrollbar-thin [scrollbar-color:var(--color-accent-40)_transparent]"
      >
        {children}
      </div>

      {/* Flecha Derecha */}
      {canScrollRight && (
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 z-10 p-2 md:p-2 bg-linear-to-l from-titacosi-base via-titacosi-base/95 to-transparent rounded-l-lg shadow-md border border-titacosi-surface text-titacosi-primary hover:bg-titacosi-accent hover:text-white transition-all backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover/slider:opacity-100 flex"
          aria-label="Desplazar derecha"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Indicador visual en móvil para mostrar que hay más contenido */}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-titacosi-base to-transparent pointer-events-none sm:hidden"></div>
      )}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-titacosi-base to-transparent pointer-events-none sm:hidden"></div>
      )}
    </div>
  );
}