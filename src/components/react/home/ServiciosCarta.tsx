// src/components/react/home/ServiciosCarta.tsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ui, defaultLang } from "../../../i18n/ui";
import Button from "../ui/Button"; // <-- Recuperamos tu botón limpio

gsap.registerPlugin(ScrollTrigger);

interface ServiciosCartaProps {
  currentLang: keyof typeof ui;
  image1: string;
  image2: string;
  image3: string;
}

export default function ServiciosCarta({ currentLang, image1, image2, image3 }: ServiciosCartaProps) {
  const t = (key: keyof (typeof ui)["es"]) => ui[currentLang][key] || ui[defaultLang][key];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Animamos la cabecera (Título, texto y botón)
      gsap.from(".anim-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2, // Entran uno detrás de otro suavemente
        ease: "power3.out"
      });

      // 2. Animamos las tarjetas de las imágenes
      gsap.from(".anim-image", {
        scrollTrigger: {
          trigger: ".grid-images", // Vigila el contenedor de las fotos
          start: "top 75%",
          toggleActions: "play none none none"
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3, // Cascada de izquierda a derecha
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Centrada */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="anim-header text-4xl md:text-5xl font-serif font-bold text-titacosi-primary mb-6 leading-tight">
            {t("home.servicios.titulo")}
          </h2>
          <p className="anim-header text-neutral-600 text-lg md:text-xl leading-relaxed mb-8">
            {t("home.servicios.desc")}
          </p>
          <div className="anim-header">
            <a href={`/${currentLang}/carta`}>
              <Button variant="accent">
                {t("home.servicios.boton")}
              </Button>
            </a>
          </div>
        </div>

        {/* Grid de 3 Imágenes REALES */}
        <div className="grid-images grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Foto 1 - Croquetas */}
          {/* Envoltorio limpio para GSAP */}
          <div className="anim-image"> 
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-neutral-100 group h-full">
              <img 
                src={image1} 
                alt="Plato de Croquetas Caseras de Taberna Tita Cosi" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="text-white text-lg font-bold">Croquetas Caseras</span>
              </div>
            </div>
          </div>

          {/* Foto 2 - Tostas */}
          <div className="anim-image">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-neutral-100 group h-full">
              <img 
                src={image2} 
                alt="Selección de Tostas y Bocados" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="text-white text-lg font-bold">Tostas y Bocados</span>
              </div>
            </div>
          </div>

          {/* Foto 3 - Carnes */}
          <div className="anim-image">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-neutral-100 group h-full">
              <img 
                src={image3} 
                alt="Carnes Jugosas a la Parrilla" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="text-white text-lg font-bold">Carnes Jugosas</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}