// src/components/react/home/QuienesSomos.tsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ui, defaultLang } from "../../../i18n/ui";
import Button from "../ui/Button";

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
        // --- AQUÍ ESTÁ LA MAGIA ---
        scrollTrigger: {
          trigger: sectionRef.current, // El elemento que vigila
          start: "top 80%", // Arranca cuando el TOP de la sección llega al 80% de la pantalla
          toggleActions: "play none none none" // Solo se reproduce una vez
        },
        // --------------------------
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-white border-b border-titacosi-primary/5">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center space-y-10">
          
          <h2 className="anim-item text-4xl md:text-5xl font-serif font-bold text-titacosi-primary leading-tight">
            {t("home.quienes_somos.titulo")}
          </h2>
          
          <div className="anim-item space-y-6 text-neutral-600 text-lg md:text-xl leading-relaxed max-w-3xl">
            <p>{t("home.quienes_somos.p1")}</p>
            <p>{t("home.quienes_somos.p2")}</p>
          </div>
          
          <div className="anim-item pt-6">
            <a href={`/${currentLang}/contacto`}>
              <Button variant="accent">
                {t("home.quienes_somos.boton")}
              </Button>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}