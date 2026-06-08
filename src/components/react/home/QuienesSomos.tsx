// src/components/react/home/QuienesSomos.tsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ui, defaultLang } from "../../../i18n/ui";
import Button from "../ui/Button";
import imagenTaberna from "../../../assets/cosi.png";

// Registramos el plugin de GSAP para que funcione el scroll
gsap.registerPlugin(ScrollTrigger);

interface QuienesSomosProps {
  currentLang: keyof typeof ui;
}

export default function QuienesSomos({ currentLang }: QuienesSomosProps) {
  const t = (key: keyof (typeof ui)["es"]) => ui[currentLang][key] || ui[defaultLang][key];
  
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".anim-item", {
        scrollTrigger: {
          trigger: sectionRef.current, 
          start: "top 95%", 
          toggleActions: "play none none none" 
        },
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-white border-b border-titacosi-primary/5 overflow-hidden">
      {/* Aumentamos max-w a 7xl para dar espacio a las dos columnas */}
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid: 1 columna en móvil, 2 en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Textos */}
          <div className="flex flex-col items-start space-y-6 md:space-y-8 text-left">
            <h2 className="anim-item text-4xl md:text-5xl font-serif font-bold text-titacosi-primary leading-tight">
              {t("home.quienes_somos.titulo")}
            </h2>
            
            <div className="anim-item space-y-4 text-neutral-600 text-lg leading-relaxed">
              <p>{t("home.quienes_somos.p1")}</p>
              <p>{t("home.quienes_somos.p2")}</p>
            </div>
            
            <div className="anim-item pt-4">
              <a href={`/${currentLang}/contacto`}>
                <Button variant="accent">
                  Reserva tu rincón
                </Button>
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: Imagen */}
          <div className="anim-item relative w-full h-[350px] sm:h-[450px] md:h-[550px]">
            <div className="absolute inset-0 bg-titacosi-accent/5 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src={imagenTaberna.src} // <-- Reemplazo de la URL de Unsplash
              alt="Interior de Taberna Tita Cosi" 
              className="w-full h-full object-cover rounded-2xl shadow-xl border border-titacosi-surface/50"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}