// src/components/react/home/QueHacemos.tsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ui, defaultLang } from "../../../i18n/ui";

gsap.registerPlugin(ScrollTrigger);

interface QueHacemosProps {
  currentLang: keyof typeof ui;
}

export default function QueHacemos({ currentLang }: QueHacemosProps) {
  const t = (key: keyof (typeof ui)["es"]) => ui[currentLang][key] || ui[defaultLang][key];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Si no hay referencia, no hacemos nada (seguridad para SSR)
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animamos el título
      gsap.from(".anim-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", // Arranca cuando asoma el título
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Animamos los CONTENEDORES de las tarjetas en cascada
      gsap.from(".anim-card", {
        scrollTrigger: {
          trigger: ".grid-cards", // Vigila el grid contenedor
          start: "top 75%",      // Arranca cuando el grid está a la vista
          toggleActions: "play none none none"
        },
        y: 100,            // Distancia más notable
        opacity: 0,
        duration: 1.2,     // Entrada suave
        stagger: 0.3,      // Cascada marcada
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-titacosi-surface/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="anim-title text-4xl md:text-5xl font-serif font-bold text-titacosi-primary">
            {t("home.que_hacemos.titulo")}
          </h2>
        </div>

        {/* Añadimos clase al grid para el trigger */}
        <div className="grid-cards grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* --- TARJETA 1 --- */}
          {/* Este div '.anim-card' es SOLO para GSAP, no tiene estilos */}
          <div className="anim-card">
           
            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white rounded-2xl shadow-sm border border-titacosi-primary/5 transition-transform hover:-translate-y-1 h-full">
              <div className="w-16 h-16 bg-titacosi-accent/10 text-titacosi-accent rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-titacosi-primary">{t("home.que_hacemos.item1.title")}</h3>
              <p className="text-neutral-600 leading-relaxed">{t("home.que_hacemos.item1.desc")}</p>
            </div>
          </div>

          {/* --- TARJETA 2 --- */}
          <div className="anim-card">
            
            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white rounded-2xl shadow-sm border border-titacosi-primary/5 transition-transform hover:-translate-y-1 h-full">
              <div className="w-16 h-16 bg-titacosi-accent/10 text-titacosi-accent rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-titacosi-primary">{t("home.que_hacemos.item2.title")}</h3>
              <p className="text-neutral-600 leading-relaxed">{t("home.que_hacemos.item2.desc")}</p>
            </div>
          </div>

          {/* --- TARJETA 3 --- */}
          <div className="anim-card">
           
            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white rounded-2xl shadow-sm border border-titacosi-primary/5 transition-transform hover:-translate-y-1 h-full">
              <div className="w-16 h-16 bg-titacosi-accent/10 text-titacosi-accent rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-titacosi-primary">{t("home.que_hacemos.item3.title")}</h3>
              <p className="text-neutral-600 leading-relaxed">{t("home.que_hacemos.item3.desc")}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}